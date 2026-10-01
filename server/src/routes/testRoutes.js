const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Job Portal API is working successfully!"
  });
});

module.exports = router;