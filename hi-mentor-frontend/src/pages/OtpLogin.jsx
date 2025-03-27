import React, { useState } from "react";
import { sendOTP, verifyOTP } from "../services/authService";

const OtpLogin = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendOTP = async () => {
    const response = await sendOTP(email);
    if (response.message) {
      setIsOtpSent(true);
      setMessage("OTP sent to your email.");
    } else {
      setMessage(response.error);
    }
  };

  const handleVerifyOTP = async () => {
    const response = await verifyOTP(email, otp);
    if (response.message) {
      setMessage("OTP verified! Logging in...");
      // Redirect to dashboard
    } else {
      setMessage(response.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Login with OTP</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded w-full mb-2"
        />
        {isOtpSent && (
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="p-2 border rounded w-full mb-2"
          />
        )}
        <button
          onClick={isOtpSent ? handleVerifyOTP : handleSendOTP}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          {isOtpSent ? "Verify OTP" : "Send OTP"}
        </button>
        <p className="text-red-500 mt-2">{message}</p>
      </div>
    </div>
  );
};

export default OtpLogin;