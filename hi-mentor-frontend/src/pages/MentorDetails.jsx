import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MentorDetail = () => {
  const { id } = useParams();
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    fetch(`/api/mentors/${id}`)
      .then((res) => res.json())
      .then((data) => setMentor(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!mentor) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">{mentor.name}</h1>
        <p className="text-gray-600">{mentor.expertise}</p>
        <p className="text-gray-800 mt-4">{mentor.bio}</p>
      </div>
      <Footer />
    </>
  );
};

export default MentorDetail;