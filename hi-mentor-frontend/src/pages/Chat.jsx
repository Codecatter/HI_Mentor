import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Chat = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-blue-600">Chat</h1>
        <p className="text-gray-600 mt-2">This is where the chat feature will be integrated.</p>
      </div>
      <Footer />
    </>
  );
};

export default Chat;