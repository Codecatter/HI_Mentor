import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { MentorProvider } from "./context/MentorContext";
import { VideoCallProvider } from "./context/VideoCallContext";
import "./index.css"; // Import Tailwind and global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <MentorProvider>
        <VideoCallProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </VideoCallProvider>
      </MentorProvider>
    </AuthProvider>
  </React.StrictMode>
);