import React, { useEffect, useState } from 'react';
import { FaBolt, FaFilter, FaPause, FaPlay, FaRedo, FaServer, FaSkullCrossbones, FaStream } from 'react-icons/fa';
import MissionBanner from './MissionBanner';
import './EventMeshLab.css';

const createSimulation = (partitionCount, consumerCount) => ({
  tick: 0,
  totalPublished: 0,
  totalProcessed: 0,
  retries: 0,
  deadLetters: 0,
  partitions: Array.from({ length: partitionCount }, (_, index) => ({
    id: index + 1,
    backlog: index === 0 ? 2 : 0,
    processed: 0,
    throughput: 0,
  })),
  consumers: Array.from({ length: consumerCount }, (_, index) => ({
    id: index + 1,
    lag: 0,
    processed: 0,
    state: 'healthy',
  })),
  events: [
    { id: 'boot-1', message: 'Simulation initialized with broker partitions online.' },
    { id: 'boot-2', message: 'Consumers attached to partition assignments.' },
  ],
});

const appendEvent = (events, message, tick) => {
  const nextEvent = {
    id: `${tick}-${events.length}-${message.slice(0, 12)}`,
    message,
  };

  return [nextEvent, ...events].slice(0, 7);
};

const simulateTick = (snapshot, config) => {
  const next = {
    ...snapshot,
    tick: snapshot.tick + 1,
    partitions: snapshot.partitions.map((partition) => ({ ...partition, throughput: 0 })),
    consumers: snapshot.consumers.map((consumer) => ({ ...consumer })),
    events: [...snapshot.events],
  };

  const publishCount = 2 + Math.floor(Math.random() * 3);

  for (let eventIndex = 0; eventIndex < publishCount; eventIndex += 1) {
    const partitionIndex =
      config.hotPartition && Math.random() < 0.68
        ? 0
        : Math.floor(Math.random() * next.partitions.length);

    next.partitions[partitionIndex].backlog += 1;
    next.totalPublished += 1;
  }

  next.events = appendEvent(
    next.events,
    `${publishCount} events published into ${next.partitions.length} partitions.`,
    next.tick,
  );

  next.consumers.forEach((consumer, consumerIndex) => {
    const assignedPartitions = next.partitions.filter(
      (_, partitionIndex) => partitionIndex % next.consumers.length === consumerIndex,
    );

    const capacity =
      config.slowConsumer && consumerIndex === next.consumers.length - 1 ? 1 : 2;

    for (let processedIndex = 0; processedIndex < capacity; processedIndex += 1) {
      const targetPartition = assignedPartitions
        .filter((partition) => partition.backlog > 0)
        .sort((left, right) => right.backlog - left.backlog)[0];

      if (!targetPartition) {
        break;
      }

      targetPartition.backlog -= 1;
      targetPartition.throughput += 1;

      const failed = Math.random() < (config.retryEnabled ? 0.16 : 0.08);

      if (failed) {
        if (config.deadLetterEnabled && Math.random() < 0.35) {
          next.deadLetters += 1;
          next.events = appendEvent(
            next.events,
            `Partition ${targetPartition.id} routed an exhausted event to the dead-letter queue.`,
            next.tick,
          );
        } else if (config.retryEnabled) {
          targetPartition.backlog += 1;
          next.retries += 1;
        }
      } else {
        consumer.processed += 1;
        targetPartition.processed += 1;
        next.totalProcessed += 1;
      }
    }

    const lag = assignedPartitions.reduce((total, partition) => total + partition.backlog, 0);
    consumer.lag = lag;
    consumer.state =
      config.slowConsumer && consumerIndex === next.consumers.length - 1
        ? 'throttled'
        : lag > 8
          ? 'lagging'
          : 'healthy';
  });

  return next;
};

const EventMeshLab = () => {
  const [partitionCount, setPartitionCount] = useState(3);
  const [consumerCount, setConsumerCount] = useState(2);
  const [isRunning, setIsRunning] = useState(true);
  const [hotPartition, setHotPartition] = useState(false);
  const [retryEnabled, setRetryEnabled] = useState(true);
  const [slowConsumer, setSlowConsumer] = useState(false);
  const [deadLetterEnabled, setDeadLetterEnabled] = useState(true);
  const [simulation, setSimulation] = useState(() => createSimulation(3, 2));

  useEffect(() => {
    setSimulation(createSimulation(partitionCount, consumerCount));
  }, [partitionCount, consumerCount]);

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setSimulation((current) =>
        simulateTick(current, {
          hotPartition,
          retryEnabled,
          slowConsumer,
          deadLetterEnabled,
        }),
      );
    }, 900);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isRunning, hotPartition, retryEnabled, slowConsumer, deadLetterEnabled]);

  const totalBacklog = simulation.partitions.reduce((total, partition) => total + partition.backlog, 0);
  const maxBacklog = Math.max(...simulation.partitions.map((partition) => partition.backlog), 0);
  const minBacklog = Math.min(...simulation.partitions.map((partition) => partition.backlog), 0);
  const skew = maxBacklog - minBacklog;

  return (
    <div className="event-mesh-lab">
      <MissionBanner
        title="Event Mesh Lab"
        description="Interactive eventing simulator for partitions, retries, consumer lag, and dead-letter flow."
        tech={['Systems Design', 'Event-Driven Architecture', 'React']}
      />

      <section className="mesh-header-card">
        <div className="mesh-header-copy">
          <span className="mesh-eyebrow">Flagship demo</span>
          <h2>Play with the knobs that actually shape event-driven systems.</h2>
          <p>
            This lab is intentionally opinionated: it focuses on partition skew, retry behavior, and consumer lag
            because those are the issues that usually matter more than architecture diagrams do.
          </p>
        </div>
        <div className="mesh-metric-grid">
          <div className="mesh-metric-card">
            <span>Published</span>
            <strong>{simulation.totalPublished}</strong>
          </div>
          <div className="mesh-metric-card">
            <span>Processed</span>
            <strong>{simulation.totalProcessed}</strong>
          </div>
          <div className="mesh-metric-card">
            <span>Backlog</span>
            <strong>{totalBacklog}</strong>
          </div>
          <div className="mesh-metric-card">
            <span>Skew</span>
            <strong>{skew}</strong>
          </div>
        </div>
      </section>

      <section className="mesh-control-panel">
        <div className="mesh-control-group">
          <label htmlFor="partitionCount">Partitions</label>
          <input
            id="partitionCount"
            type="range"
            min="2"
            max="6"
            value={partitionCount}
            onChange={(event) => setPartitionCount(Number(event.target.value))}
          />
          <span>{partitionCount}</span>
        </div>

        <div className="mesh-control-group">
          <label htmlFor="consumerCount">Consumers</label>
          <input
            id="consumerCount"
            type="range"
            min="1"
            max="4"
            value={consumerCount}
            onChange={(event) => setConsumerCount(Number(event.target.value))}
          />
          <span>{consumerCount}</span>
        </div>

        <button type="button" className="mesh-action-button" onClick={() => setIsRunning((current) => !current)}>
          {isRunning ? <FaPause /> : <FaPlay />}
          {isRunning ? 'Pause' : 'Resume'}
        </button>

        <button
          type="button"
          className="mesh-action-button secondary"
          onClick={() => setSimulation(createSimulation(partitionCount, consumerCount))}
        >
          <FaRedo />
          Reset
        </button>
      </section>

      <section className="mesh-toggle-grid">
        <button
          type="button"
          className={`mesh-toggle ${hotPartition ? 'active' : ''}`}
          onClick={() => setHotPartition((current) => !current)}
        >
          <FaFilter />
          Hot partition
        </button>
        <button
          type="button"
          className={`mesh-toggle ${retryEnabled ? 'active' : ''}`}
          onClick={() => setRetryEnabled((current) => !current)}
        >
          <FaBolt />
          Retries
        </button>
        <button
          type="button"
          className={`mesh-toggle ${slowConsumer ? 'active' : ''}`}
          onClick={() => setSlowConsumer((current) => !current)}
        >
          <FaServer />
          Slow consumer
        </button>
        <button
          type="button"
          className={`mesh-toggle ${deadLetterEnabled ? 'active' : ''}`}
          onClick={() => setDeadLetterEnabled((current) => !current)}
        >
          <FaSkullCrossbones />
          Dead-letter queue
        </button>
      </section>

      <section className="mesh-system-grid">
        <article className="mesh-column">
          <div className="mesh-column-header">
            <FaStream />
            <h3>Ingress</h3>
          </div>
          <div className="mesh-ingress-card">
            <strong>Producer stream</strong>
            <p>
              Each tick publishes a small batch of events. Hot partition mode intentionally pushes too much load to
              one lane to make skew visible.
            </p>
          </div>
        </article>

        <article className="mesh-column">
          <div className="mesh-column-header">
            <FaFilter />
            <h3>Partitions</h3>
          </div>
          <div className="mesh-stack">
            {simulation.partitions.map((partition) => (
              <div key={partition.id} className="partition-card">
                <div className="partition-header">
                  <strong>Partition {partition.id}</strong>
                  <span>{partition.backlog} queued</span>
                </div>
                <div className="partition-bar">
                  <div
                    className="partition-bar-fill"
                    style={{ width: `${Math.min(partition.backlog * 11, 100)}%` }}
                  />
                </div>
                <small>{partition.processed} delivered so far</small>
              </div>
            ))}
          </div>
        </article>

        <article className="mesh-column">
          <div className="mesh-column-header">
            <FaServer />
            <h3>Consumers</h3>
          </div>
          <div className="mesh-stack">
            {simulation.consumers.map((consumer) => (
              <div key={consumer.id} className={`consumer-card consumer-${consumer.state}`}>
                <div className="partition-header">
                  <strong>Consumer {consumer.id}</strong>
                  <span>{consumer.state}</span>
                </div>
                <p>{consumer.processed} processed</p>
                <small>{consumer.lag} events of lag across assigned partitions</small>
              </div>
            ))}
          </div>
        </article>

        <article className="mesh-column">
          <div className="mesh-column-header">
            <FaSkullCrossbones />
            <h3>Outcome</h3>
          </div>
          <div className="mesh-outcome-card">
            <div>
              <span>Retries</span>
              <strong>{simulation.retries}</strong>
            </div>
            <div>
              <span>Dead letters</span>
              <strong>{simulation.deadLetters}</strong>
            </div>
            <div>
              <span>Tick</span>
              <strong>{simulation.tick}</strong>
            </div>
          </div>
        </article>
      </section>

      <section className="mesh-log-card">
        <div className="mesh-column-header">
          <FaStream />
          <h3>Recent event log</h3>
        </div>
        <ul className="mesh-log-list">
          {simulation.events.map((event) => (
            <li key={event.id}>{event.message}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default EventMeshLab;
