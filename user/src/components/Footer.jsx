import React from "react";
import { assets } from "../assets/assets_frontend/assets";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-4 text-sm">
        {/* ---------------left section----------------- */}
        <div>
          <img
            src={assets.logo}
            alt=""
            className="mb-5 w-50"
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi
            voluptas architecto! Dignissimos sapiente cupiditate ab ad, itaque
            eaque inventore rerum ipsa doloribus expedita, sequi laboriosam
            velit obcaecati sunt provident.
          </p>
        </div>
        {/* ---------------center section----------------- */}
        <div>
          <p className="font-medium mb-5 text-xl">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* ---------------right section----------------- */}
        <div>
          <p className="font-medium mb-5 text-xl">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>alokdev@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        {/* --------------------copyright text--------------- */}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyrights 2025@ Prescripto - All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
