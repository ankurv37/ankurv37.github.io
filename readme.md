
Reference : https://github.com/gitname/react-gh-pages

## Prerequisites

- Node.js (v14 or higher)
- Go (for building WebAssembly modules)
- npm or yarn package manager

## How to Run

To build locally first
./scripts/build-wasm.sh

### Development Mode

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build WebAssembly modules**
   ```bash
   npm run setup:wasm
   ```
   This will compile the Go WASM modules (main.wasm and chaos.wasm) needed for the application.

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

### Production Build

1. **Build the application**
   ```bash
   npm run build
   ```
   This will:
   - Build WebAssembly modules
   - Create an optimized production build in the `build` folder

### Deploy to GitHub Pages

Push the React app to the GitHub repository
1.npm run deploy
2.npm run deploy -- -m "Deploy React app to GitHub Pages"

## Features

### Core Pages
- **Home**: Landing page with animations and introduction
- **Resume**: Professional experience, education, and skills showcase
- **Projects**: Portfolio of projects with detailed cards
- **Blog**: Blog posts and articles

### Interactive Visualizations
- **Logic Gate Visualizer**: Interactive visualization of digital logic gates (AND, OR, NOT, XOR, etc.)
- **Full Adder Visualizer**: Step-by-step visualization of binary addition using full adder circuits
- **Pong Wars**: Interactive Pong game implementation

### WebAssembly Powered Features
- **GitHub Activity Tracker**: Processes and aggregates GitHub commit data using Go WASM for performance
- **Chaos Engineering Demo**: Real-time simulation of distributed systems with fault injection (network partitions, CPU spikes, node crashes, memory leaks)

### Technical Features
- Google OAuth integration for authentication
- Smooth animations using Framer Motion
- Responsive design for mobile and desktop
- Single Page Application (SPA) with React Router
- Styled Components for component-level styling

## Technology Stack

- **Frontend**: React 19, React Router, Styled Components
- **Animations**: Framer Motion
- **WebAssembly**: Go compiled to WASM
- **Authentication**: Google OAuth (@react-oauth/google)
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## Possible Future Enhancements

### New Features
- **Dark/Light Theme Toggle**: Add theme switcher with persistence
- **More Interactive Visualizations**:
  - CPU scheduling algorithms visualizer
  - Sorting algorithm animations
  - Data structure visualizations (trees, graphs, heaps)
- **Blog CMS Integration**: Connect to a headless CMS for easier blog management
- **Contact Form**: Add a contact section with form submission
- **Analytics Dashboard**: Visualize visitor statistics and engagement
- **Code Playground**: Interactive code editor with syntax highlighting and execution
- **Project Filtering**: Add tags and filters for project categorization

### Technical Improvements
- **Performance Optimization**:
  - Implement code splitting for faster initial load
  - Add service worker for offline support
  - Lazy load components and images
- **Testing**:
  - Add unit tests with Jest
  - Integration tests with React Testing Library
  - E2E tests with Cypress or Playwright
- **Accessibility**:
  - Improve ARIA labels and keyboard navigation
  - Add screen reader support
  - Implement focus management
- **SEO Enhancement**:
  - Add meta tags for better social media sharing
  - Implement structured data (JSON-LD)
  - Create sitemap.xml
- **CI/CD Pipeline**:
  - Automated testing on pull requests
  - Automated deployment on merge to main
  - Lighthouse CI for performance monitoring

### Additional Visualizations
- **Distributed Systems Concepts**:
  - Consensus algorithms (Raft, Paxos)
  - Load balancing strategies
  - Caching strategies visualization
- **Algorithm Visualizations**:
  - Pathfinding algorithms (A*, Dijkstra)
  - Graph traversal (BFS, DFS)
  - Dynamic programming problems
- **System Design Diagrams**: Interactive architecture diagrams

### UX Improvements
- Add loading states and skeletons
- Implement error boundaries with friendly error messages
- Add search functionality across blog posts and projects
- Implement pagination for blog and projects
- Add sharing buttons for blog posts
- Create a newsletter subscription feature

Backend APIs
https://us-central1-calculus-407403.cloudfunctions.net/calculus-1



GOOS=js GOARCH=wasm go build -o src/wasm/arithmetic.wasm src/wasm/arithmetic.go

GOOS=js GOARCH=wasm go build -o public/arithmetic.wasm src/wasm/arithmetic.go

Push the React app to the GitHub repository 
1.npm run deploy 
2.npm run deploy -- -m "Deploy React app to GitHub Pages"