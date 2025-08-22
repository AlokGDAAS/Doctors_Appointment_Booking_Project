import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import { toast } from "react-toastify";
import axios from "axios";

function Appointment() {
  const { docId } = useParams();
  const { doctors, currencySymbol ,backendUrl,token,getAllDoctorsData} = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const navigate = useNavigate()

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id == docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    //getting curent date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting dates with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        let day = currentDate.getDate()
        let month = currentDate.getMonth() +1
        let year = currentDate.getFullYear()

        const slotDate = day +"_"+ month+"_"+year
        const slotTime = formattedTime

        const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true
        // add slot to array
        if(isSlotAvailable){
            timeSlots.push({
              dateTime: new Date(currentDate),
              time: formattedTime,
            });
        }


        // Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  const bookAppointment = async()=>{
    if(!token){
      toast.warn('Login to book appointment')
      return navigate('/login')
    }

    try {
      const date =docSlots[slotIndex][0].dateTime

      let day = date.getDate()
      let month = date.getMonth()+1
      let year = date.getFullYear()
       
      const slotDate = day +"_"+ month+"_"+year
      console.log(docId)
      console.log(slotDate)
      console.log(slotTime)
      console.log(token)
      const {data} = await axios.post(backendUrl +'/api/user/book-appointment', {docId,slotDate,slotTime},{headers:{token}})

      if (data.success){
        toast.success(data.message)
        getAllDoctorsData()
        navigate('/my-appointments')
 
      }else{
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }
  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if(docInfo){
    getAvailableSlots();
    }
    
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
    console.log("slotIndex ",slotIndex);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        <div style={{ marginBottom: "0.5rem" }}>
          {/* ----------------- doctors detail ------------------ */}
          <div style={{ display: "flex", gap: "1rem", backgroundColor: "" }}>
            <div>
              <img
                src={docInfo.image}
                alt=""
                style={{
                  backgroundColor: "var(--primary)",
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                border: "1px solid grey",
                padding: "1rem 1.75rem",
                borderRadius: "10px",
                margin: "0rem 0.5rem",
                width: "100%",
              }}
            >
              {/* -----------------doc info : Name , degree, experience------------------ */}
              <p
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  fontSize: "24px",
                  alignItems: "center",
                  fontWeight: "500",
                }}
              >
                {docInfo.name}
                <img src={assets.verified_icon} width="3%" />
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  marginTop: "0.25",
                  alignItems: "center",
                }}
              >
                <p>
                  {docInfo.degree} - {docInfo.speciality}
                </p>
                <button
                  style={{
                    padding: "0.125rem 0.5rem",
                    border: "1px solid grey",
                    borderRadius: "10px",
                  }}
                >
                  {docInfo.experience}
                </button>
              </div>
              {/* -----------------doctor about------------------ */}
              <div>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25",
                    fontWeight: "500",
                  }}
                >
                  About{" "}
                  <img
                    src={assets.info_icon}
                    style={{ padding: "0rem 0.5rem" }}
                  />
                </p>
                <p
                  style={{
                    maxWidth: "700px",
                    marginTop: "0.75rem",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  {docInfo.about}
                </p>
              </div>
              <p>
                Appointment fee:{" "}
                <span>
                  {currencySymbol}
                  {docInfo.fees}
                </span>
              </p>
            </div>
          </div>
        </div>
        {/*----------Booking slots -------------*/}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ textAlign: "center" }}>Booking slots</p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
              overflow: "auto",
              width: "100%",
            }}
          >
            {docSlots.length &&
              docSlots.map((daySlots, index) => (
                <div key={index}
                  onClick={() => setSlotIndex(index)}
                  style={
                    slotIndex == index
                      ? {
                          textAlign: "center",
                          padding: "1.5rem 0rem",
                          borderRadius: "40px",
                          backgroundColor: "var(--primary)",
                          cursor: "pointer",
                          fontSize: "14px",
                          color: "white",
                          minWidth: "3.75rem",
                        }
                      : {
                          textAlign: "center",
                          padding: "1.5rem 0rem",
                          borderRadius: "40px",
                          border: "1px solid gray",
                          cursor: "pointer",
                          fontSize: "14px",
                          minWidth: "3.75rem",
                        }
                  }
                >
                  <p>
                    {daySlots[0] && daysOfWeek[daySlots[0].dateTime.getDay()]}
                  </p>
                  <p>{daySlots[0] && daySlots[0].dateTime.getDate()}</p>
                </div>
              ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              width: "50%",
              overflowX: "scroll",
              marginTop: "1rem",
            }}
          >
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  style={
                    item.time == slotTime
                      ? {
                          display: "flex",
                          padding: "0.5rem 0.5rem",
                          cursor: "pointer",
                          borderRadius: "20px",
                          flexShrink: "0",
                          fontSize: "12px",
                          border: "0.5px solid grey",
                          backgroundColor: "var(--primary)",
                          color: "white",
                        }
                      : {
                          display: "flex",
                          padding: "0.5rem 0.5rem",
                          cursor: "pointer",
                          borderRadius: "20px",
                          flexShrink: "0",
                          fontSize: "12px",
                          border: "0.5px solid grey",
                        }
                  }
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
        </div>
        <div>
          <button
            className="btn"
            style={{ marginLeft: "18rem", marginTop: "2rem" }}
            onClick={bookAppointment}
          >
            Book appoinument
          </button>
        </div>
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
}

export default Appointment;
