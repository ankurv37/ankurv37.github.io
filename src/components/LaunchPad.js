import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaBolt, FaGamepad, FaMicrochip, FaCalculator } from 'react-icons/fa';

const PageHeader = styled.div`
  margin-bottom: 2rem;

  .page-label {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(160, 175, 210, 0.6);
    margin-bottom: 0.4rem;
  }

  h1 {
    color: #e8ecf4;
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -0.02em;
    margin: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.2rem;
  max-width: 1050px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  .icon {
    font-size: 1.2rem;
    color: rgba(160, 175, 210, 0.7);
  }

  h2 {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 600;
    color: #dce1ed;
  }
`;

const Description = styled.p`
  font-size: 0.88rem;
  line-height: 1.55;
  color: rgba(184, 192, 212, 0.7);
  margin: 0;
`;

const TechBadges = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  font-size: 0.7rem;
  padding: 0.2rem 0.55rem;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(184, 192, 212, 0.7);
  font-weight: 500;
`;

const LaunchButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: auto;
  padding: 0.55rem 1rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 7px;
  color: #b8c0d4;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 500;
  width: fit-content;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.14);
    color: #dce1ed;
  }
`;

const missions = [
  {
    title: 'GitHub Pulse',
    icon: FaGithub,
    path: '/github',
    description: 'Real-time GitHub event stream processed via Go and WebAssembly. Visualizes commit frequency across public repos.',
    tech: ['Go', 'WebAssembly', 'GitHub API', 'Canvas'],
  },
  {
    title: 'Chaos Engine',
    icon: FaBolt,
    path: '/chaos',
    description: 'WASM-powered chaos engineering simulator. Injects faults like network partitions, CPU spikes, and node crashes into a virtual cluster.',
    tech: ['Go', 'WebAssembly', 'Chaos Engineering'],
  },
  {
    title: 'Pong Wars',
    icon: FaGamepad,
    path: '/pongwars',
    description: 'Competitive Pong rendered with Go and WASM. Two autonomous agents battle in real-time on an HTML5 canvas.',
    tech: ['Go', 'WebAssembly', 'HTML5 Canvas'],
  },
  {
    title: 'Logic Gates',
    icon: FaMicrochip,
    path: '/logic-gates',
    description: 'Interactive SVG visualizer for binary arithmetic powered by a Go WASM backend with step-by-step gate animation.',
    tech: ['Go', 'WebAssembly', 'SVG', 'Digital Logic'],
  },
  {
    title: 'Full Adder',
    icon: FaCalculator,
    path: '/adder',
    description: 'Animated full-adder circuit showing XOR, AND, OR gates driven by WASM. Visualizes carry propagation through each stage.',
    tech: ['Go', 'WebAssembly', 'SVG', 'Circuit Design'],
  },
];

const LaunchPad = () => {
  return (
    <div style={{ padding: '1rem 0 2rem' }}>
      <PageHeader>
        <div className="page-label">Interactive demos</div>
        <h1>Demos</h1>
      </PageHeader>
      <Grid>
        {missions.map((mission, i) => (
          <Card
            key={mission.path}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
          >
            <CardHeader>
              <mission.icon className="icon" />
              <h2>{mission.title}</h2>
            </CardHeader>
            <Description>{mission.description}</Description>
            <TechBadges>
              {mission.tech.map(t => <Badge key={t}>{t}</Badge>)}
            </TechBadges>
            <LaunchButton to={mission.path}>
              Open demo
            </LaunchButton>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default LaunchPad;
