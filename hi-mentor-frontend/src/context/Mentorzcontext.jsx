import { createContext, useState, useEffect } from "react";
import { getMentors } from "../services/mentorService";

export const MentorContext = createContext();

export const MentorProvider = ({ children }) => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    async function fetchMentors() {
      try {
        const data = await getMentors();
        setMentors(data);
      } catch (error) {
        console.error("Failed to load mentors:", error.message);
      }
    }
    fetchMentors();
  }, []);

  return (
    <MentorContext.Provider value={{ mentors }}>
      {children}
    </MentorContext.Provider>
  );
};
