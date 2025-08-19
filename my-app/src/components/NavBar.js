import React, { useCallback, useContext, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function NavBar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const {token,setToken,userData} = useContext(AppContext)

  const logout =()=>{
    setToken(false)
    localStorage.removeItem('token')
    navigate('/')
  }
 

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 0rem",
        borderBottom: "1px solid skyblue",
        marginBottom: "1rem",
      }}
    >
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        style={{ cursor: "pointer" }}
      />
      <div style={{ display: "flex", fontWeight: "600", gap: "30px" }}>
        <NavLink to="/" className="navlink">
          <div>Home</div>
          <hr />
        </NavLink>
        <NavLink to="doctors" className="navlink">
          <div>All Doctors</div>
          <hr />
        </NavLink>
        <NavLink to="about" className="navlink">
          <div>About</div>
          <hr />
        </NavLink>
        <NavLink to="contact" className="navlink">
          <div>Contact</div>
          <hr />
        </NavLink>
      </div>
      <div style={{ display: "flex", alignItems: "center" }} className="parent">
        {token && userData ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <img
              style={{ width: "2rem", borderRadius: "50px" }}
              src={userData.image}
              alt=""
            />
            <img
              style={{ width: "0.7rem", borderRadius: "50px" }}
              src={assets.dropdown_icon}
              alt=""
            />
            <div className="login">
              <div>
                <p onClick={() => navigate("/myprofile")}>My Profile</p>
                <p onClick={() => navigate("/my-appointments")}>
                  My Appointments
                </p>
                <p onClick={() => logout()}>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="btn"
          >
            Creat Account
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
