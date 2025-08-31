import React from "react";
import { assets } from "../assets/assets_frontend/assets";

function About() {
  return (
    <div className="">
      <div
       className="text-center text-2xl pt-10 text-gray-500"
      >
        <p>
          ABOUT <span className="text-gray-700">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          src={assets.about_image}
          alt=""
          className="w-full max-w-[360px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nemo dolorum iusto quidem rem maiores, quisquam iste voluptatem
            architecto maxime! Voluptatibus nulla, fugit iure dolorum illum quos
            numquam magni repudiandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nemo dolorum iusto quidem rem maiores, quisquam iste voluptatem
            architecto maxime! Voluptatibus nulla, fugit iure dolorum illum quos
            numquam magni repudiandae.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nemo dolorum iusto quidem rem maiores, quisquam iste voluptatem
            architecto maxime! Voluptatibus nulla, fugit iure dolorum illum quos
            numquam magni repudiandae.
          </p>
        </div>
      </div>
      <div className="text-xl my-4" >
        <p>
          WHY<span className="text-gray-700 font-semibold">CHOOSE US</span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-500 hover:text-white transition-all duration-300 text-gray-600 cursor:pointer">
          <b>Efficiency :</b>
          <p>
            Streamlined Apponitment Scheduking That Fits into Your Busy
            Lifestyle
          </p>
        </div>

        <div  className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-500 hover:text-white transition-all duration-300 text-gray-600 cursor:pointer">
          <b>Convenience :</b>
          <p>
            Access to network of Trusted Healthcare Professionals in Your Area
          </p>
        </div>

        <div  className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-500 hover:text-white transition-all duration-300 text-gray-600 cursor:pointer">
          <b>Personalization :</b>
          <p>
            Tailored Recommendations and Reminders to Help You Stay On Top Of
            Your Health
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
