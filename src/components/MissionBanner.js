import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

const Banner = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem 1.3rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const Content = styled.div`
  flex: 1;

  h4 {
    margin: 0 0 0.3rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: #dce1ed;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1.5;
    color: rgba(184, 192, 212, 0.6);
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
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(184, 192, 212, 0.6);
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: rgba(160, 175, 210, 0.55);
  text-decoration: none;
  margin-top: 0.5rem;
  transition: color 0.15s ease;

  &:hover {
    color: #b8c0d4;
  }
`;

const MissionBanner = ({ title, description, tech = [] }) => {
  return (
    <Banner>
      <Content>
        <h4>{title}</h4>
        <p>{description}</p>
        {tech.length > 0 && (
          <Badges>
            {tech.map(t => <Badge key={t}>{t}</Badge>)}
          </Badges>
        )}
        <BackLink to="/launchpad"><FaArrowLeft /> All demos</BackLink>
      </Content>
    </Banner>
  );
};

export default MissionBanner;
