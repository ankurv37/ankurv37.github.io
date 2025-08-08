import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  FaServer, 
  FaMicrochip, 
  FaMemory, 
  FaNetworkWired, 
  FaExclamationTriangle,
  FaPlay,
  FaPause,
  FaRedo
} from 'react-icons/fa';
import './ChaosDemo.css';

const ChaosDemo = () => {
  const [clusterState, setClusterState] = useState(null);
  const [wasmReady, setWasmReady] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [faultStates, setFaultStates] = useState({
    networkPartition: false,
    cpuSpike: false,
    nodeCrash: false,
    memoryLeak: false
  });
  const [error, setError] = useState(null);

  // Load WASM module
  useEffect(() => {
    const loadChaosWasm = async () => {
      try {
        if (!window.Go) {
          const script = document.createElement('script');
          script.src = '/wasm_exec.js';
          script.onload = () => initializeChaosWasm();
          script.onerror = () => setError('Failed to load wasm_exec.js');
          document.head.appendChild(script);
        } else {
          initializeChaosWasm();
        }

        async function initializeChaosWasm() {
          try {
            const go = new window.Go();
            const result = await WebAssembly.instantiateStreaming(
              fetch('/chaos.wasm'), 
              go.importObject
            );
            
            go.run(result.instance);
            
            setTimeout(() => {
              if (window.initializeCluster && window.toggleFault && window.simulateCluster) {
                // Initialize cluster with 6 nodes
                const initialState = window.initializeCluster(6);
                setClusterState(JSON.parse(initialState));
                setWasmReady(true);
              } else {
                setError('Chaos WASM functions not found');
              }
            }, 100);
          } catch (err) {
            setError(`Chaos WASM initialization failed: ${err.message}`);
          }
        }
      } catch (err) {
        setError(`Chaos WASM loading failed: ${err.message}`);
      }
    };

    loadChaosWasm();
  }, []);

  // Simulation loop
  useEffect(() => {
    let interval;
    if (isSimulating && wasmReady) {
      interval = setInterval(() => {
        const newState = window.simulateCluster();
        setClusterState(JSON.parse(newState));
      }, 1000); // Update every second
    }
    return () => clearInterval(interval);
  }, [isSimulating, wasmReady]);

  const toggleFault = useCallback((faultType) => {
    if (!wasmReady) return;
    
    const newEnabled = !faultStates[faultType];
    setFaultStates(prev => ({
      ...prev,
      [faultType]: newEnabled
    }));

    const newState = window.toggleFault(faultType, newEnabled);
    setClusterState(JSON.parse(newState));
  }, [faultStates, wasmReady]);

  const resetCluster = useCallback(() => {
    if (!wasmReady) return;
    
    // Reset all faults
    Object.keys(faultStates).forEach(faultType => {
      if (faultStates[faultType]) {
        window.toggleFault(faultType, false);
      }
    });
    
    setFaultStates({
      networkPartition: false,
      cpuSpike: false,
      nodeCrash: false,
      memoryLeak: false
    });

    // Reinitialize cluster
    const initialState = window.initializeCluster(6);
    setClusterState(JSON.parse(initialState));
  }, [faultStates, wasmReady]);

  const getNodeStatusColor = (node) => {
    switch (node.status) {
      case 'healthy': return '#00ff95';
      case 'degraded': return '#ffa500';
      case 'crashed': return '#ff4444';
      case 'partitioned': return '#8a2be2';
      default: return '#666';
    }
  };

  const getNodeStatusIcon = (node) => {
    switch (node.status) {
      case 'crashed': return <FaExclamationTriangle />;
      case 'partitioned': return <FaNetworkWired />;
      default: return <FaServer />;
    }
  };

  if (error) {
    return (
      <motion.div 
        className="chaos-demo-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="chaos-header">
          <FaExclamationTriangle className="chaos-icon" />
          <h3>Chaos Engineering Demo</h3>
        </div>
        <div className="error-message">
          <p>⚠️ Error loading Chaos WASM module</p>
          <p>{error}</p>
          <small>Make sure chaos.wasm is built and available</small>
        </div>
      </motion.div>
    );
  }

  if (!wasmReady || !clusterState) {
    return (
      <motion.div 
        className="chaos-demo-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="chaos-header">
          <FaServer className="chaos-icon" />
          <h3>Chaos Engineering Demo</h3>
        </div>
        <div className="loading-message">
          ⚙️ Initializing distributed system simulation...
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="chaos-demo-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="chaos-header">
        <FaServer className="chaos-icon" />
        <h3>Distributed Systems Chaos Engineering</h3>
        <p className="chaos-subtitle">Interactive fault injection simulation</p>
      </div>

      {/* Control Panel */}
      <motion.div 
        className="control-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="simulation-controls">
          <button 
            className={`control-btn ${isSimulating ? 'active' : ''}`}
            onClick={() => setIsSimulating(!isSimulating)}
          >
            {isSimulating ? <FaPause /> : <FaPlay />}
            {isSimulating ? 'Pause' : 'Start'} Simulation
          </button>
          <button className="control-btn reset" onClick={resetCluster}>
            <FaRedo /> Reset Cluster
          </button>
        </div>

        <div className="fault-toggles">
          <button 
            className={`fault-btn ${faultStates.networkPartition ? 'active' : ''}`}
            onClick={() => toggleFault('networkPartition')}
          >
            <FaNetworkWired /> Network Partition
          </button>
          <button 
            className={`fault-btn ${faultStates.cpuSpike ? 'active' : ''}`}
            onClick={() => toggleFault('cpuSpike')}
          >
            <FaMicrochip /> CPU Spike
          </button>
          <button 
            className={`fault-btn ${faultStates.nodeCrash ? 'active' : ''}`}
            onClick={() => toggleFault('nodeCrash')}
          >
            <FaExclamationTriangle /> Node Crash
          </button>
          <button 
            className={`fault-btn ${faultStates.memoryLeak ? 'active' : ''}`}
            onClick={() => toggleFault('memoryLeak')}
          >
            <FaMemory /> Memory Leak
          </button>
        </div>
      </motion.div>

      {/* Cluster Overview */}
      <motion.div 
        className="cluster-overview"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="cluster-stats">
          <div className="stat-item">
            <span className="stat-label">Total Nodes:</span>
            <span className="stat-value">{clusterState.totalNodes}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Healthy:</span>
            <span className="stat-value healthy">{clusterState.healthyNodes}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Unhealthy:</span>
            <span className="stat-value unhealthy">{clusterState.totalNodes - clusterState.healthyNodes}</span>
          </div>
        </div>
      </motion.div>

      {/* Node Grid */}
      <motion.div 
        className="nodes-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {clusterState.nodes.map((node, index) => (
          <motion.div
            key={node.id}
            className={`node-card ${node.status}`}
            style={{ borderColor: getNodeStatusColor(node) }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="node-header">
              <div className="node-icon" style={{ color: getNodeStatusColor(node) }}>
                {getNodeStatusIcon(node)}
              </div>
              <div className="node-info">
                <div className="node-id">{node.id}</div>
                <div className={`node-status ${node.status}`}>{node.status}</div>
              </div>
            </div>
            
            <div className="node-metrics">
              <div className="metric">
                <FaMicrochip className="metric-icon" />
                <div className="metric-bar">
                  <div 
                    className="metric-fill cpu" 
                    style={{ width: `${node.cpuUsage}%` }}
                  ></div>
                </div>
                <span className="metric-value">{node.cpuUsage.toFixed(1)}%</span>
              </div>
              
              <div className="metric">
                <FaMemory className="metric-icon" />
                <div className="metric-bar">
                  <div 
                    className="metric-fill memory" 
                    style={{ width: `${node.memory}%` }}
                  ></div>
                </div>
                <span className="metric-value">{node.memory.toFixed(1)}%</span>
              </div>
              
              <div className="metric">
                <FaNetworkWired className="metric-icon" />
                <span className="metric-value">
                  {node.network ? `${node.requestRate} RPS` : 'Disconnected'}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Partitions Info */}
      {clusterState.partitions && clusterState.partitions.length > 0 && (
        <motion.div 
          className="partitions-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h4>Network Partitions:</h4>
          {clusterState.partitions.map((partition, index) => (
            <div key={index} className="partition">
              <strong>Partition {index + 1}:</strong> {partition.join(', ')}
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ChaosDemo;
