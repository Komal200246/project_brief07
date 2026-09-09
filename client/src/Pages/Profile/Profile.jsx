import Card from "../../components/Ui/Card";

export default function Profile() {
  return (
    <div>
      <h1>Candidate Profile</h1>
      <div className="card-grid">
        <Card 
          title="Personal Details" 
          description="Name: Alex Morgan | Title: Senior Frontend Developer | Experience: 4 Years" 
          type="Applicant Info" 
        />
        <Card 
          title="Contact & Resume" 
          description="Email: alex.morgan@example.com | Phone: +1 (555) 019-2834 | Resume Attached" 
          type="Verified Contact" 
        />
      </div>
    </div>
  );
}