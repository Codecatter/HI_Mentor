const API_URL = "/api/video-call"; // Replace with actual backend URL

export const startCall = async (userId, mentorId) => {
  try {
    const response = await fetch(`${API_URL}/start`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, mentorId }),
    });
    const data = await response.json();
    return data.roomId;
  } catch (error) {
    console.error("Error starting video call:", error);
    throw error;
  }
};

export const joinCall = async (roomId) => {
  try {
    const response = await fetch(`${API_URL}/join/${roomId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error joining video call:", error);
    throw error;
  }
};