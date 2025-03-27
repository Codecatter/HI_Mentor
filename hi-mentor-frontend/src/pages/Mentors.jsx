import { useEffect, useState } from "react";
import MentorCard from "../components/MentorCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    // Fetch mentors from API (Replace with actual backend URL)
    fetch("/api/mentors")
      .then((res) => res.json())
      .then((data) => setMentors(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Mentors</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mentors;