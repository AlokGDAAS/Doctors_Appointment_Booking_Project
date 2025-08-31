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
          {/* ----------------- doctors detail ------------------ */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <img
                src={docInfo.image}
                alt=""
                style={{backgroundColor: "var(--primary)"}}
                className="w-full sm:max-w-72 rounded-lg"/>
            </div>
           {/* -----------------doc info : Name , degree, experience------------------ */}
            <div
            className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sn:mx-0 mt-[-80px] sm:mt-0 "
            >
              
              <p
                className="flex items-center gap-2 text-2xl font-medium text-gray-900"
              >
                {docInfo.name}
                <img src={assets.verified_icon} className="w-5" />
              </p>
              <div
               className="flex items-center gap-2 text-sm mt-1 text-gray-600"
              >
                <p>
                  {docInfo.degree} - {docInfo.speciality}
                </p>
                <button
                  className="py-0.5 px-2 border text-xs rounded-full"
                >
                  {docInfo.experience}
                </button>
              </div>
              {/* -----------------doctor about------------------ */}
              <div>
                <p
                   className="flex items-center gap-1  font-medium text-gray-900 mt-3"
                >
                  About{" "}
                  <img
                    src={assets.info_icon}
                    style={{ padding: "0rem 0.5rem" }}
                  />
                </p>
                <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
              </div>
              
              <p className="text-gray-500 font-medium mt-4">
                Appointment fee:{" "}
                <span className="text-gray-600">
                  {currencySymbol}
                  {docInfo.fees}
                </span>
              </p>
            </div>
          </div>
      
        {/*----------Booking slots -------------*/}

        <div
          className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700"
        >
          <p>Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots.map((daySlots, index) => (
                <div key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex ===index ? `bg-indigo-500 text-white`:`border border-gray-200` }`}
                >
                  <p>
                    {daySlots[0] && daysOfWeek[daySlots[0].dateTime.getDay()]}
                  </p>
                  <p>{daySlots[0] && daySlots[0].dateTime.getDate()}</p>
                </div>
              ))}
          </div>
          <div
             className="flex items-center gap-3 w-full overflow-x-scroll mt-4"
          >
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex flex-shrink-0 px-5 py-2 rounded-full cursor-pointer  ${item.time === slotTime ? `bg-indigo-500 text-white`: `text-gray-400 border border-gray-300`}`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
        <div>
          <button
            className="text-sm text-white font-light px-14 py-3 rounded-full my-6"
            style={{backgroundColor:"var(--primary)"}}
            onClick={bookAppointment}
          >
            Book appointment
          </button>
        </div>
          
        </div>

        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
}

export default Appointment;
