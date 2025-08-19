import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import {toast} from 'react-toastify'

function DoctorProfile() {

  const {dtoken , profileData, setProfileData, getProfileData,backendUrl} = useContext(DoctorContext)
  const {currency, } = useContext(AppContext)

  const [isEdit , setIsEdit] = useState(false)

  const updateProfile = async ()=>{

    try {
      const updateData ={
        address:profileData.address,
        fees:profileData.fees,
        available:profileData.available
      }
    
      const {data} = await axios.post(backendUrl+'/api/doctor/update-doctor-profile',updateData,{headers:{dtoken}})
      if(data.success){
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
      
    }
  }

  useEffect(()=>{
   if(dtoken){
    getProfileData()
   }
  },[dtoken])

  return profileData && (
    <div>

      <div style={{display:"flex" , flexDirection:"column", gap:"1rem", margin:"1.25rem"}}>

        <div >
          <img src={profileData.image} style={{background:"var(--primary)", borderRadius:"20px", maxWidth:"16rem"}}/>
        </div>

      <div style={{display:"flex", flexGrow:"1",flexShrink:"1",flexBasis:"0%", flexDirection:"column", padding:"2rem", borderRadius:"10px", backgroundColor:"white"}}>

        {/*--------------- Doc Info : name,degree,experience ----------------- */}

      <p style={{display:"flex", alignItems:"center" ,fontSize:"24px", fontWeight:"500"}}>{profileData.name}</p>
      <div style={{display:"flex", alignItems:"center" ,gap:"0.5rem", marginTop:"0.5rem"}}>
        <p>{profileData.degree} - {profileData.speciality}</p>
        <button style={{borderRadius:"20px", padding:"0rem  0.5rem"}}>{profileData.experience}</button>
      </div>


      {/*--------------- Doc About ----------------- */}

      <div>
        <p style={{display:"flex", alignItems:"center" ,gap:"0.5rem",fontWeight:"500", marginTop:"0.75rem"}}>About:</p>
        <p style={{fontSize:"14px", maxWidth:"700px" ,marginTop:"0.25rem"}}>{profileData.about}</p>
      </div>
      <p style={{fontWeight:"500" , marginTop:"1rem"}}>Appointment fee : 
        <span>{currency} { isEdit ? <input type='number' value={profileData.fees} onChange={(e)=>setProfileData(prev=>({...prev , fees:Number(e.target.value)}))}/> :profileData.fees}</span></p>
      <div style={{display:"flex", padding:"0.5rem 0rem",gap:"0.5rem"}}>
        <p>Address:</p>
        <div style={{fontSize:"14px"}}>
        <p>{isEdit ?<input type='text' value={profileData.address.line1} onChange={(e)=>setProfileData(prev=>({...prev,address:{...prev,line1:e.target.value}}))}/> :profileData.address.line1}</p>        
        <p>{isEdit ?<input type='text' value={profileData.address.line2} onChange={(e)=>setProfileData(prev=>({...prev,address:{...prev,line2:e.target.value}}))}/> :profileData.address.line2}</p>
        </div>

      </div>

      <div style={{display:"flex",paddingTop:"0.5rem"}}>
        <input type='checkbox' name='' id='' onChange={()=>isEdit && setProfileData(prev=>({...prev,available:!prev.available}))} checked={profileData.available}/>
        <lable htmlFor=''>Available</lable>
      </div>

      {
        isEdit
        ? <div style={{marginTop:"1.25rem"}}>
        <button onClick={updateProfile} style={{padding:"0.25rem 1rem" , borderRadius:"20px"}} className='btn-hover-primary'>Save</button>  
        </div>
        : 
        <div style={{marginTop:"1.25rem"}}>
          <button onClick={()=>setIsEdit(true)} style={{padding:"0.25rem 1rem" , borderRadius:"20px"}} className='btn-hover-primary'>Edit</button> 
          </div> 
      }
      
           
            
  

      

      </div>

      </div>
      



    </div>
  )
}

export default DoctorProfile