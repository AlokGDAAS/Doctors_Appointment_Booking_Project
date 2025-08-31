import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

function MyProfile() {

   const {userData , setUserData, token,backendUrl,loadUserProfileData} =useContext(AppContext)

   const [isEdit , setIsEdit] = useState(false)
   const [image , setImage] = useState(false)


   const updateUserProfileData = async()=>{
         try {

          const formData = new FormData()

          formData.append('name',userData.name)
          formData.append('phone',userData.phone)
          formData.append('address',JSON.stringify(userData.address))
          formData.append('gender',userData.gender)
          formData.append('dob',userData.dob)

          image && formData.append('image',image)

          const {data} = await axios.post(backendUrl + '/api/user/update-profile',formData,{headers:{token}})

          if(data.success){
            toast.success(data.message)
            await loadUserProfileData()
            setIsEdit(false)
            setImage(false)
          }else{
            toast.error(data.message)
          }

         } catch (error) {
          console.log(error)
          toast.error(error.message)
         }
   }

  return userData &&(
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      
      {
        isEdit 
        ?<label htmlFor='image'>
         <div style={{display:"inline-block", position:"relative", cursor:"pointer"}}>
          <img src={image ? URL.createObjectURL(image):userData.image} alt='' style={{width:"9rem", borderRadius:"20px",opacity:"50%"}}/>
          <img src={image ? '':assets.upload_icon} alt=''style={{width:"2.5rem", borderRadius:"20px",position:"absolute",bottom:"3rem",right:"3rem"}}/>
         </div>
         <input type='file' id='image' hidden  onChange={(e)=>setImage(e.target.files[0])}/>
        </label>
        :<img src={userData.image} alt='' style={{width:"9rem", borderRadius:"5px"}}/>
      }
      {
        isEdit ? <input type='text' 
                        value={userData.name} 
                        onChange={(e)=>setUserData(prev =>({...prev,name:e.target.value}))}
                        style={{fontSize:"24px", fontWeight:"500", maxWidth:"15rem",marginTop:"1rem",display:"block"}}
                        /> : <p style={{fontSize:"24px", fontWeight:"500",marginTop:"1rem"}} >{userData.name}</p>
      }
      <hr/>
      <div>
        <p style={{textDecorationLine:"underline", marginTop:"0.75rem"}}>CONTACT INFORMATION</p>
        <div style={{display:"grid" , gridTemplateColumns:"1fr 3fr",rowGap:"0.6125rem",marginTop:"0.75rem",}}>
          <p style={{fontWeight:"500"}}>Email id:</p>
          <p style={{color:"blue"}}>{userData.email}</p>
          <p style={{fontWeight:"500"}}>Phone :</p>
          {
            isEdit ? <input type='text' 
                            value={userData.phone} 
                            onChange={(e)=>setUserData(prev =>({...prev,phone:e.target.value}))}
                            style={{maxWidth:"13rem"}}/> : 
            <p style={{color:"blue"}}>{userData.phone}</p>
          }
          <p style={{fontWeight:"500"}}>Address</p>
          {
            isEdit ? 
            <p>
            <input type='text' value={userData.address.line1} onChange={(e)=>setUserData(prev =>({...prev,address:{...prev.address,line1:e.target.value}}))}/>
            <br/>
             <input type='text' value={userData.address.line2} onChange={(e)=>setUserData(prev =>({...prev,address:{...prev.address,line2:e.target.value}}))}/>
            </p>
             : 
            <p>
              {userData.address.line1}
              <br/>
              {userData.address.line2}
            </p>
            
          }          
        </div>
      </div>
      <div>
        <p style={{textDecorationLine:"underline", marginTop:"0.75rem"}}>BASIC INFORMATION</p>
        <div style={{display:"grid" , gridTemplateColumns:"1fr 3fr",rowGap:"0.6125rem",marginTop:"0.75rem",}}>
          <p style={{fontWeight:"500"}}>Gender:</p>
          {
            isEdit 
            ? <select onChange={(e)=> setUserData(prev=>({...prev,gender:e.target.value}))} 
                      value={userData.gender}
                      style={{maxWidth:"5rem"}}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Not selected">Not selected</option>
            
            </select> : 
            <p>{userData.gender}</p>
          }  
          <p style={{fontWeight:"500"}}>Birthday:</p>   
          {
            isEdit
            ?<input type='date' onChange={(e)=> setUserData(prev=>({...prev,dob:e.target.value}))} 
                                 value={userData.dob} style={{maxWidth:"8rem"}}/>
            :<p>{userData.dob}</p>
          }     
        </div>
      </div>
      <div style={{marginTop:"2.5rem"}}>
        {
          isEdit
          ?<button onClick={updateUserProfileData} className="text-center sm:min-w-48 py-2 border rounded-full bg-indigo-500 text-white hover:scale-105 transition-all duration-300 ">Save information</button>
          :<button onClick={()=>setIsEdit(true)}className="text-center sm:min-w-48 py-2 border rounded-full bg-indigo-500 text-white hover:scale-105 transition-all duration-300 ">Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile
