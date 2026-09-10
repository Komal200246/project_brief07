import { useState } from "react";
import Welcome from "../../components/ui/Welcome";
import PageTitle from "../../components/ui/PageTitle";

export default function Dashboard() {
  // State for saved jobs
  const [savedJobs, setSavedJobs] = useState(0);

  // State for search input
  const [search, setSearch] = useState("");

  // State for login/logout
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="hero-card" style={{ textAlign: "left" }}>

      {/* =========================
          EXERCISE 1 - PROPS
      ========================== */}
      <Welcome name="Komal" />


      {/* =========================
          EXERCISE 2 - DYNAMIC PAGE TITLE
      ========================== */}
      <PageTitle
        eyebrow="RECRUITMENT DASHBOARD"
        description="Overview of active applications, posted jobs, and recruitment metrics."
      >
        Recruitment Dashboard
      </PageTitle>


      {/* =========================
          EXERCISE 5 - USER INPUT
      ========================== */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h3>Search Jobs</h3>

        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            maxWidth: "400px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <p style={{ marginTop: "10px" }}>
          You searched for:{" "}
          <strong>{search || "Nothing yet"}</strong>
        </p>
      </div>


      {/* =========================
          EXERCISE 6 - CONDITIONAL RENDERING
      ========================== */}
      <div style={{ marginBottom: "1.5rem" }}>
        {loggedIn ? (
          <p>
            <strong>Welcome back!</strong> You are logged in.
          </p>
        ) : (
          <p>
            <strong>Please login to continue.</strong>
          </p>
        )}

        <button onClick={() => setLoggedIn(!loggedIn)}>
          {loggedIn ? "Logout" : "Login"}
        </button>
      </div>


      {/* =========================
          EXISTING DASHBOARD CARDS
      ========================== */}
      <div className="card-grid">

        <div className="feature-card">
          <h3>Active Job Listings</h3>
          <p>
            12 job postings currently accepting applications.
          </p>
        </div>

        <div className="feature-card">
          <h3>Total Applications Received</h3>
          <p>
            148 candidate applications submitted this week.
          </p>
        </div>

        <div className="feature-card">
          <h3>Shortlisted Candidates</h3>
          <p>
            24 applicants selected for technical interview stage.
          </p>
        </div>

      </div>


      {/* =========================
          EXERCISE 3 & 4 - STATE + EVENT
      ========================== */}
      <div
        className="feature-card"
        style={{ marginTop: "1.5rem" }}
      >
        <h3>Saved Jobs</h3>

        <p>
          You have saved{" "}
          <strong>{savedJobs}</strong> job(s).
        </p>

        <button
          onClick={() => setSavedJobs(savedJobs + 1)}
        >
          Save Job
        </button>

        {savedJobs > 0 && (
          <p style={{ marginTop: "10px" }}>
            Job saved successfully!
          </p>
        )}
      </div>

    </div>
  );
}