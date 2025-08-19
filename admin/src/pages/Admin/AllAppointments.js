import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets_admin/assets'


function AllAppointments() {

  const {atoken, appointments , getAllAppointments,cancelAppointment} = useContext(AdminContext)

  const {ageCalculator,slotDateFormat,currency} = useContext(AppContext)



  useEffect(()=>{
    if(atoken){
      getAllAppointments()
    }
  },[atoken])


  return (
    <div style={{width:"100%", maxWidth:"72rem", margin:"1.25rem"}}>
        <p style={{marginBottom:"0.75rem", fontWeight:"500", fontSize:"18px"}}>All Appointments</p>

        <div style={{background:"white",borderRadius:"10px",maxHeight:"80hvh", minHeight:"60vh", overflow:"auto"}}>
          <div style={{display:"grid", gridTemplateColumns:"0.5fr 3fr 1fr 3fr 3fr 1fr 1fr", padding:"0.75rem 2rem" ,textAlign:"start"}}>
            <p>#</p>
            <p>Patient</p>
            <p>Age</p>
            <p>Date & Time</p>
            <p>Doctor</p>
            <p>Fees</p>
            <p>Actions</p>
          </div>
          {appointments.map((item,index)=>(
            <div key={index} className='AllAppointments-apponitments-item'
                 style={{display:"grid", gridTemplateColumns:"0.5fr 3fr 1fr 3fr 3fr 1fr 1fr",                        
                         padding:"0.75rem 1.5rem", 
                         borderBottom:"0.5px solid grey"}}>
              <p>{index +1}</p>
              <div style={{display:"flex", alignItems:"center", gap:"0.5rem"}}>
                <img src={item.userData.image} alt='' style={{width:"2rem", borderRadius:"50%"}}/><p>{item.userData.name}</p>
              </div>
              <p>{ageCalculator(item.userData.dob)}</p>
              <p>{slotDateFormat(item.slotDate)} , {item.slotTime}</p>
              <div style={{display:"flex", alignItems:"center", gap:"0.5rem"}}>
                <img src={item.docData.image} alt='' style={{width:"2rem", borderRadius:"50%", backgroundColor:"rgba(191, 209, 209, 0.46)"}}/><p>{item.docData.name}</p>
              </div> 
              <p>{currency} {item.amount}</p>  
              {item.cancelled 
              ?<p style={{fontWeight:"500", color:"rgba(169, 56, 8, 0.8)"}}>Cancelled</p>
              :item.completed ?<p style={{fontWeight:"500", color:"rgba(191, 209, 209, 0.46)"}}>Completed</p>  
              :<img onClick={()=>cancelAppointment(item._id)} src={assets.cancel_icon} alt=''/> }    
                    

            </div>
          ))}
        </div>
    </div>
  )
}

export default AllAppointments