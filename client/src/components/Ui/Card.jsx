export default function Card({ title, company, location, salary, type, description }) {
  return (
    <div className="card">
      <div>
        <h3>{title}</h3>
        {company && <p><strong>Company:</strong> {company}</p>}
        {location && <p><strong>Location:</strong> {location}</p>}
        {salary && <p><strong>Salary:</strong> {salary}</p>}
        {description && <p className="mt-2">{description}</p>}
      </div>
      {type && <span className="card-badge">{type}</span>}
    </div>
  );
}