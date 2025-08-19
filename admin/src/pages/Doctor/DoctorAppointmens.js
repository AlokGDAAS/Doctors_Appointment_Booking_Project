import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets_admin/assets'

const DoctorAppointmens = () => {

  const {dtoken , appointments , getAppointments,completeAppointment,cancelAppointment} = useContext(DoctorContext)
  const {ageCalculator,slotDateFormat,currency} = useContext(AppContext)

  useEffect(()=>{
    if(dtoken){
      getAppointments()
    }
  },[dtoken])

  return (
    <div style={{width:"100%", fontSize:"18px", maxWidth:"72rem",padding:"1rem"}}>
        <p style={{fontSize:"18px", marginBottom:"0.75rem", fontWeight:"500"}}>All Appointments</p>
        <div style={{backgroundColor:"white",borderRadius:"10px",fontSize:"14px" , maxHeight:"80vh",minHeight:"50vh", overflow:"auto"}}>

          <div style={{display:"grid",gridTemplateColumns:"0.5fr 2fr 1fr 1fr 3fr 1fr 1fr",gap:"0.25rem",padding:"0.75rem 1.5rem", borderBottom:"0.5px sloid gray"}}>
            <p>#</p>
            <p>Patient</p>
            <p>Payment</p>
            <p>Age</p>
            <p>Date & Time</p>
            <p>Fees</p>
            <p>Action</p>
          </div>

          {
            appointments.reverse().map((item,index)=>(
              <div key={index} className='AllAppointments-apponitments-item'
                 style={{display:"grid", gridTemplateColumns:"0.5fr 2fr 1fr 1fr 3fr 1fr 1fr",                        
                         padding:"0.75rem 1.5rem"}}> 
                <p style={{display:"flex", alignItems:"center"}}>{index+1}</p>
                <div style={{display:"flex", alignItems:"center", gap:"0.5rem"}}>
                  <img src={item.userData.image} alt='' style={{width:"2rem", borderRadius:"50%"}}/><p>{item.userData.name}</p>
                </div>
                <div style={{display:"flex", alignItems:"center"}}>
                  <div style={{fontSize:"12px" , color:"var(--primary",padding:"0rem 0.5rem"}}>
                    <p style={{border:"0.5px solid var(--primary)",padding:"0rem 0.5rem" ,borderRadius:"10px"}}>
                       {item.payment ? 'Online' :'Cash'}
                    </p>                    
                    </div>
                </div>
                <p style={{display:"flex", alignItems:"center"}}>{ageCalculator(item.userData.dob)}</p>
              <p style={{display:"flex", alignItems:"center"}}>{slotDateFormat(item.slotDate)} , {item.slotTime}</p>
              <p style={{display:"flex", alignItems:"center"}}>{currency} {item.amount}</p>
              
                {
                  item.cancelled
                  ?<p style={{display:"flex", alignItems:"center",fontSize:"12px",color:"rgb(252, 5, 5)"}}>Cancelled</p>
                  :item.isCompleted
                    ?<p style={{display:"flex", alignItems:"center",fontSize:"12px",color:"rgb(2, 134, 2)"}}>Completed</p>
                      :<div style={{display:"flex", alignItems:"center"}}>
                       <img onClick={()=>cancelAppointment(item._id)} src={assets.cancel_icon} alt=''style={{width:"2.5rem", cursor:"pointer"}}/>
                       <img onClick={()=>completeAppointment(item._id)} src={assets.tick_icon} alt='' style={{width:"2.5rem", cursor:"pointer"}}/>
                       </div>
                }


               
              </div>
            ))
          }

        </div>
    </div>
  )
}

export default DoctorAppointmens