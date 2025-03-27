const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
  mentee: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["instant", "actual", "grouped"], required: true },
  field: { type: String, required: true },
  question: { type: String, required: true },
  status: { type: String, enum: ["pending", "scheduled", "completed"], default: "pending" },
  scheduledTime: { type: Date },
  recordingUrl: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Session", SessionSchema);