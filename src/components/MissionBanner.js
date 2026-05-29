import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaRocket, FaArrowLeft } from 'react-icons/fa';

const Banner = styled.div`
  background: rgba(124, 155, 255, 0.04);
  border: 1px solid rgba(124, 155, 255, 0.12);
  border-radius: 12px;
  padding: 1rem 1.4rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .icon {
    color: #fbbf24;
    font-size: 1.1rem;
    margin-top: 0.15rem;
    flex-shrink: 0;
  }
`;

const Content = styled.div`
  flex: 1;

  h4 {
    margin: 0 0 0.3rem;
    font-size: 0.95rem;
    background: linear-gradient(135deg, #7c9bff, #c4b5fd);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1.5;
    color: rgba(205, 214, 244, 0.65);
  }
`;

const Badges = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

const Badge = styled.span`
  font-size: 0.65rem;
  padding: 0.15rem 0.5rem;
  border-radius: 20px;
  border: 1px solid rgba(196, 181, 253, 0.2);
  background: rgba(196, 181, 253, 0.06);
  color: rgba(196, 181, 253, 0.7);
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: rgba(124, 155, 255, 0.6);
  text-decoration: none;
  margin-top: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: #7c9bff;
  }
`;

const MissionBanner = ({ title, description, tech = [] }) => {
  return (
    <Banner>
      <FaRocket className="icon" />
      <Content>
        <h4>{title}</h4>
        <p>{description}</p>
        {tech.length > 0 && (
          <Badges>
            {tech.map(t => <Badge key={t}>{t}</Badge>)}
          </Badges>
        )}
        <BackLink to="/launchpad"><FaArrowLeft /> All Missions</BackLink>
      </Content>
    </Banner>
  );
};

export default MissionBanner;
