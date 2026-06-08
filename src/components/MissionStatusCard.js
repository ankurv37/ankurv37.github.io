import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowRight, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { nowStatus, profileLinks } from '../content/siteContent';

const Card = styled.div`
  width: 100%;
  padding: 0.9rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

const Label = styled.div`
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(160, 175, 210, 0.6);
  margin-bottom: 0.4rem;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 0.9rem;
  line-height: 1.4;
  font-weight: 600;
  color: #dce1ed;
`;

const Detail = styled.p`
  margin: 0 0 0.7rem;
  font-size: 0.78rem;
  line-height: 1.5;
  color: rgba(184, 192, 212, 0.7);
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: rgba(184, 192, 212, 0.6);
  margin-bottom: 0.35rem;
`;

const ActionGroup = styled.div`
  display: grid;
  gap: 0.4rem;
  margin-top: 0.8rem;
`;

const linkStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 100%;
  padding: 0.55rem 0.75rem;
  border-radius: 7px;
  text-decoration: none;
  font-size: 0.78rem;
  font-weight: 500;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const PrimaryLink = styled(Link)`
  ${linkStyles}
  color: #0a0c14;
  background: #dce1ed;
`;

const SecondaryLink = styled(Link)`
  ${linkStyles}
  color: #b8c0d4;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

const ExternalLink = styled.a`
  ${linkStyles}
  color: #b8c0d4;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

const MissionStatusCard = () => {
  return (
    <Card>
      <Label>Status</Label>
      <Title>{nowStatus.statusCard.title}</Title>
      <Detail>{nowStatus.statusCard.detail}</Detail>
      <MetaRow>
        <FaMapMarkerAlt />
        Mason, Ohio
      </MetaRow>
      <ActionGroup>
        <PrimaryLink to="/now">
          Current focus <FaArrowRight />
        </PrimaryLink>
        <SecondaryLink to="/resume">View resume</SecondaryLink>
        <ExternalLink href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </ExternalLink>
      </ActionGroup>
    </Card>
  );
};

export default MissionStatusCard;
