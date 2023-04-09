import React from "react";
import ChoosePharmacy from "../Assets/choose.png";
import FastDelivery from "../Assets/delivary.png";
import TakeMedicines from "../Assets/take-medicine.png";

const Services = () => {
  // create Service infodata aaray
  const serviceInfoData = [
    {
      image: TakeMedicines,
      title: "Take your Own Brand",
      text: " We understand that choosing the right medicine brand can be ",
    },
    {
      image: ChoosePharmacy,
      title: "Choose Reliable Pharmacy",
      text: "We offer a list of trusted and reliable pharmacies for you to choose",
    },
    {
      image: FastDelivery,
      title: "Attain Fast Delivery",
      text: "Our commitment to our customers is to ensure that they ",
    },
  ];
  return (
    <div className="service-section-wrapper">
      <div className="service-section-top">
        <p className="primary-subheading">Services</p>
        <h1 className="primary-heading">Our Services</h1>
        <p className="primary-text">
          We offer a range of services to cater to your needs. Our goal is to
          provide high-quality services that meet your expectations and exceed
          them. Here are some of the services we offer.
        </p>
      </div>

      <div className="service-section-bottom">
      
      {serviceInfoData.map((data) => (
          <div className="service-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      
      </div>

    </div>
  );
};

export default Services;
