import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Home() {
  return (
    <div className="home-page">

      <div className="hero-card">

        <PageTitle
          eyebrow="WELCOME TO JOB PORTAL"
          description="Discover jobs, connect with employers, and take the next step toward your career goals."
        >
          Find Your Next Opportunity
        </PageTitle>

        <div className="hero-buttons">

          <Button>
            Find Jobs
          </Button>

          <Button>
            Explore Companies
          </Button>

        </div>

        <div className="home-cards">

          <Card
            title="Find Jobs"
            description="Search for opportunities that match your skills and interests."
          />

          <Card
            title="Build Your Profile"
            description="Create a professional profile to help employers find you."
          />

          <Card
            title="Grow Your Career"
            description="Connect with employers and discover new career opportunities."
          />

        </div>

      </div>

    </div>
  );
}

export default Home;