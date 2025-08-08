import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaCalendarAlt } from 'react-icons/fa';
import { useWasm } from '../hooks/useWasm';
import './GitHubActivity.css';

const GitHubActivity = ({ username = 'ankurv37' }) => {
  const { wasmReady, processCommits, error } = useWasm();
  const [commitData, setCommitData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!wasmReady || !processCommits) return;

    const fetchCommitData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/events`);
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Extract commit timestamps from push events
        const commits = data
          .filter(e => e.type === "PushEvent" && e.payload && e.payload.commits)
          .flatMap(e => e.payload.commits.map(c => e.created_at));
        
        if (commits.length === 0) {
          setCommitData(null);
          setStats({ totalCommits: 0, activeDays: 0, avgPerDay: 0 });
          return;
        }
        
        // Process commits using WASM
        const counts = processCommits(commits);
        setCommitData(counts);
        
        // Calculate statistics
        const totalCommits = commits.length;
        const activeDays = Object.keys(counts).length;
        const avgPerDay = activeDays > 0 ? (totalCommits / activeDays).toFixed(1) : 0;
        
        setStats({
          totalCommits,
          activeDays,
          avgPerDay
        });
        
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error);
        setCommitData(null);
        setStats(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCommitData();
  }, [wasmReady, processCommits, username]);

  const renderSimpleChart = () => {
    if (!commitData) return null;

    const sortedDates = Object.keys(commitData).sort();
    const last7Days = sortedDates.slice(-7);
    const maxCommits = Math.max(...last7Days.map(date => commitData[date]));

    return (
      <div className="activity-chart">
        <h4>Last 7 Days Activity</h4>
        <div className="chart-bars">
          {last7Days.map((date, index) => {
            const count = commitData[date];
            const height = maxCommits > 0 ? (count / maxCommits) * 100 : 0;
            const d = new Date(date);
            const dayLabel = d.toLocaleDateString('en-US', { weekday: 'short' });
            
            return (
              <motion.div 
                key={date} 
                className="chart-bar-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className="chart-bar" 
                  style={{ height: `${height}%` }}
                  title={`${dayLabel}: ${count} commits`}
                ></div>
                <span className="chart-label">{dayLabel}</span>
                <span className="chart-count">{count}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  if (error) {
    return (
      <motion.div 
        className="github-activity-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="activity-header">
          <FaGithub className="github-icon" />
          <h3>GitHub Activity</h3>
        </div>
        <div className="error-message">
          <p>⚠️ Error loading WASM module</p>
          <p>{error}</p>
          <small>Make sure to run: <code>npm run setup:wasm</code></small>
        </div>
      </motion.div>
    );
  }

  if (loading || !wasmReady) {
    return (
      <motion.div 
        className="github-activity-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="activity-header">
          <FaGithub className="github-icon" />
          <h3>GitHub Activity</h3>
        </div>
        <div className="loading-message">
          {loading ? '📊 Loading GitHub activity...' : '⚙️ Initializing WASM module...'}
        </div>
      </motion.div>
    );
  }

  if (!commitData || !stats) {
    return (
      <motion.div 
        className="github-activity-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="activity-header">
          <FaGithub className="github-icon" />
          <h3>GitHub Activity</h3>
        </div>
        <div className="no-data-message">
          <p>📭 No recent commit activity found</p>
          <small>This shows commits from recent push events in your public repositories.</small>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="github-activity-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="activity-header">
        <FaGithub className="github-icon" />
        <h3>GitHub Activity Dashboard</h3>
      </div>
      
      <div className="stats-grid">
        <motion.div 
          className="stat-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FaCode className="stat-icon" />
          <div className="stat-value">{stats.totalCommits}</div>
          <div className="stat-label">Total Commits</div>
        </motion.div>
        
        <motion.div 
          className="stat-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaCalendarAlt className="stat-icon" />
          <div className="stat-value">{stats.activeDays}</div>
          <div className="stat-label">Active Days</div>
        </motion.div>
        
        <motion.div 
          className="stat-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FaGithub className="stat-icon" />
          <div className="stat-value">{stats.avgPerDay}</div>
          <div className="stat-label">Avg/Day</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {renderSimpleChart()}
      </motion.div>
    </motion.div>
  );
};

export default GitHubActivity;
