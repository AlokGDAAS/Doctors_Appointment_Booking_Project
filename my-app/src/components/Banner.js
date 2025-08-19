import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "var(--primary)",
        borderRadius: "10px",
        padding: "4rem 3.5rem",
        margin: "10rem 0rem",
        position: "relative",
      }}
    >
      {/*-------------Left side---------------*/}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "4rem 0rem",
        }}
      >
        <div style={{ color: "white", fontSize: "30px", fontWeight: "bolder" }}>
          <p>Book Appointmet</p>
          <p style={{ marginTop: "1rem" }}>With 100+ trusted Doctors</p>
        </div>
        <div>
          <button
            className="btn"
            style={{
              marginTop: "1rem",
              backgroundColor: "white",
              color: "var(--primary)",
            }}
            onClick={() => {
              navigate("/login");
              window.scrollTo(0, 0);
            }}
          >
            Create Account
          </button>
        </div>
      </div>
      {/*-------------Right side---------------*/}
      <div
        style={{
          width: "50%",
          position: "absolute",
          bottom: "0px",
          right: "-50px",
        }}
      >
        <img style={{ width: "70%" }} src={assets.appointment_img} />
      </div>
    </div>
  );
}

export default Banner;
