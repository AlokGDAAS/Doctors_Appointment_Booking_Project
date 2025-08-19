import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

function DoctorsList() {

  const {doctors , atoken , getAllDoctors,changeAvailability} = useContext(AdminContext)

  useEffect(()=>{
    if(atoken){
      getAllDoctors()
    }
  },[atoken])

  return (
    <div style={{margin:"1.25rem", maxHeight:"90vh", overflow:"auto"}} className='doctors-list'>
         <h2 style={{fontWeight:"500"}}>All Doctors</h2>
         <div style={{display:"flex", width:"100%", flexWrap:"wrap", paddingTop:"1.25rem", rowGap:"1.5rem", columnGap:"1rem"}}>
          {
            doctors.map((doc,index)=>(
              <div key={index} style={{border:"1px solid grey", maxWidth:"12rem", borderRadius:"10px", overflow:"hidden", cursor:"pointer"}}>

                <img src={doc.image} alt='' style={{width:"100%"}}/>
                <div style={{padding:"1rem"}}>
                  <p style={{fontWeight:"500", fontSize:"15px"}}>{doc.name}</p>
                  <p style={{fontSize:"12px"}}>{doc.speciality}</p>
                  <div style={{marginTop:"0.5rem", display:"flex", alignItems:"center", gap:"0.25rem", fontSize:"12px", fontWeight:"500"}}>
                    <input onChange={()=>changeAvailability(doc._id)} type='checkbox' checked={doc.available}/>
                    <p>Available</p>
                  </div>
                </div>

              </div>
            ))
          }
         </div>
    </div>
  )
}

export default DoctorsList