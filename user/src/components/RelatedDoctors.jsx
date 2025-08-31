import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function RelatedDoctors({ docId, speciality }) {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div>
      <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
        <h1 className="text-3xl font-medium">Related Doctors </h1>
        <p className="sm:w-1/3 text-center text-sm"

        >
          simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free
        </p>
        <div className="w-full topDoctors-card gap-4 pt-5 gap-y-6 px-3 sm:px-0">
          {relDoc.slice(0, 5).map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo(0, 0);
              }}
              key={index}
              style={{ border: "0.5px solid lightblue", borderRadius: "10px" }}
            >
              <img
                src={item.image}
                alt=""
                style={{
                  backgroundColor: "lightblue",
                  width: "100%",
                  borderRadius: "5px 5px 0px 0px",
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
        <button
          onClick={() => {
            navigate("/doctors");
            window.scrollTo(0, 0);
          }}
          className="btn"
        >
          More
        </button>
      </div>
    </div>
  );
}

export default RelatedDoctors;
