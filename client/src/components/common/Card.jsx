function Card({ title, company, location, type }) {
  return (
    <div className="job-card">
      <h3>{title}</h3>

      <p>
        <strong>Company:</strong> {company}
      </p>

      <p>
        <strong>Location:</strong> {location}
      </p>

      <p>
        <strong>Job Type:</strong> {type}
      </p>

      <button className="apply-btn">
        Apply Now
      </button>
    </div>
  );
}

export default Card;