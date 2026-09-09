import Card from "../../components/ui/Card";
import "../../styles/components.css";

function Jobs() {
  return (
    <div>
      <h1>Available Jobs</h1>

      <div className="job-grid">
        <Card
          title="Frontend Developer"
          company="ABC Technologies"
          location="Guwahati"
          type="Full Time"
        />

        <Card
          title="Backend Developer"
          company="XYZ Solutions"
          location="Delhi"
          type="Full Time"
        />

        <Card
          title="UI/UX Designer"
          company="Creative Studio"
          location="Bangalore"
          type="Part Time"
        />
      </div>
    </div>
  );
}

export default Jobs;