const express = require("express");
const cors = require("cors");
const testRoutes = require("./routes/testRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home/Test route
app.get("/", (req, res) => {
    res.send("Job Portal Backend is Running");
});

// API routes
app.use("/api", testRoutes);

module.exports = app;