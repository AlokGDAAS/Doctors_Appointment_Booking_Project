import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets_admin/assets";
import { DoctorContext } from "../context/DoctorContext";

function SideBar() {
  const { atoken } = useContext(AdminContext);
  const { dtoken } = useContext(DoctorContext);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f2ffffff", fontSize:"14px" }}>
      {atoken && (
        <ul style={{marginTop:"1.25rem",padding:"0px"}}>
          <NavLink
            to={"/admin-dashboard"}
                  style={({ isActive}) => ({
                  backgroundColor: isActive ? "#f3f9f8ff" : "",
                  borderRight: isActive ? "4px solid var(--primary)" : "",
                  display:"flex",
                  alignItems:"center",
                  gap:"0.75",
                  padding:"0.9rem 3rem",
                  cursor:"pointer", 
              
              

              
            })}
          >
            <img src={assets.home_icon} alt="" style={{marginRight:"1rem" , width:"20px"}}/>
            <p>Dashboard</p>
          </NavLink>

          <NavLink to={"/all-appointments"}
                  style={({ isActive}) => ({
                  backgroundColor: isActive ? "#aebdbaff" : "",
                  borderRight: isActive ? "4px solid var(--primary)" : "",
                  display:"flex",
                  alignItems:"center",
                  gap:"0.75",
                  padding:"0.9rem 3rem",
                  cursor:"pointer",              
            })}>
            <img src={assets.appointment_icon} alt="" style={{marginRight:"1rem" , width:"20px"}} />
            <p>Appointments</p>
          </NavLink>

          <NavLink to={"/add-doctor"}
                  style={({ isActive}) => ({
                  backgroundColor: isActive ? "#aebdbaff" : "",
                  borderRight: isActive ? "4px solid var(--primary)" : "",
                  display:"flex",
                  alignItems:"center",
                  gap:"0.75",
                  padding:"0.9rem 3rem",
                  cursor:"pointer",             
            })}>
            <img src={assets.add_icon} alt="" style={{marginRight:"1rem" , width:"20px"}} />
            <p>AddDoctor</p>
          </NavLink>

          <NavLink to={"/doctors-list"}
                  style={({ isActive}) => ({
                  backgroundColor: isActive ? "#aebdbaff" : "",
                  borderRight: isActive ? "4px solid var(--primary)" : "",
                  display:"flex",
                  alignItems:"center",
                  gap:"0.75",
                  padding:"0.9rem 3rem",
                  cursor:"pointer",              
            })}>
            <img src={assets.people_icon} alt="" style={{marginRight:"1rem" , width:"20px"}} />
            <p>Doctors List</p>
          </NavLink>
        </ul>
      )}

      {dtoken && (
        <ul style={{marginTop:"1.25rem",padding:"0px"}}>
          <NavLink
            to={"/doctor-dashboard"}
                  style={({ isActive}) => ({
                  backgroundColor: isActive ? "#f3f9f8ff" : "",
                  borderRight: isActive ? "4px solid var(--primary)" : "",
                  display:"flex",
                  alignItems:"center",
                  gap:"0.75",
                  padding:"0.9rem 3rem",
                  cursor:"pointer", 
              
              

              
            })}
          >
            <img src={assets.home_icon} alt="" style={{marginRight:"1rem" , width:"20px"}}/>
            <p>Dashboard</p>
          </NavLink>

          <NavLink to={"/doctor-appointments"}
                  style={({ isActive}) => ({
                  backgroundColor: isActive ? "#aebdbaff" : "",
                  borderRight: isActive ? "4px solid var(--primary)" : "",
                  display:"flex",
                  alignItems:"center",
                  gap:"0.75",
                  padding:"0.9rem 3rem",
                  cursor:"pointer",              
            })}>
            <img src={assets.appointment_icon} alt="" style={{marginRight:"1rem" , width:"20px"}} />
            <p>Appointments</p>
          </NavLink>


          <NavLink to={"/doctor-profile"}
                  style={({ isActive}) => ({
                  backgroundColor: isActive ? "#aebdbaff" : "",
                  borderRight: isActive ? "4px solid var(--primary)" : "",
                  display:"flex",
                  alignItems:"center",
                  gap:"0.75",
                  padding:"0.9rem 3rem",
                  cursor:"pointer",              
            })}>
            <img src={assets.people_icon} alt="" style={{marginRight:"1rem" , width:"20px"}} />
            <p>Profile</p>
          </NavLink>
        </ul>
      )}      
    </div>
  );
}

export default SideBar;
