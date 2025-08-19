import React, { useContext } from "react";
import { assets } from "../assets/assets_admin/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";

function NavBar() {
  const { atoken, setAtoken } = useContext(AdminContext);
  const { dtoken, setDtoken } = useContext(DoctorContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    atoken && setAtoken("");
    atoken && localStorage.removeItem("atoken");
    dtoken && setDtoken("");
    dtoken && localStorage.removeItem("dtoken");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.75rem 1rem",
        borderBottom: "0.5px solid grey",
        width: "",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <img
          src={assets.admin_logo}
          style={{ width: "9rem", cursor: "pointer" }}
        />
        <p
          style={{
            border: "1.5px solid grey",
            padding: "0.125rem 0.625rem",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          {atoken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={logout}
        style={{
          backgroundColor: "var(--primary)",
          color: "white",
          padding: "0.5rem 2.5rem",
          borderRadius: "20px",
          border: "none",
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default NavBar;
