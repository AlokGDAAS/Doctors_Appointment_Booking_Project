import React from "react";
import { assets } from "../assets/assets_frontend/assets";

function Contact() {
  return (
    <div className="contactus">
      <div
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "rgb(91, 87, 87)",
        }}
      >
        <p>
          CONTACT <span style={{ color: "rgb(40, 38, 38)" }}>US</span>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "3rem",
          margin: "2.5rem 0rem",
          justifyContent: "center",
          color: "rgb(80, 73, 73)",
        }}
      >
        <img
          src={assets.contact_image}
          alt=""
          style={{ width: "100%", maxWidth: "360px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            fontSize: "14px",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              color: "rgb(33, 29, 29)",
              fontWeight: "600",
            }}
          >
            OUR OFFICE
          </p>
          <p>
            Ramghat road Aligarh ,202001 <br />
            Uttar-Pradesh India
          </p>
          <p>
            Tel:+91 8877990055
            <br />
            Email:abc@gmail.com
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "rgb(33, 29, 29)",
              fontWeight: "600",
            }}
          >
            CAREERS AT PRESCRIPTO
          </p>
          <p>Learn more about our teams and job openings </p>
          <button className="contactus-btn">Explore jobs</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
