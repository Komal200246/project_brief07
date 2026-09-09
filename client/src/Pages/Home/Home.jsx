import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="hero-card">
      <span className="hero-subtitle">WELCOME TO JOB PORTAL</span>
      <h1 className="hero-title">Find Your Next Opportunity</h1>
      <p className="hero-description">
        Discover jobs, connect with employers, and take the next step toward your career goals.
      </p>

      <div className="hero-buttons">
        <Link to="/dashboard" className="btn-primary">Find Jobs</Link>
        <Link to="/dashboard" className="btn-primary">Explore Companies</Link>
      </div>

      <div className="card-grid">
        <div className="feature-card">
          <h3>Find Jobs</h3>
          <p>Search for opportunities that match your skills and interests.</p>
        </div>
        <div className="feature-card">
          <h3>Build Your Profile</h3>
          <p>Create a professional profile to help employers find you.</p>
        </div>
        <div className="feature-card">
          <h3>Grow Your Career</h3>
          <p>Connect with employers and discover new career opportunities.</p>
        </div>
      </div>
    </div>
  );
}