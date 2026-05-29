import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPostBySlug, getProjectBySlug, siteMeta } from '../content/siteContent';

const ensureMetaTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const ensureLinkTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const buildStaticMeta = (pathname) => {
  const staticPages = {
    '/': {
      title: siteMeta.defaultTitle,
      description:
        'Senior engineer focused on platform engineering, distributed systems, Kubernetes, and AI infrastructure.',
    },
    '/resume': {
      title: `Resume | ${siteMeta.shortName}`,
      description:
        'Experience across platform engineering, Kubernetes migration, developer platforms, and event-driven systems.',
    },
    '/now': {
      title: `Now | ${siteMeta.shortName}`,
      description:
        'Current focus, role preferences, recent shipping work, and the best ways to reach Ankur Verma.',
    },
    '/projects': {
      title: `Projects | ${siteMeta.shortName}`,
      description:
        'Case studies across platform engineering, AI infrastructure, Go, WebAssembly, and distributed systems.',
    },
    '/blog': {
      title: `Field Notes | ${siteMeta.shortName}`,
      description:
        'Searchable notes on Knative, AI infrastructure, Go, networking, concurrency, and system design.',
    },
    '/launchpad': {
      title: `Launch Pad | ${siteMeta.shortName}`,
      description: 'Interactive demos spanning systems design, WebAssembly, chaos engineering, and simulation.',
    },
    '/github': {
      title: `GitHub Pulse | ${siteMeta.shortName}`,
      description: 'User-specific GitHub activity with repo and commit patterns processed inside the portfolio.',
    },
    '/chaos': {
      title: `Chaos Engine | ${siteMeta.shortName}`,
      description: 'Interactive chaos engineering simulation for distributed systems and failure scenarios.',
    },
    '/pongwars': {
      title: `Pong Wars | ${siteMeta.shortName}`,
      description: 'Go and WebAssembly territory-conquest simulation embedded directly into the portfolio.',
    },
    '/logic-gates': {
      title: `Logic Gates | ${siteMeta.shortName}`,
      description: 'Interactive logic-gate visualizer powered by Go WebAssembly.',
    },
    '/adder': {
      title: `Full Adder | ${siteMeta.shortName}`,
      description: 'Animated full-adder circuit explaining binary addition and carry propagation.',
    },
    '/event-mesh-lab': {
      title: `Event Mesh Lab | ${siteMeta.shortName}`,
      description:
        'Interactive eventing simulator for partitions, consumer lag, retries, and dead-letter routing.',
    },
  };

  return staticPages[pathname] || {
    title: siteMeta.defaultTitle,
    description: siteMeta.defaultDescription,
  };
};

const RouteMetadata = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname === '' ? '/' : location.pathname;
    const pathParts = pathname.split('/').filter(Boolean);

    let metadata = buildStaticMeta(pathname);

    if (pathParts[0] === 'projects' && pathParts[1]) {
      const project = getProjectBySlug(pathParts[1]);
      if (project) {
        metadata = {
          title: `${project.title} | ${siteMeta.shortName}`,
          description: project.summary,
        };
      }
    }

    if (pathParts[0] === 'blog' && pathParts[1]) {
      const post = getPostBySlug(pathParts[1]);
      if (post) {
        metadata = {
          title: `${post.title} | ${siteMeta.shortName}`,
          description: post.excerpt,
        };
      }
    }

    const canonicalUrl = new URL(pathname, siteMeta.siteUrl).toString();

    document.title = metadata.title;

    ensureMetaTag('meta[name="description"]', {
      name: 'description',
      content: metadata.description,
    });
    ensureMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: metadata.title,
    });
    ensureMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: metadata.description,
    });
    ensureMetaTag('meta[property="og:type"]', {
      property: 'og:type',
      content: pathParts[0] === 'blog' && pathParts[1] ? 'article' : 'website',
    });
    ensureMetaTag('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });
    ensureMetaTag('meta[property="og:image"]', {
      property: 'og:image',
      content: siteMeta.ogImage,
    });
    ensureMetaTag('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    ensureMetaTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: metadata.title,
    });
    ensureMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: metadata.description,
    });
    ensureMetaTag('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: siteMeta.ogImage,
    });
    ensureLinkTag('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });
  }, [location]);

  return null;
};

export default RouteMetadata;
