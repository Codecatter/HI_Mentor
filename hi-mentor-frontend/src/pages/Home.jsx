import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to HI Mentor</h1>
        <p className="text-gray-700 mt-4">Find the right mentor for your journey.</p>
        <div className="mt-6 space-x-4">
          <Link to="/mentors" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Find a Mentor
          </Link>
          <Link to="/login" className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700">
            Get Started
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;