const API_URL = "/api/mentors"; // Replace with actual backend URL

export const getMentors = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching mentors:", error);
    throw error;
  }
};

export const getMentorById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching mentor details:", error);
    throw error;
  }
};

export const bookMentorship = async (mentorId, userId, date, time) => {
  try {
    const response = await fetch(`${API_URL}/book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mentorId, userId, date, time }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error booking mentorship:", error);
    throw error;
  }
};