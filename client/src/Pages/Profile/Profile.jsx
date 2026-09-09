import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-card">

        <PageTitle
          eyebrow="MY PROFILE"
          description="Manage your personal information and career details."
        >
          Professional Profile
        </PageTitle>

        <div className="profile-box">

          <div className="profile-avatar">
            JD
          </div>

          <h3>John Doe</h3>

          <p className="profile-role">
            Job Seeker
          </p>

          <div className="profile-details">

            <div>
              <strong>Email</strong>
              <span>john.doe@example.com</span>
            </div>

            <div>
              <strong>Location</strong>
              <span>India</span>
            </div>

            <div>
              <strong>Experience</strong>
              <span>2 Years</span>
            </div>

            <div>
              <strong>Skills</strong>
              <span>React, JavaScript, Node.js</span>
            </div>

          </div>

          <Button>
            Edit Profile
          </Button>

        </div>

      </div>

    </div>
  );
}

export default Profile;