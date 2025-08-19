import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets_admin/assets";
import { AdminContext } from "../../context/AdminContext";
import {toast} from 'react-toastify'
import axios from 'axios'

function AddDoctor() {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General Physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const {backendUrl, atoken} = useContext(AdminContext)

  const handleSubmit = async (e)=>{
     e.preventDefault()
     try {
      if(!docImg){
        return toast.error("Image not selected")
      }

      const formData = new FormData()

      formData.append('image',docImg)
      formData.append('name',name)
      formData.append('email',email)
      formData.append('password',password)
      formData.append('experience',experience)
      formData.append('about',about)
      formData.append('speciality',speciality)
      formData.append('degree',degree)
      formData.append('fees',Number(fees))
      formData.append('address',JSON.stringify({line1:address1,line2:address2}))

      formData.forEach((value,key)=>{
        console.log(`${key} : ${value}`)
      })

      const {data} = await axios.post(backendUrl+'/api/admin/add-doctor',formData,{headers:{atoken}})
      if(data.success){
        toast.success(data.message)       
        setDocImg(false)
        setName('')
        setPassword('')        
        setAbout('')        
        setDegree('')
        setFees('')
        setAddress1('')
        setAddress2('')
      }else{
        toast.error(data.message)

      }
      
     } catch (error) {
       toast.error(error.message)
       console.log(error)
      
     }
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "1.25rem", width: "100%" }}>
      <p style={{ marginBottom: "0.75rem", fontWeight: "500" }}>Add Doctor</p>

      <div
        style={{
          backgroundColor: "white",
          padding: "2rem 2rem",
          border: "1px solid grey",
          borderRadius: "10px",
          width: "100%",
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <label htmlFor="doc-img">
            <img
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              style={{
                width: "4rem",
                backgroundColor: "rgba(172, 190, 188, 1)",
                borderRadius: "50px",
                cursor: "pointer",
              }}
              alt=""
            />
          </label>
          <input
            type="file"
            id="doc-img"
            hidden
            onChange={(e) => setDocImg(e.target.files[0])}
          />
          <p>
            Upload doctor
            <br />
            picture
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "start", gap: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <p>Doctor Name</p>
              <input
                type="text"
                placeholder="Name"
                required
                onChange={(e)=>setName(e.target.value)}
                value={name}
                style={{
                  padding: "0.5rem 0.75rem",
                  borderRadius: "5px",
                  border: "1px solid grey",
                  marginTop: "0.5rem",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <p>Doctor Email</p>
              <input
                type="email"
                placeholder="Email"
                style={{
                  padding: "0.5rem 0.75rem",
                  borderRadius: "5px",
                  border: "1px solid grey",
                  marginTop: "0.5rem",
                }}
                required
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <p>Doctor Password</p>
              <input
                type="password"
                placeholder="Password"
                style={{
                  padding: "0.5rem 0.75rem",
                  borderRadius: "5px",
                  border: "1px solid grey",
                  marginTop: "0.5rem",
                }}
                required
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <p>Experience</p>
              <select
                name=""
                id=""
                style={{
                  padding: "0.5rem 0.75rem",
                  borderRadius: "5px",
                  border: "1px solid grey",
                  marginTop: "0.5rem",
                }}
                onChange={(e)=>setExperience(e.target.value)}
                value={experience}
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <p>Fees</p>
              <input
                type="number"
                placeholder="fees"
                style={{
                  padding: "0.5rem 0.75rem",
                  borderRadius: "5px",
                  border: "1px solid grey",
                  marginTop: "0.5rem",
                }}
                required
                onChange={(e)=>setFees(e.target.value)}
                value={fees}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <p>Speciality</p>
              <select
                name=""
                id=""
                style={{
                  padding: "0.5rem 0.75rem",
                  borderRadius: "5px",
                  border: "1px solid grey",
                  marginTop: "0.5rem",
                }}
                onChange={(e)=>setSpeciality(e.target.value)}
                value={speciality}
              >
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <p>Education</p>
              <input
                type="text"
                placeholder="Education"
                style={{
                  padding: "0.5rem 0.75rem",
                  borderRadius: "5px",
                  border: "1px solid grey",
                  marginTop: "0.5rem",
                }}
                required
                onChange={(e)=>setDegree(e.target.value)}
                value={degree}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <p>Address</p>
              <input
                type="text"
                placeholder="address 1"
                style={{
                  padding: "0.5rem 0.75rem",
                  borderRadius: "5px",
                  border: "1px solid grey",
                  marginTop: "0.5rem",
                }}
                required
                onChange={(e)=>setAddress1(e.target.value)}
                value={address1}
              />
              <input
                type="text"
                placeholder="address 2"
                style={{
                  padding: "0.5rem 0.75rem",
                  borderRadius: "5px",
                  border: "1px solid grey",
                  marginTop: "0.5rem",
                }}
                required
                onChange={(e)=>setAddress2(e.target.value)}
                value={address2}
              />
            </div>
          </div>
        </div>
        <div>
          <p style={{ margin: "1rem 0 0.5rem 0" }}>About Doctor</p>
          <textarea
            placeholder="write about doctor"
            rows={5}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              border: "1px solid grey",
              width: "100%",
            }}
            required
            onChange={(e)=>setAbout(e.target.value)}
            value={about}
          />
        </div>

        <button
          style={{
            backgroundColor: "var(--primary)",
            padding: "0.75rem 2.5rem",
            marginTop: "1rem",
            borderRadius: "30px",
            color: "white",
          }}
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
}

export default AddDoctor;
