const express = require("express");
const { getAvailableMentors } = require("../controllers/mentorController");

const router = express.Router();

router.get("/available", getAvailableMentors);

module.exports = router;