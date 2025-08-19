import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { assets } from "../../assets/assets_admin/assets";
import { AppContext } from "../../context/AppContext";

function DoctorDashboard() {
  const {
    dtoken,
    dashData,
    setDashData,
    getDashData,
    cancelAppointment,
    completeAppointment,
  } = useContext(DoctorContext);
  const { currency, slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (dtoken) {
      getDashData();
    }
  }, [dtoken]);

  return (
    <div style={{ margin: "1.25rem" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
        <div className="dashboard-box">
          <img src={assets.earning_icon} alt="" style={{ width: "3.5rem" }} />
          <div>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              {currency} {dashData.earnings}
            </p>
            <p style={{ color: "rgba(90, 84, 84, 1)" }}>Earnings</p>
          </div>
        </div>

        <div className="dashboard-box">
          <img
            src={assets.appointments_icon}
            alt=""
            style={{ width: "3.5rem" }}
          />
          <div>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              {dashData.patients}
            </p>
            <p style={{ color: "rgba(90, 84, 84, 1)" }}>Appointments</p>
          </div>
        </div>

        <div className="dashboard-box">
          <img src={assets.patients_icon} alt="" style={{ width: "3.5rem" }} />
          <div>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              {dashData.patients}
            </p>
            <p style={{ color: "rgba(90, 84, 84, 1)" }}>Patients</p>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "white", borderRadius: "10px 10px 0px 0px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1rem",
            marginTop: "2.5rem",
            borderBottom: "0.5px solid gray",
          }}
        >
          <img src={assets.list_icon} alt="" />
          <p style={{ fontWeight: "600" }}>Latest bookings</p>
        </div>

        <div style={{ paddingTop: "1rem" }}>
          {dashData?.latestAppointments?.map((item,index)=>(
                             <div key={index}  className='dashboard-dashdata-item'
                                  style={{padding:"0.75rem 1.5rem", gap:"0.75rem", display:"grid",gridTemplateColumns:"1fr 8fr 2fr"}}>
                          
                               <img src={item.userData.image} style={{borderRadius:"50%" , width:"3rem"}} alt=''/>
            
                               <div style={{fontSize:"14px"}}>
                                <p style={{fontWeight:"500"}}>{item.userData.name}</p>
                                <p>{slotDateFormat(item.slotDate)}</p>
                               </div>
                      
            
            
                              <div>
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
                              
                             </div>
                       ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
