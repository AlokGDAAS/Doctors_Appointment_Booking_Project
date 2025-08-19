import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

function SpecialityMenu() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        color: "rgb(41, 33, 33)",
        padding: "4rem 0rem",
      }}
      id="speciality"
    >
      <h1>Find by Speciality</h1>
      <p
        style={{
          textAlign: "center",
          width: "35%",
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
        }}
      >
        simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          paddingTop: "1.25rem",
          overflow: "auto",
          width: "full",
        }}
      >
        {specialityData.map((item, index) => (
          <Link
            // onClick={()=>scrollTo(0,0)}
            style={{ textDecoration: "none" }}
            key={index}
            to={`/doctors/${item.speciality}`}
            className="specialitylink"
          >
            <img
              src={item.image}
              alt=""
              style={{ width: "4rem", marginBottom: "0.5rem" }}
            />
            <p style={{ textDecoration: "none" }}>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SpecialityMenu;
