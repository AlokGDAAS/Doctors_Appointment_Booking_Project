import React from "react";
import { assets } from "../assets/assets_frontend/assets";

function Header() {
  return (
    <div
      style={{
        display: "flex",

        backgroundColor: "#5f6FFF",
        borderRadius: "10px",
        padding: "0rem 2rem",
      }}
    >
      {/*-------------------Left side------------------ */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          gap: "1rem",
          padding: "2.5rem 0rem",
          margin: "auto",
        }}
      >
        <p
          style={{
            fontSize: "40px",
            color: "white",
            lineHeight: "125%",
            fontWeight: "700",
          }}
        >
          Book Appointment
          <br />
          With trusted Doctors
        </p>
        <div
          style={{
            display: "flex",

            alignItems: "center",
            color: "white",
            fontSize: "14px",
            lineHeight: "20px",
            gap: "0.75rem",
            fontWeight: "400",
          }}
        >
          <img src={assets.group_profiles} alt="" style={{ width: "7rem" }} />
          <p>
            simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free
          </p>
        </div>
        <div className="bookapp">
          <a href="#speciality">
            Book appointment{" "}
            <img
              src={assets.arrow_icon}
              alt=""
              style={{ marginLeft: "0.5rem", width: "0.75rem" }}
            />
          </a>
        </div>
      </div>

      {/*-------------------Right side------------------ */}
      <div style={{ paddingTop: "60px" }}>
        <img
          src={assets.header_img}
          alt=""
          style={{
            width: "100%",

            bottom: "0",
            borderRadius: "10px",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}

export default Header;
