import React from "react";
import { assets } from "../assets/assets_frontend/assets";

function About() {
  return (
    <div className="aboutus">
      <div
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "rgb(91, 87, 87)",
        }}
      >
        <p>
          ABOUT <span style={{ color: "rgb(40, 38, 38)" }}>US</span>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "3rem",
          margin: "2.5rem 0rem",
        }}
      >
        <img
          src={assets.about_image}
          alt=""
          style={{ width: "100%", maxWidth: "360px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            fontSize: "14px",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nemo dolorum iusto quidem rem maiores, quisquam iste voluptatem
            architecto maxime! Voluptatibus nulla, fugit iure dolorum illum quos
            numquam magni repudiandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nemo dolorum iusto quidem rem maiores, quisquam iste voluptatem
            architecto maxime! Voluptatibus nulla, fugit iure dolorum illum quos
            numquam magni repudiandae.
          </p>
          <b>Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nemo dolorum iusto quidem rem maiores, quisquam iste voluptatem
            architecto maxime! Voluptatibus nulla, fugit iure dolorum illum quos
            numquam magni repudiandae.
          </p>
        </div>
      </div>
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "rgb(91, 87, 87)",
          margin: "1rem 0rem",
        }}
      >
        <p>
          WHY<span style={{ color: "rgb(40, 38, 38)" }}>CHOOSE US</span>{" "}
        </p>
      </div>

      <div className="aboutus-whychooseus">
        <div>
          <b>Efficiency :</b>
          <p>
            Streamlined Apponitment Scheduking That Fits into Your Busy
            Lifestyle
          </p>
        </div>

        <div>
          <b>Convenience :</b>
          <p>
            Access to network of Trusted Healthcare Professionals in Your Area
          </p>
        </div>

        <div>
          <b>Personalization :</b>
          <p>
            Tailored Recommendations and Reminders to Help You Stay On Top Of
            Your Health
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
