import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VideoCall = () => {
  const [me, setMe] = useState(""); // My socket ID
  const [stream, setStream] = useState(null);
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [peerId, setPeerId] = useState("");
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  const socket = useRef();

  useEffect(() => {
    // Connect to the signaling server
    socket.current = io("http://localhost:5000");

    // Get user media (access to webcam and microphone)
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        if (myVideo.current) {
          myVideo.current.srcObject = currentStream;
        }
      });

    // Save my socket ID
    socket.current.on("connect", () => {
      setMe(socket.current.id);
    });

    // Listen for user connections
    socket.current.on("user-connected", (id) => {
      setPeerId(id);
    });

    // Handle incoming calls
    socket.current.on("callUser", ({ from, signal }) => {
      const peer = new Peer({ initiator: false, trickle: false, stream });

      peer.on("signal", (data) => {
        socket.current.emit("answerCall", { signal: data, to: from });
      });

      peer.on("stream", (userStream) => {
        userVideo.current.srcObject = userStream;
      });

      peer.signal(signal);
      connectionRef.current = peer;
      setCallAccepted(true);
    });
  }, []);

  // Call user
  const callUser = (id) => {
    setIsCalling(true);
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.current.emit("callUser", { userToCall: id, signalData: data, from: me });
    });

    peer.on("stream", (userStream) => {
      userVideo.current.srcObject = userStream;
    });

    socket.current.on("callAccepted", (signal) => {
      peer.signal(signal);
      setCallAccepted(true);
      setIsCalling(false);
    });

    connectionRef.current = peer;
  };

  // End call
  const leaveCall = () => {
    setCallEnded(true);
    if (connectionRef.current) connectionRef.current.destroy();
    socket.current.disconnect();
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Video Call</h1>
        <p className="text-gray-600 mt-2">This is where the video conferencing feature will be integrated.</p>

        <div className="flex justify-center gap-8 mt-6">
          <div>
            <h2 className="text-lg font-bold">My Video</h2>
            <video ref={myVideo} autoPlay playsInline className="w-64 h-48 border border-gray-400" />
          </div>
          {callAccepted && !callEnded && (
            <div>
              <h2 className="text-lg font-bold">Remote Video</h2>
              <video ref={userVideo} autoPlay playsInline className="w-64 h-48 border border-gray-400" />
            </div>
          )}
        </div>

        <div className="mt-6">
          {peerId && !callAccepted ? (
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700" onClick={() => callUser(peerId)}
             disabled={isCalling}
            >
             {isCalling ? "Calling..." : "Start Video Call"}
            </button>
          ) : null}
          {callAccepted && !callEnded && (
            <button className="ml-4 bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700" onClick={leaveCall}>
              End Call
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VideoCall;