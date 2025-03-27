import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mentors from "./pages/Mentors";
import MentorDetail from "./pages/MentorDetail";
import InstantMentorship from "./pages/InstantMentorship";
import ScheduledMentorship from "./pages/ScheduledMentorship";
import GroupedMentorship from "./pages/GroupedMentorship";
import VideoCall from "./pages/VideoCall";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup_temp";  // Add this import
import Login from "./pages/Login";    // Add this import
import OtpLogin from "./pages/OtpLogin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="text-3xl font-bold text-blue-500">
        Tailwind is working!
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/otp-login" element={<OtpLogin />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/mentors/:id" element={<MentorDetail />} />
          <Route path="/instant-mentorship" element={<InstantMentorship />} />
          <Route path="/scheduled-mentorship" element={<ScheduledMentorship />} />
          <Route path="/grouped-mentorship" element={<GroupedMentorship />} />
          <Route path="/video-call" element={<VideoCall />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;