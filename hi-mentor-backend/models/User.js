const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["mentee", "mentor"], required: true },
  expertise: { type: [String], default: [] }, // Only for mentors
  availability: { type: [String], default: [] }, // Mentor's available time slots
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);