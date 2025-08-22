import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from 'axios'
import  {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";

function Login() {

  const {backendUrl , token , setToken} = useContext(AppContext)
  const navigate = useNavigate()

  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(backendUrl)
    try {

      if(state === "Sign Up"){

        const {data} = await axios.post(backendUrl+'/api/user/register',{name,password,email})
        if(data.success){
          localStorage.setItem('token',data.token)
          console.log(data)
          setToken(data.token)
        }else{
          toast.error(data.message)
        }
       


      }else{
        
        const {data} = await axios.post(backendUrl+'/api/user/login',{password,email})
        if(data.success){
          localStorage.setItem('token',data.token)
          setToken(data.token)
        }else{
          toast.error(data.message)
        }

      }
      
    } catch (error) {
      toast.error(error.message)
      console.log("error data")
      
    }
  };

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ minHeight: "80vh", display: "flex" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            alignItems: "start",
            margin: "auto",
            padding: "3rem",
            minWidth: "380px",
            //  border:"0.5px solid grey",
            borderRadius: "10px",
            color: "zinc",
            boxShadow: "0px 0px  20px rgb(137, 125, 125)",
            fontSize: "14px",
          }}
        >
          <p style={{ fontSize: "24px", fontWeight: "500" }}>
            {state == "Sign Up" ? "Create Account" : "Login"}
          </p>
          <p>
            Please {state == "Sign Up" ? "sign up" : "log in"} to book
            appointment
          </p>
          {state === "Sign Up" && (
            <div style={{ width: "100%" }}>
              <p>Full Name</p>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                style={{
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                  width: "100%",
                  borderRadius: "5px",
                  border: "1px solid grey",
                }}
              />
            </div>
          )}

          <div style={{ width: "100%" }}>
            <p>Email</p>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              style={{
                padding: "0.5rem",
                marginTop: "0.25rem",
                width: "100%",
                borderRadius: "5px",
                border: "1px solid grey",
              }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              style={{
                padding: "0.5rem",
                marginTop: "0.25rem",
                width: "100%",
                borderRadius: "5px",
                border: "1px solid grey",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "0.75rem",
              marginTop: "1.5em",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid grey",
              backgroundColor: "var(--primary)",
              color: "white",
            }}
          >
            {state == "Sign Up" ? "Create Account" : "Login"}
          </button>
          <div>
            {state === "Sign Up" ? (
              <p>
                Already have an account ?{" "}
                <span
                  onClick={() => setState("Login")}
                  style={{
                    color: "var(--primary)",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Login here
                </span>
              </p>
            ) : (
              <p>
                Create a new account ?{" "}
                <span
                  onClick={() => setState("Sign Up")}
                  style={{
                    color: "var(--primary)",
                    textDecoration: "underline",
                    cursor: "pointer",
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
