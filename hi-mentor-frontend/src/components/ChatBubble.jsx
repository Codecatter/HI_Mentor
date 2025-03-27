const ChatBubble = ({ message, isUser }) => {
    return (
      <div className={`p-3 rounded-lg max-w-xs ${isUser ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black"}`}>
        <p>{message.text}</p>
      </div>
    );
  };
  
  export default ChatBubble;