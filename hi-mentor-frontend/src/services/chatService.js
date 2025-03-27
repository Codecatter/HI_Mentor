const API_URL = "/api/chat";

export const sendMessage = async (roomId, message) => {
  try {
    const response = await fetch(`${API_URL}/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId, message }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMessages = async (roomId) => {
  try {
    const response = await fetch(`${API_URL}/messages/${roomId}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error;
  }
};