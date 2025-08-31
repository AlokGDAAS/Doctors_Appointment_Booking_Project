import React, { useCallback, useContext, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function NavBar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const {token,setToken,userData} = useContext(AppContext)

  const logout =()=>{
    setToken(false)
    localStorage.removeItem('token')
    navigate('/')
  }
 

  return (
    <div
      className="flex items-center justify-between  text-sm py-2 mb-5 border-b border-b-gray-400"

    >
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        className="w-44 cursor-pointer"
      />
      <div className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <div>Home</div>
          <hr className="border-none outline-none h-0.5 m-auto hidden w-3/5" style={{backgroundColor:"var(--primary)"}}/>
        </NavLink>
        <NavLink to="doctors">
          <div>All Doctors</div>
          <hr className="border-none outline-none h-0.5 m-auto hidden w-3/5" style={{backgroundColor:"var(--primary)"}}/>
        </NavLink>
        <NavLink to="about">
          <div>About</div>
          <hr className="border-none outline-none h-0.5 m-auto hidden w-3/5" style={{backgroundColor:"var(--primary)"}}/>
        </NavLink>
        <NavLink to="contact">
          <div>Contact</div>
          <hr className="border-none outline-none h-0.5 m-auto hidden w-3/5" style={{backgroundColor:"var(--primary)"}}/>
        </NavLink>
      </div>
      <div style={{ display: "flex", alignItems: "center" }} className="parent">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={userData.image}
              alt=""
            />
            <img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt=""
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 ">
                <p onClick={() => navigate("/myprofile")} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={() => navigate("/my-appointments")}className="hover:text-black cursor-pointer">
                  My Appointments
                </p>
                <p onClick={() => logout()} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-white py-3 px-8 font-medium rounded-full font-light hidden md:block"
            style={{backgroundColor:"var(--primary)"}}
          >
            Create Account
          </button>

          </div>

        )}

        <img onClick={()=>setShowMenu(true)} src={assets.menu_icon} className="md:hidden" alt=""/>
        {/*--------------------- mobile-menu ------------------------------- */}
        <div className={`${showMenu ? `fixed w-full`: `h-0 w-0`} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all ` }>
          <div className="flex items-center justify-between px-5 py-6">
            <img src={assets.logo} alt="" className="w-36"/>
            <img onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt=""  className="w-7"/>
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink  onClick={()=>setShowMenu(false)} to='/'><p>Home</p></NavLink>
            <NavLink  onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'> All Doctors</p></NavLink>
            <NavLink  onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
            <NavLink  onClick={()=>setShowMenu(false)} to='/cantact'><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
