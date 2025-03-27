const API_URL = "/api/auth"; // Replace with actual backend URL

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

export const register = async (name, email, password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Registration Error:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await fetch(`${API_URL}/logout`, { method: "POST" });
    return true;
  } catch (error) {
    console.error("Logout Error:", error);
    throw error;
  }
};

export const sendOTP = async (email) => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    return response.json();
  } catch (error) {
    console.error("Error sending OTP:", error);
    return { error: "Failed to send OTP" };
  }
};

export const verifyOTP = async (email, otp) => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    return response.json();
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return { error: "Failed to verify OTP" };
  }
};