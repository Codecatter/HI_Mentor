const User = require("../models/User");

exports.getAvailableMentors = async (req, res) => {
  try {
    const { field } = req.query;
    const mentors = await User.find({ role: "mentor", expertise: field });

    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};