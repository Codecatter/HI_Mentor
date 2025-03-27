import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ScheduledMentorship = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-blue-600">Scheduled Mentorship</h1>
        <p className="text-gray-600 mt-2">Book a session with a mentor at a preferred time.</p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Schedule a Session
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ScheduledMentorship;