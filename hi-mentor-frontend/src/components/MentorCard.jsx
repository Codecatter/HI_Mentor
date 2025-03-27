import { Link } from "react-router-dom";

const MentorCard = ({ mentor }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-xl font-bold">{mentor.name}</h2>
      <p className="text-gray-600">{mentor.expertise}</p>
      <Link to={`/mentors/${mentor.id}`} className="text-blue-500 hover:underline mt-2 block">
        View Profile
      </Link>
    </div>
  );
};

export default MentorCard;