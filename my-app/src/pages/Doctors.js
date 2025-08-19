import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Doctors() {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="doctors">
      <p>Browse through the doctors speciality</p>
      <div
        style={{
          display: "flex",
          marginTop: "1.25rem",
          gap: "1.25rem",
          alignItems: "start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            paddingTop: "1.25rem",
          }}
        >
          <p
            onClick={() =>
              speciality === "General Physician"
                ? navigate("/doctors")
                : navigate("/doctors/General Physician")
            }
            style={
              speciality === "General Physician"
                ? { backgroundColor: "rgb(226, 214, 235)" }
                : { backgroundColor: "white" }
            }
          >
            General Physician
          </p>

          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            style={
              speciality === "Gynecologist"
                ? { backgroundColor: "rgb(226, 214, 235)" }
                : { backgroundColor: "white" }
            }
          >
            Gynecologist
          </p>

          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            style={
              speciality === "Dermatologist"
                ? { backgroundColor: "rgb(226, 214, 235)" }
                : { backgroundColor: "white" }
            }
          >
            Dermatologist
          </p>

          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            style={
              speciality === "Pediatricians"
                ? { backgroundColor: "rgb(226, 214, 235)" }
                : { backgroundColor: "white" }
            }
          >
            Pediatricians
          </p>

          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            style={
              speciality === "Neurologist"
                ? { backgroundColor: "rgb(226, 214, 235)" }
                : { backgroundColor: "white" }
            }
          >
            Neurologist
          </p>

          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            style={
              speciality === "Gastroenterologist"
                ? { backgroundColor: "rgb(226, 214, 235)" }
                : { backgroundColor: "white" }
            }
          >
            Gastroenterologist
          </p>
        </div>
        <div className="topdoctorscard">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              style={{ border: "0.5px solid lightblue", borderRadius: "10px" }}
            >
              <img
                src={item.image}
                alt=""
                style={{
                  backgroundColor: "lightblue",
                  borderRadius: "5px 5px 0px 0px",
                  width: "100%",
                }}
              />
              <div
                style={{
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    textAlign: "center",
                    color: "green",
                  }}
                >
          
                {
                  item.available 
                  ?(<div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
                      <p style={{width: "0.5rem",height: "0.5rem",borderRadius: "50%", backgroundColor: "green",}}></p>{"   "}<p>Available</p>
                  </div>)
                  :(<div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
                    <p style={{width: "0.5rem",height: "0.5rem",borderRadius: "50%", backgroundColor: "red",}}></p>{"   "}<p>Not Available</p>
                  </div>)
                }

             
                </div>
                <p
                  style={{
                    color: "rgb(51, 51, 51)",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{ color: "grey", fontSize: "12px", fontWeight: "600" }}
                >
                  {item.speciality}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
