import { Link } from "react-router-dom";

export default function Companies() {
  return (
    <div className="hero-card">

      <span className="hero-subtitle">COMPANIES</span>

      <h1 className="hero-title">
        Explore Companies
      </h1>

      <p className="hero-description">
        Discover companies and explore career opportunities.
      </p>

      <div className="company-grid">

        {/* ABC Technologies */}
        <div className="company-card">
          <div className="company-header">
            <div className="company-logo">A</div>

            <div>
              <h2>ABC Technologies</h2>
              <span>Technology</span>
            </div>
          </div>

          <p>
            Technology and software development company.
          </p>

          <div className="company-footer">
            <span>24 Open Jobs</span>

            <Link to="/jobs" className="view-jobs">
              View Jobs →
            </Link>
          </div>
        </div>


        {/* XYZ Solutions */}
        <div className="company-card">
          <div className="company-header">
            <div className="company-logo">X</div>

            <div>
              <h2>XYZ Solutions</h2>
              <span>Business Solutions</span>
            </div>
          </div>

          <p>
            Business and digital solutions company.
          </p>

          <div className="company-footer">
            <span>18 Open Jobs</span>

            <Link to="/jobs" className="view-jobs">
              View Jobs →
            </Link>
          </div>
        </div>


        {/* Global Careers */}
        <div className="company-card">
          <div className="company-header">
            <div className="company-logo">G</div>

            <div>
              <h2>Global Careers</h2>
              <span>Career Services</span>
            </div>
          </div>

          <p>
            Explore different career opportunities.
          </p>

          <div className="company-footer">
            <span>12 Open Jobs</span>

            <Link to="/jobs" className="view-jobs">
              View Jobs →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
