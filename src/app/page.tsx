import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col py-4">
      <Image
        src={"/Filthii.png"}
        alt="profile-picture"
        width={3024}
        height={4032}
        className="rounded-full object-cover  w-[200px] h-[200px] shadow shadow-blue-900 cursor-pointer hover:shadow-neutral-600 transition-all"
      />
      <h1 className="pt-4 text-2xl flex items-center justify-center flex-col">
        <p>
          My name is <span className="font-semi-bold">Emmanuel Francis</span>
        </p>
        <p>I am a 24 years old software developer</p>
        <p>Located in Rwanda 🇷🇼</p>
      </h1>
      <div className="flex items-center justify-start gap-4 text-xl py-2">
        <FaGithub className="cursor-pointer active:opacity-45" />
        <FaLinkedin className="cursor-pointer active:opacity-45" />
        <FaDownload className="cursor-pointer active:opacity-45" />
      </div>
    </div>
  );
};

export default page;
