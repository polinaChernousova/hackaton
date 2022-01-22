import React from "react";

const MainPage = () => {
  return (
    <>
      <div className="hero-container">
        <video src="/videos/video-6.mp4" autoPlay loop muted />
        <div style={{ paddingTop: "100px" }}>
          <h1>Plunge into another reality</h1>
          <p>What are you waiting for?</p>
          <div className="hero-btns">
            <button className="btns">SIGN UP</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
