export default function Dashboard() {
  return (
    <div className="hero-card" style={{ textAlign: "left" }}>
      <span className="hero-subtitle">RECRUITMENT DASHBOARD</span>
      <h1 className="hero-title" style={{ textAlign: "left" }}>Recruitment Dashboard</h1>
      <p className="hero-description" style={{ margin: "0 0 1.5rem 0", textAlign: "left" }}>
        Overview of active applications, posted jobs, and recruitment metrics.
      </p>

      <div className="card-grid">
        <div className="feature-card">
          <h3>Active Job Listings</h3>
          <p>12 job postings currently accepting applications.</p>
        </div>
        <div className="feature-card">
          <h3>Total Applications Received</h3>
          <p>148 candidate applications submitted this week.</p>
        </div>
        <div className="feature-card">
          <h3>Shortlisted Candidates</h3>
          <p>24 applicants selected for technical interview stage.</p>
        </div>
      </div>
    </div>
  );
}