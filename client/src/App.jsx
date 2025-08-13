// import React, { useState } from "react";

// export default function App() {
//   const [username, setUsername] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);

//   // Helper to send events to backend
//   const logEvent = async (eventType, extraData = "") => {
//     try {
//       console.log("sending event", eventType, extraData);
//       await fetch("http://localhost:5000/events", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: username || "Guest",
//           event_type: eventType,
//           details: extraData,
//           timestamp: new Date().toISOString(),
//         })
//       });
//     } catch (error) {
//       console.error("Error logging event:", error);
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (username.trim()) {
//       await logEvent("login", "logged in successfully");
//       setLoggedIn(true);
//     }
//   };

//   const handleLogout = async () => {
//     await logEvent("logout");
//     setLoggedIn(false);
//     setUsername("");
//   };

//   const handleVideoPlay = async (videoId) => {
//     await logEvent("video_play", `{video_id:${videoId}}`);
//   };

//   if (!loggedIn) {
//     return (
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <h1>Login Page</h1>
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             placeholder="Enter username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input type="password" placeholder="Enter any password" />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div style={{ textAlign: "center" }}>
//       <div style={{ background: "#ccc", padding: "10px" }}>
//         <h2>Welcome {username}</h2>
//         <button onClick={handleLogout}>Logout</button>
//       </div>

//       <h3>Videos</h3>
//       <div>
//         <video
//           width="320"
//           controls
//           onPlay={() => handleVideoPlay("video1")}
//         >
//           <source
//             src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//             type="video/mp4"
//           />
//         </video>

//         <video
//           width="320"
//           controls
//           onPlay={() => handleVideoPlay("video2")}
//         >
//           <source
//             src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//             type="video/mp4"
//           />
//         </video>

//         <video
//           width="320"
//           controls
//           onPlay={() => handleVideoPlay("video3")}
//         >
//           <source
//             src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//             type="video/mp4"
//           />
//         </video>
//       </div>
//     </div>
//   );
// }
  







import React, { useState } from "react";
import Login from "./pages/Login";
import Content from "./pages/Content";
import "./App.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // Centralized event logging
  const logEvent = async (eventType, extraData = "") => {
    try {
      console.log("Sending event:", eventType, extraData);
      await fetch("http://localhost:5000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username || "Guest",
          event_type: eventType,
          details: extraData,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("Error logging event:", error);
    }
  };

  const handleLogin = async (user) => {
    setUsername(user);
    await logEvent("login", "logged in successfully");
    setLoggedIn(true);
  };

  const handleLogout = async () => {
    await logEvent("logout");
    setUsername("");
    setLoggedIn(false);
  };

  const handleVideoPlay = async (videoId) => {
    await logEvent("video_play", `{video_id:${videoId}}`);
  };

  return (
    <div className="app-container">
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Content
          username={username}
          onLogout={handleLogout}
          onVideoPlay={handleVideoPlay}
        />
      )}
    </div>
  );
}
