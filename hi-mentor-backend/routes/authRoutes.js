const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const crypto = require("crypto");
const transporter = require("../config/nodemailer");

const otpStore = {}; // Temporary storage for OTPs (Use Redis or DB for production

const router = express.Router();
const JWT_SECRET = "y76832dd87973f2c6f71041f3641eeff7e0752e72690f5c10a07cbe82c158765c"; // Replace with a secure key

// Signup Route
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Generate and send OTP
router.post("/send-otp", async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });
  
    otpStore[email] = crypto.randomInt(100000, 999999).toString(); // Store OTP temporarily
  
    // Send OTP via email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP for HI Mentor",
      text: 'Your otp is: ${otp}. It is valid for 10 minutes.',
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.json({ message: "OTP sent successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to send OTP" });
    }
  });
  
  // Verify OTP
  router.post("/verify-otp", (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ error: "Email and OTP are required" });
  
    if (otpStore[email] === otp) {
      delete otpStore[email]; // Remove OTP after successful verification
      res.json({ message: "OTP verified successfully" });
    } else {
      res.status(400).json({ error: "Invalid OTP" });
    }
  });

module.exports = router;