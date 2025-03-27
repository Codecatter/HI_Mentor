const Session = require("../models/Session");

exports.createSession = async (req, res) => {
  try {
    const { mentee, mentor, type, field, question, scheduledTime } = req.body;

    const session = new Session({ mentee, mentor, type, field, question, scheduledTime });
    await session.save();

    res.status(201).json({ message: "Session scheduled successfully", session });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserSessions = async (req, res) => {
  try {
    const { userId } = req.params;
    const sessions = await Session.find({ $or: [{ mentee: userId }, { mentor: userId }] }).populate("mentor mentee");

    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};