import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const InstantMentorship = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-blue-600">Instant Mentorship</h1>
        <p className="text-gray-600 mt-2">Get connected with an available mentor instantly.</p>
        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
          Start a Session
        </button>
      </div>
      <Footer />
    </>
  );
};

export default InstantMentorship;
