import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaBolt, FaGamepad, FaMicrochip, FaCalculator, FaRocket } from 'react-icons/fa';

const GalaxyHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  .galaxy-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(251, 191, 36, 0.6);
    margin-bottom: 0.5rem;
  }

  h1 {
    background: linear-gradient(135deg, #7c9bff 0%, #c4b5fd 50%, #fbbf24 100%);
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: galaxyShimmer 4s ease-in-out infinite;
    margin: 0;
  }

  @keyframes galaxyShimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Card = styled(motion.div)`
  background: rgba(124, 155, 255, 0.04);
  border: 1px solid rgba(124, 155, 255, 0.1);
  border-radius: 16px;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(124, 155, 255, 0.25);
    box-shadow: 0 8px 30px rgba(124, 155, 255, 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .icon {
    font-size: 1.4rem;
    color: #fbbf24;
  }

  h2 {
    margin: 0;
    font-size: 1.2rem;
    background: linear-gradient(135deg, #7c9bff, #c4b5fd);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(205, 214, 244, 0.75);
  margin: 0;
`;

const TechBadges = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  font-size: 0.7rem;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  border: 1px solid rgba(196, 181, 253, 0.25);
  background: rgba(196, 181, 253, 0.08);
  color: #c4b5fd;
  font-weight: 500;
`;

const LaunchButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  padding: 0.6rem 1.2rem;
  background: rgba(124, 155, 255, 0.1);
  border: 1px solid rgba(124, 155, 255, 0.25);
  border-radius: 8px;
  color: #7c9bff;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  width: fit-content;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(124, 155, 255, 0.2);
    box-shadow: 0 0 15px rgba(124, 155, 255, 0.15);
    transform: translateY(-2px);
  }

  svg {
    font-size: 0.75rem;
  }
`;

const missions = [
  {
    title: 'GitHub Pulse',
    icon: FaGithub,
    path: '/github',
    description: 'Real-time GitHub event stream processed via Go→WebAssembly. Visualizes commit frequency across public repos.',
    tech: ['Go', 'WebAssembly', 'GitHub API', 'Canvas'],
  },
  {
    title: 'Chaos Engine',
    icon: FaBolt,
    path: '/chaos',
    description: 'WASM-powered chaos engineering simulator. Injects faults — network partitions, CPU spikes, node crashes, memory leaks — into a virtual cluster.',
    tech: ['Go', 'WebAssembly', 'Chaos Engineering'],
  },
  {
    title: 'Pong Wars',
    icon: FaGamepad,
    path: '/pongwars',
    description: 'Competitive Pong rendered in Go→WASM. Two autonomous agents battle in real-time on an HTML5 canvas.',
    tech: ['Go', 'WebAssembly', 'HTML5 Canvas'],
  },
  {
    title: 'Logic Gates',
    icon: FaMicrochip,
    path: '/logic-gates',
    description: 'Interactive SVG visualizer for binary arithmetic (ADD/SUB) powered by a Go→WASM backend with step-by-step gate animation.',
    tech: ['Go', 'WebAssembly', 'SVG', 'Digital Logic'],
  },
  {
    title: 'Full Adder',
    icon: FaCalculator,
    path: '/adder',
    description: 'Animated full-adder circuit — XOR, AND, OR gates — driven by WASM. Visualizes carry propagation through each logic stage.',
    tech: ['Go', 'WebAssembly', 'SVG', 'Circuit Design'],
  },
];

const LaunchPad = () => {
  return (
    <div style={{ padding: '2rem 0' }}>
      <GalaxyHeader>
        <div className="galaxy-label">✦ Launch Pad — Live Missions ✦</div>
        <h1>Launch Pad</h1>
      </GalaxyHeader>
      <Grid>
        {missions.map((mission, i) => (
          <Card
            key={mission.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <CardHeader>
              <mission.icon className="icon" />
              <h2>{mission.title}</h2>
            </CardHeader>
            <Description>{mission.description}</Description>
            <TechBadges>
              {mission.tech.map(t => (
                <Badge key={t}>{t}</Badge>
              ))}
            </TechBadges>
            <LaunchButton to={mission.path}>
              <FaRocket /> Launch Mission
            </LaunchButton>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default LaunchPad;
