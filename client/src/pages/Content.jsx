import React from "react";

export default function Content({ username, onLogout, onVideoPlay }) {
  return (
    <div className="content-container">
      <header className="header">
        <h2>Welcome {username}</h2>
        <button onClick={onLogout}>Logout</button>
      </header>

      <h3>Videos</h3>
      <div className="video-grid">
        {["video1", "video2", "video3"].map((vid) => (
          <video
            key={vid}
            width="320"
            controls
            onPlay={() => onVideoPlay(vid)}
          >
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              type="video/mp4"
            />
          </video>
        ))}
      </div>
    </div>
  );
}
