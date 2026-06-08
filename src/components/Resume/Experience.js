import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1.2rem;
`;

const LogoWrapper = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.15rem;
`;

const LogoImg = styled.img`
  max-width: 44px;
  max-height: 44px;
  object-fit: contain;
`;

const ExperienceContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const JobTitle = styled.h3`
  color: #dce1ed;
  margin-bottom: 0.5rem;
`;

const Company = styled.h4`
  color: rgba(184, 192, 212, 0.85);
  margin-bottom: 0.5rem;
`;

const Duration = styled.p`
  color: rgba(160, 175, 210, 0.65);
  font-size: 0.85rem;
  margin-bottom: 1rem;
`;

const Experience = () => {
  const experiences = [
    {
      title: "Developer Sr",
      company: "Elevance Health, Mason, Ohio, USA",
      duration: "July 2022 - Present",
      logo: `${process.env.PUBLIC_URL}/elevance-logo.svg`,
      responsibilities: [
        "Led feature development of an internal developer platform used by 4000 Dev & Ops users/50+ scrum teams for IaC Platform provisioning, managing complete SDLC of container & cloud applications",
        "Spearheaded migration of consumer portals and 2000 microservices/APIs supporting SOA platform from on-prem Docker Swarm to Cloud Kubernetes clusters, implementing failover strategies and ensuring high availability while meeting RTO and RPO objectives",
        "Contributed to Kubernetes strategy involving Nginx Ingress, Istio Service Mesh, custom metrics for HPA, DataDog monitoring, and Knative Eventing"
      ]
    },
    {
      title: "Developer III",
      company: "Anthem Inc., Mason, Ohio, USA",
      duration: "Sept 2019 - July 2022",
      logo: `${process.env.PUBLIC_URL}/anthem-logo.svg`,
      responsibilities: [
        "Developed an API layer to automate IaC provisioning – prototyping Terraform modules for AWS EKS, ASG, ALB, and Serverless and leveraging GitOps process for Terraform VCS integration reducing rollout time from days to minutes",
        "Developed Tekton pipelines for Java, Go, Node, React integrating DevSecOps tasks",
        "Developing prototypes for microservices/containers in multiple languages – Java, Go, Python, Node, React"
      ]
    },
    {
      title: "Developer II",
      company: "Anthem Inc., Mason, Ohio, USA",
      duration: "June 2016 - Sept 2019",
      logo: `${process.env.PUBLIC_URL}/anthem-logo.svg`,
      responsibilities: [
        "Designed and developed a Kafka-based real-time event-driven user digital activity tracking platform, enabling high-throughput message distribution, user behavior insights, decision-making capabilities",
        "Implemented LDAP-based authentication microservices leveraging Microsoft Active Directory, enabling seamless SSO integration with SiteMinder. Optimized authentication workflows, enhancing security and user experience across enterprise applications",
        "Developed and containerized RESTful APIs using Java/Spring Boot and Node.js/Express migrating them from IBM WebSphere to Docker Swarm, improving scalability and infrastructure efficiency"
      ]
    },
    {
      title: "Associate Systems Engineer",
      company: "IBM, Kolkata, India",
      duration: "June 2013 - Sept 2016",
      logo: `${process.env.PUBLIC_URL}/ibm-logo.svg`,
      responsibilities: [
        "Worked on Cognos PowerPlay, shell scripts, ETL jobs, and PL/SQL for data processing"
      ]
    }
  ];
  return (
    <div>
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceSection key={index}>
          <LogoWrapper>
            <LogoImg src={exp.logo} alt={exp.company.split(',')[0]} />
          </LogoWrapper>
          <ExperienceContent>
            <JobTitle>{exp.title}</JobTitle>
            <Company>{exp.company}</Company>
            <Duration>{exp.duration}</Duration>
            <ul>
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </ExperienceContent>
        </ExperienceSection>
      ))}
    </div>
  );
};

export default Experience;