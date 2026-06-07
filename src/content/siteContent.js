import generatedPosts from '../generated/posts.json';

/**
 * @typedef {Object} LinkMeta
 * @property {string} label
 * @property {string} href
 *
 * @typedef {Object} ContentSection
 * @property {string} title
 * @property {string[]} [paragraphs]
 * @property {string[]} [bullets]
 *
 * @typedef {Object} ProjectMeta
 * @property {string} slug
 * @property {string} title
 * @property {string} eyebrow
 * @property {string} summary
 * @property {string} role
 * @property {string} period
 * @property {string[]} stack
 * @property {string[]} outcomes
 * @property {LinkMeta[]} links
 * @property {ContentSection[]} sections
 * @property {boolean} featured
 * @property {string[]} tags
 *
 * @typedef {Object} PostMeta
 * @property {string} slug
 * @property {string} title
 * @property {string} excerpt
 * @property {string} publishedAt
 * @property {string} readTime
 * @property {string[]} tags
 * @property {ContentSection[]} sections
 * @property {boolean} featured
 */

export const siteMeta = {
  name: 'Ankur Verma',
  shortName: 'Ankur Verma',
  siteUrl: 'https://ankurv37.github.io',
  defaultTitle: 'Ankur Verma | Platform, Distributed Systems, and AI Infrastructure',
  defaultDescription:
    'Platform engineer building distributed systems, AI infrastructure, and Go-powered interactive demos.',
  ogImage: 'https://ankurv37.github.io/home.png',
};

export const profileLinks = {
  github: 'https://github.com/ankurv37',
  linkedin: 'https://www.linkedin.com/in/ankurv37',
  leetcode: 'https://leetcode.com/u/ankurv37/',
};

export const heroContent = {
  eyebrow: 'About',
  headline: "I build platforms and backend systems.",
  summary:
    '12+ years of engineering work across internal platforms, distributed systems, Kubernetes, and developer tooling. Currently interested in AI infrastructure and event-driven architectures.',
  proofChips: [
    'Go',
    'Distributed Systems',
    'Kubernetes',
    'Developer Platforms',
    'AI Infrastructure',
  ],
  impactStats: [
    {
      label: 'Developer users',
      value: '4,000+',
      detail: 'Internal platform used across 50+ product teams for provisioning and SDLC workflows.',
    },
    {
      label: 'Services migrated',
      value: '2,000+',
      detail: 'Cloud and Kubernetes migrations — APIs, portals, platform services.',
    },
    {
      label: 'Years',
      value: '12+',
      detail: 'Backend, platform, DevOps, and event-driven work in enterprise environments.',
    },
  ],
};

export const nowStatus = {
  availability: 'Open to senior and staff-level backend, platform, and AI infrastructure roles.',
  preferredWork: [
    'Platform engineering and internal developer platforms',
    'Distributed systems and event-driven architectures',
    'AI agents, local inference, and developer tooling',
  ],
  currentFocus: [
    'Building interactive demos that show real operational tradeoffs.',
    'Exploring local AI stacks — MCP servers, RAG pipelines, quantized inference.',
    'Writing up case studies connecting code with platform impact.',
  ],
  recentShips: [
    {
      title: 'Event Mesh Lab',
      detail:
        'Interactive demo for partitioning, consumer lag, retries, and dead-letter flow.',
      href: '/event-mesh-lab',
    },
    {
      title: 'Portfolio refresh',
      detail:
        'Restructured the site around case studies and cleaner navigation.',
      href: '/projects/portfolio-control-center',
    },
    {
      title: 'GitHub activity view',
      detail: 'Switched from the global GitHub firehose to user-specific public events.',
      href: '/github',
    },
  ],
  workPreferences: [
    'High-ownership platform or infrastructure teams',
    'Product-minded engineering cultures with strong technical standards',
    'Roles where design, implementation, and operational thinking all matter',
  ],
  contactLinks: [
    { label: 'LinkedIn', href: profileLinks.linkedin },
    { label: 'GitHub', href: profileLinks.github },
    { label: 'LeetCode', href: profileLinks.leetcode },
    { label: 'Resume', href: '/resume' },
  ],
  statusCard: {
    label: 'Now',
    title: 'Open to platform and AI infra roles',
    detail:
      'Working on cloud platforms, eventing, and AI tooling. Best way to reach me is LinkedIn.',
  },
};

export const projects = [
  {
    slug: 'platform-control-plane',
    title: 'Platform Control Plane',
    eyebrow: 'Enterprise Platform Engineering',
    summary:
      'Built and evolved an internal developer platform used for cloud provisioning, SDLC workflows, and application onboarding across a large engineering organization.',
    role: 'Senior Developer, Elevance Health',
    period: '2022 - Present',
    stack: ['Go', 'Java', 'Terraform', 'Kubernetes', 'Istio', 'ArgoCD', 'Tekton'],
    outcomes: [
      'Supported 4000+ developer and operations users across 50+ scrum teams.',
      'Helped migrate 2000+ services and APIs from on-prem and Docker Swarm to cloud Kubernetes.',
      'Reduced provisioning and release lead time from days to minutes through automation and GitOps.',
    ],
    links: [
      { label: 'Resume Snapshot', href: '/resume' },
      { label: 'Current Focus', href: '/now' },
    ],
    featured: true,
    tags: ['Platform Engineering', 'Kubernetes', 'Migration', 'Developer Experience'],
    sections: [
      {
        title: 'Problem',
        paragraphs: [
          'Product teams needed a consistent path to provision infrastructure, onboard services, and move existing workloads into a more operable cloud platform.',
          'The work had to balance reliability, policy, developer experience, and the realities of migrating a large fleet without stopping delivery.',
        ],
      },
      {
        title: 'Architecture',
        bullets: [
          'Provisioning workflows backed by infrastructure-as-code modules and GitOps delivery.',
          'Standardized pipeline paths for Java, Go, Node, and React services.',
          'Cloud-native runtime patterns around Kubernetes, ingress, service mesh, observability, and autoscaling.',
        ],
      },
      {
        title: 'Technical Decisions',
        bullets: [
          'Treat platform APIs and templates as products rather than one-off ops scripts.',
          'Codify environment creation and service onboarding through reusable Terraform modules and pipelines.',
          'Push reliability concerns such as observability, failover, and rollout safety into paved roads instead of leaving them to each team.',
        ],
      },
      {
        title: 'Outcomes',
        paragraphs: [
          'The result was a clearer operating model for teams moving into Kubernetes and a platform surface that reduced repeated integration work.',
        ],
        bullets: [
          'Improved delivery speed and consistency.',
          'Created safer migration paths for large numbers of services.',
          'Raised the baseline for cloud and container operational readiness.',
        ],
      },
    ],
  },
  {
    slug: 'knative-eventing',
    title: 'Knative Eventing Contribution',
    eyebrow: 'Open Source Systems Work',
    summary:
      'Contributed to Knative Eventing, focusing on source adapters, reconciler behavior, and the controller patterns that power event-driven systems on Kubernetes.',
    role: 'Contributor',
    period: '2025',
    stack: ['Go', 'Kubernetes', 'Knative', 'CloudEvents', 'Controllers'],
    outcomes: [
      'Worked directly in a CNCF codebase shaped around controllers, conditions, and reconciliation.',
      'Deepened production-grade understanding of event routing, sources, sinks, and CloudEvents.',
      'Captured the experience as a case study focused on system design and implementation tradeoffs.',
    ],
    links: [
      { label: 'Read the Field Note', href: '/blog/knative-eventing' },
      { label: 'Knative Eventing', href: 'https://github.com/knative/eventing' },
    ],
    featured: true,
    tags: ['Open Source', 'Knative', 'Kubernetes', 'Eventing'],
    sections: [
      {
        title: 'Problem',
        paragraphs: [
          'Event-driven systems on Kubernetes look simple from the outside, but the actual control plane involves many moving parts: custom resources, reconcilers, adapters, status conditions, and routing semantics.',
        ],
      },
      {
        title: 'Architecture',
        bullets: [
          'Sources generate CloudEvents from external systems and Kubernetes-native events.',
          'Brokers receive and fan out events based on trigger filters.',
          'Reconcilers continuously align desired state and actual runtime state.',
        ],
      },
      {
        title: 'Technical Decisions',
        bullets: [
          'Lean on idempotent reconciliation so retries remain safe.',
          'Use status and condition reporting to make controller behavior inspectable.',
          'Treat event format standardization through CloudEvents as a key interoperability boundary.',
        ],
      },
      {
        title: 'Why It Matters',
        paragraphs: [
          'This project is strong evidence of fit for platform and distributed systems work because it moves beyond app-level coding into control-plane behavior, failure handling, and API-driven infrastructure.',
        ],
      },
    ],
  },
  {
    slug: 'local-ai-infrastructure-lab',
    title: 'Local AI Infrastructure Lab',
    eyebrow: 'AI Tooling and Systems Programming',
    summary:
      'A set of experiments spanning MCP servers, local LLM inference, RAG pipelines, and Linux-container internals, all built to understand the infrastructure behind AI workflows.',
    role: 'Independent Project',
    period: '2025',
    stack: ['Python', 'FastAPI', 'MCP', 'Go', 'RAG', 'Local LLMs'],
    outcomes: [
      'Connected agent tooling, local inference, retrieval, and low-level systems concepts in one learning track.',
      'Built local-first workflows that avoid cloud dependencies for privacy-sensitive experiments.',
      'Turned implementation work into case studies focused on architecture rather than buzzwords.',
    ],
    links: [
      { label: 'Read the Stack Breakdown', href: '/blog/llm-mcp-containers' },
      { label: 'Read the RAG Note', href: '/blog/local-rag' },
    ],
    featured: true,
    tags: ['AI Infrastructure', 'MCP', 'RAG', 'Local LLMs'],
    sections: [
      {
        title: 'Problem',
        paragraphs: [
          'AI tooling discussions often stop at API usage. I wanted to understand the stack beneath that layer: how tools are exposed, how inference is served, how retrieval works, and where container isolation fits into local developer workflows.',
        ],
      },
      {
        title: 'System Shape',
        bullets: [
          'MCP server exposing tools and prompt surfaces for agent workflows.',
          'Local inference service around a quantized open model.',
          'RAG pipeline comparing classical retrieval, embeddings, and vector search.',
          'Container runtime experiments in Go to get closer to the operating-system boundary.',
        ],
      },
      {
        title: 'Tradeoffs',
        bullets: [
          'Local inference trades raw model size and speed for privacy and control.',
          'RAG pipelines are only as useful as chunking, retrieval quality, and grounding discipline.',
          'Tool APIs need clear contracts or agent behavior becomes difficult to reason about.',
        ],
      },
      {
        title: 'Outcome',
        paragraphs: [
          'The lab turned into a practical foundation for AI infrastructure conversations: not just model features, but the real interfaces and operational constraints around them.',
        ],
      },
    ],
  },
  {
    slug: 'portfolio-control-center',
    title: 'Portfolio Control Center',
    eyebrow: 'Productized Personal Site',
    summary:
      'A React and Go/WASM portfolio that combines recruiter-facing case studies with interactive demos, route metadata, and static-site-friendly content architecture.',
    role: 'Independent Project',
    period: '2024 - 2026',
    stack: ['React', 'React Router', 'Styled Components', 'Framer Motion', 'Go', 'WebAssembly'],
    outcomes: [
      'Reframed the site from a visual landing page into a case-study-driven portfolio.',
      'Added canonical routes, route-level metadata, structured content, and searchable collections.',
      'Kept GitHub Pages compatibility while improving clarity and credibility.',
    ],
    links: [
      { label: 'Live Site', href: '/' },
      { label: 'GitHub Repository', href: 'https://github.com/ankurv37/ankurv37.github.io' },
    ],
    featured: true,
    tags: ['Frontend', 'Portfolio', 'React', 'WebAssembly'],
    sections: [
      {
        title: 'Problem',
        paragraphs: [
          'The original site had strong visual personality, but the content model did not help recruiters or engineering peers quickly understand what I build or why it matters.',
        ],
      },
      {
        title: 'What Changed',
        bullets: [
          'Reworked the hero for clearer role and impact messaging.',
          'Introduced content-driven projects and blog posts with stable routes.',
          'Added route-aware metadata, a Now page, and a sidebar status surface.',
          'Kept the site static and GitHub Pages-friendly instead of moving to a heavier CMS stack.',
        ],
      },
      {
        title: 'Implementation Notes',
        bullets: [
          'Structured content moved into reusable data modules.',
          'Project and blog collections now support tag filters and query-based search.',
          'Navigation prioritizes resume, case studies, and current work over novelty widgets.',
        ],
      },
    ],
  },
  {
    slug: 'pong-wars',
    title: 'Pong Wars',
    eyebrow: 'Go and WebAssembly Demo',
    summary:
      'A territory-control simulation compiled from Go to WebAssembly and shipped inside the portfolio as a playable interactive.',
    role: 'Independent Project',
    period: '2025',
    stack: ['Go', 'Ebiten', 'WebAssembly', 'Canvas'],
    outcomes: [
      'Used a simple game to demonstrate Go, simulation loops, browser delivery, and visual polish.',
      'Showed how a static portfolio can still host meaningful interactive software artifacts.',
      'Created a bridge between systems programming interest and user-facing experimentation.',
    ],
    links: [
      { label: 'Launch Demo', href: '/pongwars' },
      { label: 'Read the Build Note', href: '/blog/pongwars' },
    ],
    featured: false,
    tags: ['Go', 'WebAssembly', 'Simulation', 'Game Development'],
    sections: [
      {
        title: 'Problem',
        paragraphs: [
          'I wanted at least one demo on the site that felt alive and proved I can ship more than static text or screenshots.',
        ],
      },
      {
        title: 'Approach',
        bullets: [
          'Implement the game loop and territory logic in Go.',
          'Compile to WebAssembly for browser delivery.',
          'Embed the demo inside the portfolio so the project is experienced, not just described.',
        ],
      },
      {
        title: 'What It Demonstrates',
        bullets: [
          'Simulation thinking and state updates.',
          'Go as a practical browser-side runtime for the right workloads.',
          'A willingness to make the portfolio itself part of the engineering story.',
        ],
      },
    ],
  },
];

// Posts are now generated from markdown files at build time.
// Run `npm run build:posts` to regenerate src/generated/posts.json
// See the import at the top of this file.
export const posts = generatedPosts;

export const launchMissions = [
  {
    title: 'Event Mesh Lab',
    path: '/event-mesh-lab',
    description:
      'Interactive eventing simulator for partition skew, retry strategy, consumer lag, and dead-letter handling.',
    tech: ['Systems Design', 'Interactive Simulation', 'React'],
  },
  {
    title: 'GitHub Pulse',
    path: '/github',
    description:
      'User-specific GitHub public activity visualized as a lightweight dashboard processed with Go WebAssembly.',
    tech: ['Go', 'WebAssembly', 'GitHub API'],
  },
  {
    title: 'Chaos Engine',
    path: '/chaos',
    description:
      'Distributed-system fault injection across partitions, CPU spikes, node crashes, and memory pressure.',
    tech: ['Go', 'WebAssembly', 'Chaos Engineering'],
  },
  {
    title: 'Pong Wars',
    path: '/pongwars',
    description: 'A Go and WebAssembly territory-conquest simulation running directly in the portfolio.',
    tech: ['Go', 'WebAssembly', 'Canvas'],
  },
  {
    title: 'Logic Gates',
    path: '/logic-gates',
    description: 'Binary arithmetic visualized through animated logic gates and a Go-powered backend.',
    tech: ['Go', 'WebAssembly', 'SVG'],
  },
  {
    title: 'Full Adder',
    path: '/adder',
    description: 'Step-by-step carry propagation through XOR, AND, and OR gates.',
    tech: ['Go', 'WebAssembly', 'Circuit Design'],
  },
];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
export const featuredPosts = posts.filter((post) => post.featured).slice(0, 4);

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);

export const getPostBySlug = (slug) => posts.find((post) => post.slug === slug);

export const getAllProjectTags = () =>
  [...new Set(projects.flatMap((project) => project.tags))].sort((a, b) => a.localeCompare(b));

export const getAllPostTags = () =>
  [...new Set(posts.flatMap((post) => post.tags))].sort((a, b) => a.localeCompare(b));

export const formatDisplayDate = (isoDate) =>
  new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
