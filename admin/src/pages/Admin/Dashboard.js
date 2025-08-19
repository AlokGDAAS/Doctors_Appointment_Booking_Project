import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { assets } from '../../assets/assets_admin/assets'
import { AppContext } from '../../context/AppContext'

function Dashboard() {

  const {atoken , getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const {slotDateFormat} = useContext(AppContext)

  useEffect(()=>{
    if(atoken){
      getDashData()
    }
  },[atoken])

  return dashData && (
    <div style={{margin:"1.25rem"}}>

      <div style={{display:"flex", flexWrap:"wrap", gap:"0.75rem"}}>

        <div className='dashboard-box'>
          <img src={assets.doctor_icon} alt='' style={{width:"3.5rem"}}/>
          <div>
            <p style={{fontSize:"20px",fontWeight:"600",}}>{dashData.doctors}</p>
            <p style={{color:"rgba(90, 84, 84, 1)"}}>Doctors</p>
          </div>
        </div>

        <div className='dashboard-box'>
          <img src={assets.appointments_icon} alt=''style={{width:"3.5rem"}}/>
          <div>
            <p style={{fontSize:"20px",fontWeight:"600",}}>{dashData.appointments}</p>
            <p style={{color:"rgba(90, 84, 84, 1)"}}>Appointments</p>
          </div>
        </div>

        <div className='dashboard-box'>
          <img src={assets.patients_icon} alt='' style={{width:"3.5rem"}}/>
          <div>
            <p style={{fontSize:"20px",fontWeight:"600",}}>{dashData.patients}</p>
            <p style={{color:"rgba(90, 84, 84, 1)"}}>Patients</p>
          </div>
        </div>

      </div>
                                                                
      <div style={{backgroundColor:"white", borderRadius:"10px 10px 0px 0px"}}>
        <div style={{display:"flex", alignItems:"center", gap:"0.75rem", padding:"1rem", marginTop:"2.5rem", borderBottom:"0.5px solid gray"}}>
          <img src={assets.list_icon} alt=''/>
          <p style={{fontWeight:"600"}}>Latest bookings</p>
        </div>

        <div style={{paddingTop:"1rem"}}>
           {dashData.latestAppointments.map((item,index)=>(
                 <div key={index}  className='dashboard-dashdata-item'
                      style={{padding:"0.75rem 1.5rem", gap:"0.75rem", display:"grid",gridTemplateColumns:"1fr 8fr 2fr"}}>
              
                   <img src={item.docData.image} alt='' style={{borderRadius:"50%" , width:"3rem"}}/>

                   <div style={{fontSize:"14px"}}>
                    <p style={{fontWeight:"500"}}>{item.docData.name}</p>
                    <p>{slotDateFormat(item.slotDate)}</p>
                   </div>
          


                  <div>
                {item.cancelled 
                ?<p style={{fontWeight:"500", color:"rgba(169, 56, 8, 0.8)"}}>Cancelled</p>
                  :<img onClick={()=>cancelAppointment(item._id)} src={assets.cancel_icon} alt=''/> }  
                  </div>
                  
                 </div>
           ))}
        </div>

      </div>

    </div>
  )
}

export default Dashboard