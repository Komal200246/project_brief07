import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";

function Dashboard() {
  return (
    <div className="dashboard-page">

      <div className="dashboard-card">

        <PageTitle
          eyebrow="DASHBOARD"
          description="Manage your job applications and explore new opportunities."
        >
          Welcome Back
        </PageTitle>

        <div className="stats-grid">

          <Card
            title="Applications"
            description="12 Applications submitted"
          />

          <Card
            title="Saved Jobs"
            description="8 Jobs saved to view"
          />

          <Card
            title="Profile Status"
            description="80% Profile completion"
          />

        </div>

        <div className="activity">

          <h3>Recent Activity</h3>

          <p>
            Your recent job activity will appear here.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;