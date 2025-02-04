import React from "react";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-4xl">Technologies</h1>
      <div className="flex items-center justify-center pt-16 text-6xl gap-4">
        <FaHtml5 />
        <FaCss3 />
        <IoLogoJavascript />
        <FaReact />
        <BiLogoTailwindCss />
        <RiNextjsFill />
        <BiLogoTypescript />
      </div>
    </div>
  );
};

export default page;
