import React from "react";
import { AiFillStar } from "react-icons/ai";
import ProfilePicture from "../Assets/Profile-picture.png";

function Testimonial() {
  return (
    <div className="service-section-wrapper">
      <div className="service-section-top">
        <p className="primary-subheading">Reviews</p>
        <h1 className="primary-heading">Customer Reviews</h1>
        <p className="primary-test">
          
        </p>
      </div>
      <div className="testimonial-section-bottom">
      <img src={ProfilePicture} alt="" />
      <p>I recently ordered medication from this online pharmacy and was very
      pleased with the entire experience. The website was easy to navigate
      and placing my order was quick and simple. The medication arrived on
      time and was exactly what I needed.</p>
      <div className="testimonial-stars-container">
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
     </div>
     <h2>Mththiran Varathan</h2>
     </div>
    </div>
  );
}

export default Testimonial;
