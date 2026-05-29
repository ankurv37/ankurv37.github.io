import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowRight, FaLinkedin, FaMapMarkerAlt, FaRegCompass } from 'react-icons/fa';
import { nowStatus, profileLinks } from '../content/siteContent';

const Card = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 16px;
  background: rgba(124, 155, 255, 0.08);
  border: 1px solid rgba(124, 155, 255, 0.18);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
`;

const Label = styled.div`
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(251, 191, 36, 0.75);
  margin-bottom: 0.5rem;
`;

const Title = styled.h3`
  margin: 0 0 0.6rem;
  font-size: 1rem;
  line-height: 1.4;
  color: #f8fbff;
`;

const Detail = styled.p`
  margin: 0 0 0.9rem;
  font-size: 0.82rem;
  line-height: 1.55;
  color: rgba(205, 214, 244, 0.78);
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.78rem;
  color: rgba(205, 214, 244, 0.72);
  margin-bottom: 0.45rem;
`;

const ActionGroup = styled.div`
  display: grid;
  gap: 0.55rem;
  margin-top: 1rem;
`;

const linkStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  width: 100%;
  padding: 0.65rem 0.85rem;
  border-radius: 10px;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 600;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const PrimaryLink = styled(Link)`
  ${linkStyles}
  color: #05060f;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
`;

const SecondaryLink = styled(Link)`
  ${linkStyles}
  color: #dbe6ff;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(124, 155, 255, 0.18);
`;

const ExternalLink = styled.a`
  ${linkStyles}
  color: #dbe6ff;
  background: rgba(124, 155, 255, 0.12);
  border: 1px solid rgba(124, 155, 255, 0.2);
`;

const MissionStatusCard = () => {
  return (
    <Card>
      <Label>{nowStatus.statusCard.label}</Label>
      <Title>{nowStatus.statusCard.title}</Title>
      <Detail>{nowStatus.statusCard.detail}</Detail>
      <MetaRow>
        <FaMapMarkerAlt />
        Mason, Ohio
      </MetaRow>
      <MetaRow>
        <FaRegCompass />
        Platform engineering, distributed systems, AI infra
      </MetaRow>
      <ActionGroup>
        <PrimaryLink to="/now">
          Current focus <FaArrowRight />
        </PrimaryLink>
        <SecondaryLink to="/resume">View resume</SecondaryLink>
        <ExternalLink href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> Contact on LinkedIn
        </ExternalLink>
      </ActionGroup>
    </Card>
  );
};

export default MissionStatusCard;
