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
    <div className="">
      <p>Browse through the doctors speciality</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600 w-1/5">
          <p className="w-[94vw] sm:w-auto  pl-3 py-1.5 pr-16  border border-gray-300 rounded transition-all cursor-pointer "
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

          <p className="w-[94vw] sm:w-auto  pl-3 py-1.5 pr-16  border border-gray-300 rounded transition-all cursor-pointer "
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

          <p className="w-[94vw] sm:w-auto  pl-3 py-1.5 pr-16  border border-gray-300 rounded transition-all cursor-pointer "
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

          <p className="w-[94vw] sm:w-auto  pl-3 py-1.5 pr-16  border border-gray-300 rounded transition-all cursor-pointer "
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

          <p className="w-[94vw] sm:w-auto  pl-3 py-1.5 pr-16  border border-gray-300 rounded transition-all cursor-pointer "
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

          <p className="w-[94vw] sm:w-auto  pl-3 py-1.5 pr-16  border border-gray-300 rounded transition-all cursor-pointer "
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
        <div className="topDoctors-card w-full gap-4 gap-y-6">
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
