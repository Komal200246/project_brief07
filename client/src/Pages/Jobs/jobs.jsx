import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Jobs() {
  return (
    <div className="jobs-page">

      <PageTitle
        eyebrow="JOB OPPORTUNITIES"
        description="Explore available opportunities and find the right job for you."
      >
        Available Jobs
      </PageTitle>

      <div className="jobs-grid">

        <Card
          title="Frontend Developer"
          description="React • JavaScript • CSS"
        >
          <Button>
            Apply Now
          </Button>
        </Card>

        <Card
          title="MERN Stack Developer"
          description="MongoDB • Express • React • Node.js"
        >
          <Button>
            Apply Now
          </Button>
        </Card>

        <Card
          title="Backend Developer"
          description="Node.js • Express • MongoDB"
        >
          <Button>
            Apply Now
          </Button>
        </Card>

      </div>

    </div>
  );
}

export default Jobs;