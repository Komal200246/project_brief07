const express = require("express");
const cors = require("cors");

const testRoutes = require("./routes/testRoutes");
const jobRoutes = require("./routes/jobRoutes");
const requestLogger = require("./middleware/requestLogger");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Home/Test route
app.get("/", (req, res) => {
    res.send("Job Portal Backend is Running");
});

// API routes
app.use("/api", testRoutes);
app.use("/api/jobs", jobRoutes);

module.exports = app;