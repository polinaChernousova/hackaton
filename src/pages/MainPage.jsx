import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ProductsPagination from "../components/ProductsPagination";
import ContentPage from "./ContentPage";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <>
      <div className="hero-container">
        <h1 style={{ textAlign: "center" }}>Plunge into another reality</h1>
        <video src="/videos/video-6.mp4" autoPlay loop muted />

        <Link to="/sign-up">
          <button className="btn-outline" type="submit">
            Sign Up
          </button>
        </Link>
      </div>
      <ContentPage />
      <Footer />
    </>
  );
};

export default MainPage;
