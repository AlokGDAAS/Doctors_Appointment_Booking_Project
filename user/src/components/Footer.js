import React from "react";
import { assets } from "../assets/assets_frontend/assets";

function Footer() {
  return (
    <div style={{ margin: "0px 2.5rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr 1fr",
          gap: "4rem",
          margin: "0px 2.5rem",
          margin: "2.5rem 0rem",
          marginTop: "10rem",
          fontSize: "0.876rem",
          fontWeight: "500",
        }}
      >
        {/* ---------------left section----------------- */}
        <div>
          <img
            src={assets.logo}
            alt=""
            style={{ marginBottom: "1.25rem", width: "30%" }}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi
            voluptas architecto! Dignissimos sapiente cupiditate ab ad, itaque
            eaque inventore rerum ipsa doloribus expedita, sequi laboriosam
            velit obcaecati sunt provident.
          </p>
        </div>
        {/* ---------------center section----------------- */}
        <div>
          <p style={{ marginBottom: "1.25rem", fontWeight: "600" }}>COMPANY</p>
          <ul style={{ listStyle: "none", color: "rgb(51, 51, 51)" }}>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* ---------------right section----------------- */}
        <div>
          <p style={{ marginBottom: "1.25rem", fontWeight: "600" }}>
            GET IN TOUCH
          </p>
          <ul style={{ listStyle: "none", color: "rgb(51, 51, 51)" }}>
            <li>+1-212-456-7890</li>
            <li>alokdev@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        {/* --------------------copyright text--------------- */}
        <hr />
        <p
          style={{
            textAlign: "center",
            padding: "1.5rem 0rem",
            fontSize: "14px",
          }}
        >
          Copyrights 2025@ Prescripto - All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
