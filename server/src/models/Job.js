
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
      minlength: [3, "Job title must be at least 3 characters"],
      maxlength: [100, "Job title cannot exceed 100 characters"],
    },

    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
      minlength: [2, "Company name must be at least 2 characters"],
    },

    location: {
      type: String,
      required: [true, "Job location is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Job description is required"],
      minlength: [10, "Description must be at least 10 characters"],
    },

    salary: {
      type: Number,
      min: [0, "Salary cannot be negative"],
      default: 0,
    },

    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship", "Contract"],
      default: "Full-time",
    },

    status: {
      type: String,
      enum: ["Open", "Closed"],
      default: "Open",
    },

    applicationDeadline: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
