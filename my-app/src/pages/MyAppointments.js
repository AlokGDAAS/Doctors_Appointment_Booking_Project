import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'


function MyAppointments() {
  const { backendUrl, token ,getAllDoctorsData } = useContext(AppContext);

  const [appointments , setAppointments] = useState([])
  const months = [
                  "","Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ];

  const navigate = useNavigate()              

  const slotDateFormat = (slotDate)=>{
   const dateArray = slotDate.split('_')
   return dateArray[0]+" "+months[Number(dateArray[1])]+" "+dateArray[2]
  }

  const getUserAppointments = async()=>{

    try {
      const {data} = await axios.get(backendUrl+'/api/user/appointments',{headers:{token}})

      if(data.success){
        setAppointments(data.appointments.reverse())
        console.log("appointment data : ",data.appointments)
      }else{
        toast.error(data.message || "Failed to load appointments");
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  const cancelAppointment = async (appointmentId)=>{
    console.log(appointmentId)
    try {
       const {data} = await axios.post(backendUrl+'/api/user/cancel-appointment', {appointmentId},{headers:{token}})

       if(data.success){
        toast.success(data.message)
        getUserAppointments()
        getAllDoctorsData()
       }else{
        toast.error(data.message)
       }

    } catch (error) {
      console.log(error)
      toast.error(error.message)      
    }

  }
      const initPay =(order)=>{

        const options = {
          key:'rzp_test_R689X6gO1O852P',
          amount:order.amount,
          currency:order.currency,
          name:'Appointment Payment',
          description:'Appointment payment',
          order_id:order.id,
          receipt:order.receipt,
          handler:async(response)=>{
            console.log(response)

            try {
              const {data} = await axios.post(backendUrl +'/api/user/verifyrazorpay',response,{headers:{token}})
              if(data.success){
                getUserAppointments()
                navigate('/my-appointments')
              }

            } catch (error) {
              console.log(error)
              toast.error(error.message)
              
            }
          }
        }

        const rzp1 = new window.Razorpay(options);

        rzp1.open()

      }

      const appointmentRazorpay = async (appointmentId)=>{
        
         try {
          const {data} = await axios.post(backendUrl+'/api/user/payment-razorpay', {appointmentId},{headers:{token}})
          console.log(data.order)
            if(data.success){

                initPay(data.order)
            }else{
              toast.error(data.message)
            }
         } catch (error) {
                console.log(error)
                toast.error(error.message)  
          
         }

    }

  useEffect(()=>{
    if(token){
      getUserAppointments()
    }
  },[token])

  return (
    <div>
      <p
        style={{
          paddingBottom: "0.75rem",
          marginTop: "3rem",
          fontWeight: "500",
          borderBottom: "1px solid grey",
        }}
      >
        My Appointments
      </p>
      <div>
        {appointments.map((item, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr 2fr 1fr",
              gap: "1rem",
              padding: "0.5rem 0rem",
              borderBottom: "1px solid gray",
            }}
          >
            <div>
              <img
                src={item.docData.image}
                alt=""
                style={{
                  width: "100%",
                  backgroundColor: "rgb(174, 186, 203)",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <p style={{ fontWeight: "600" }}>{item.docData.name}</p>
              <p>{item.docData.speciality}</p>
              <p style={{ fontWeight: "500" }}>Address:</p>
              <p>{item.docData.address.line1}</p>
              <p>{item.docData.address.line2}</p>
              <p style={{ fontSize: "14px" }}><span style={{ fontWeight: "500",fontSize:"16px" }}>Date & Time : </span>{slotDateFormat(item.slotDate)} | {item.slotTime}</p>
            </div>
            <div></div>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.5rem", justifyContent:"end" }}>

             {!item.cancelled && item.payment && !item.isCompleted && <button className="myappointment-btn-pay">Paid</button>}
              {!item.cancelled && !item.payment && !item.isCompleted && <button className="myappointment-btn-pay" onClick={()=>appointmentRazorpay(item._id)}>Pay Online</button> }

              {!item.cancelled && !item.isCompleted &&  <button className="myappointment-btn-cancel" onClick={()=>cancelAppointment(item._id)}>
                Cancel Apponitment
              </button>}
              {item.cancelled && !item.isCompleted && <button className="myappointment-btn-cancel">Appointment cancelled</button>}
              {item.isCompleted && <button className="myappointment-btn-pay">Appointment completed</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAppointments;
