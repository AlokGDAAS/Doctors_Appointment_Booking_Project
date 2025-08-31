import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

function SpecialityMenu() {
  return (
    <div id="speciality" className="flex flex-col items-center gap-4 text-gray-800 mt-4"  >
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm font-medium">
        simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free
      </p>

      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll font-medium">
        {specialityData.map((item, index) => (
          <Link
            onClick={()=>window.scrollTo(0,0)}            
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrik-0 hover:translate-y-[-10px] transition-all duration-500"
          >
            <img
              src={item.image}
              alt=""
              className="w-24 md:w-18 mb-2"
            />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SpecialityMenu;
