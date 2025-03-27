const SessionTile = ({ session }) => {
    return (
      <div className="border rounded-lg p-4 shadow-md bg-gray-100">
        <h3 className="text-lg font-semibold">{session.title}</h3>
        <p className="text-gray-500">{session.date} | {session.time}</p>
      </div>
    );
  };
  
  export default SessionTile;