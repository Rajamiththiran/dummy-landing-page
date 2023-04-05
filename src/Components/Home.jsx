import React from "react";
import { FiArrowRight } from "react-icons/fi";
import BannerBackground from "../Assets/Home-background.png";
import BannerImage from "../Assets/Home-img.png";
import Navigationbar from "./Navigationbar";

function Home() {
  return (
    <div>
      <Navigationbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Shop for High-Quality Medications Online.
          </h1>
          <p className="primary-text">
            We believe that healthcare should be easy and convenient. That's why
            we offer a wide range of prescription medications, over-the-counter
            products, and health supplements that you can order online from the
            comfort of your own home.
          </p>
          <button className="primary-button">
            Oder Now <FiArrowRight/>
          </button>
        </div>
        <div className="home-image-container">
        <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
