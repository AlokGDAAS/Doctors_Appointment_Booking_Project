import React, { useContext, useState } from "react";
import { assets } from "../assets/assets_admin//assets";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctorContext } from "../context/DoctorContext";


function Login() {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAtoken, backendUrl } = useContext(AdminContext);
  const { setDtoken } = useContext(DoctorContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
 

    try {
      if (state == "Admin") {
        const { data } = await axios.post(backendUrl+"/api/admin/login",{
          email,
          password
        });
        if (data.success) {
          localStorage.setItem('atoken',data.token)
          setAtoken(data.token);
          console.log(data.token)
        }else{
            toast.error(data.message)
        }
        
      } else {

     const {data}=await axios.post(backendUrl +'/api/doctor/login-doctor',{email,password})
        if (data.success) {
          localStorage.setItem('dtoken',data.token)
          setDtoken(data.token);
        }else{
            toast.error(data.message)
        }     
        
      }
    } catch (error) {
      console.log(error)
    }
   
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          minHeight: "80vh",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            // up,  right,down,left
            padding: "1rem 3rem 2rem 2rem",
            display: "flex",
            flexDirection: "column",
            minWidth: "340px",
            border: "0.5px solid grey",
            borderRadius: "10px",
            boxShadow: "0 0 10px grey",
            alignItems: "start",
            gap: "1rem",
          }}
        >
          <label
            style={{
              fontSize: "24px",
              fontWeight: "600",
              margin: "auto",
              color: "var(--primary)",
            }}
          >
            <span>{state}</span> Login
          </label>
          <div style={{ width: "100%" }}>
            <label>Email</label>
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              style={{
                borderRadius: "5px",
                padding: "0.5rem",
                width: "100%",
                marginTop: "0.25rem",
                border: "0.5px solid grey",
              }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <label style={{ backgroundColor: "" }}>Password</label>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              style={{
                borderRadius: "5px",
                padding: "0.5rem",
                width: "100%",
                marginTop: "0.25rem",
                border: "0.5px solid grey",
              }}
            />
          </div>
          <div
            style={{
              border: "none",
              width: "100%",
              background: "var(--primary)",
              padding: "0.5rem",
              borderRadius: "10px",
            }}
          >
            <button
              style={{
                border: "none",
                background: "var(--primary)",
                width: "100%",
                color: "white",
                fontWeight: "500",
              }}
              type="submit"
            >
              Login
            </button>
          </div>
          <div style={{ width: "100%", fontSize: "14px", fontWeight: "500" }}>
            {state == "Admin" ? (
              <p>
                Doctor Login{" "}
                <span
                  onClick={() => setState("Doctor")}
                  style={{
                    color: "var(--primary)",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Click here
                </span>
              </p>
            ) : (
              <p>
                Admin Login{" "}
                <span
                  onClick={() => setState("Admin")}
                  style={{
                    color: "var(--primary)",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Click here
                </span>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
