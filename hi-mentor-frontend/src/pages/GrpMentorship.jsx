import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GroupedMentorship = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-blue-600">Grouped Mentorship</h1>
        <p className="text-gray-600 mt-2">Join a mentorship session with multiple participants.</p>
        <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700">
          Join a Group Session
        </button>
      </div>
      <Footer />
    </>
  );
};

export default GroupedMentorship;