import { useState } from "react";
import Card from "../../components/ui/Card";
import "../../styles/components.css";

function Jobs() {
  const [search, setSearch] = useState("");
  const [searchedJob, setSearchedJob] = useState("");

  const jobs = [
    {
      title: "Frontend Developer",
      company: "ABC Technologies",
      location: "Guwahati",
      type: "Full Time",
    },
    {
      title: "Backend Developer",
      company: "XYZ Solutions",
      location: "Delhi",
      type: "Full Time",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Bangalore",
      type: "Part Time",
    },
  ];

  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.company} ${job.location}`
      .toLowerCase()
      .includes(searchedJob.toLowerCase())
  );

  const handleSearch = () => {
    setSearchedJob(search);
  };

  return (
    <div className="jobs-page">

      {/* Page Header */}
      <div className="jobs-header">
        <span className="hero-subtitle">JOB OPPORTUNITIES</span>

        <h1>Available Jobs</h1>

        <p>
          Search and explore job opportunities that match your skills.
        </p>
      </div>

      {/* Search Section */}
      <div className="job-search">
        <input
          type="text"
          placeholder="Search jobs, companies or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Search Result */}
      {searchedJob && (
        <p className="search-result">
          Showing results for: <strong>{searchedJob}</strong>
        </p>
      )}

      {/* Job Cards */}
      <div className="job-grid">

        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <Card
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
            />
          ))
        ) : (
          <div className="no-jobs">
            <h3>No jobs found</h3>
            <p>Try searching for another job or location.</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Jobs;