import { useState } from 'react';
import './JobPosting.css';

function JobPostingForm() {
  const initialState = {
    jobTitle: '',
    companyName: '',
    department: '',
    description: '',
    skills: '',
    location: '',
    jobType: 'Full-time',
    salaryRange: '',
    deadline: ''
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (formData.description.trim().length < 20) newErrors.description = 'Description must be at least 20 characters';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.salaryRange.trim()) newErrors.salaryRange = 'Salary range is required';
    if (!formData.deadline) newErrors.deadline = 'Application deadline is required';
    else if (new Date(formData.deadline) < new Date()) newErrors.deadline = 'Deadline must be a future date';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Job Posting Submitted:', formData);
    setFormData(initialState);
    setErrors({});
  };

  const handleReset = () => {
    setFormData(initialState);
    setErrors({});
  };

  return (
    <div className="job-form-page-wrapper">
      <div className="job-form-container">
        <h2>Post a New Job</h2>
        <p className="job-form-subtitle">Fill in the details below to publish a job opportunity for candidates.</p>
        <form onSubmit={handleSubmit}>
          <label>Job Title *</label>
          <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="e.g. Frontend Developer" />
          {errors.jobTitle && <span className="error">{errors.jobTitle}</span>}

          <label>Company Name *</label>
          <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="e.g. Tech Corp" />
          {errors.companyName && <span className="error">{errors.companyName}</span>}

          <label>Department</label>
          <input name="department" value={formData.department} onChange={handleChange} placeholder="e.g. Engineering" />

          <label>Job Description *</label>
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Describe the role..." />
          {errors.description && <span className="error">{errors.description}</span>}

          <label>Required Skills</label>
          <input name="skills" value={formData.skills} onChange={handleChange} placeholder="e.g. React, Node.js" />

          <label>Location *</label>
          <input name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Remote / Guwahati" />
          {errors.location && <span className="error">{errors.location}</span>}

          <label>Job Type</label>
          <select name="jobType" value={formData.jobType} onChange={handleChange}>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
          </select>

          <label>Salary Range *</label>
          <input name="salaryRange" value={formData.salaryRange} onChange={handleChange} placeholder="e.g. ₹30,000 - ₹50,000" />
          {errors.salaryRange && <span className="error">{errors.salaryRange}</span>}

          <label>Application Deadline *</label>
          <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} />
          {errors.deadline && <span className="error">{errors.deadline}</span>}

          <div className="button-group">
            <button type="submit">Post Job</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobPostingForm;