import { render } from "@testing-library/react";
import React, { Component } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import AboutBackgroundImage from "../Assets/About-background-image.png";
import AboutBackgroun from "../Assets/About-background.png";

class About extends Component  {
  render() {return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackgroun} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Get Your Medications Delivered to Your Doorstep
        </h1>
        <p className="primary-text">
          At our online pharmacy, we understand the importance of timely and
          accurate medication management. 
        </p>
        <p className="primary-text">That's why we offer a wide range of
        prescription medications, over-the-counter products, and health and
        wellness items to help you stay healthy and feel your best.</p>
        <div className="about-buttons-container">
        <button className="secondary-button">Learn More</button>
        <button className="watch-video-button"><BsFillPlayCircleFill/>Watch Video </button>
        </div>
      </div>
    </div>
  );}
};

export default About;
