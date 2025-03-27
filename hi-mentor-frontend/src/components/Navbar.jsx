import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">HI Mentor</Link>
        <div className="space-x-4">
          <Link to="/mentors" className="hover:underline">Mentors</Link>
          <Link to="/instant-mentorship" className="hover:underline">Instant Mentorship</Link>
          <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;