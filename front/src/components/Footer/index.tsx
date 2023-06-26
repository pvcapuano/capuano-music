import React from "react";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-white flex justify-center shadow-lg mt-4 p-2">
      <div className="flex justify-center items-center mb-4">
        <AiOutlineGithub size={30} />
        <p className="font-bold ml-2">github.com/pvcapuano</p>
      </div>
    </div>
  );
};

export default Footer;
