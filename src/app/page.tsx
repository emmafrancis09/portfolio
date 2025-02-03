import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col py-4">
        <Image
          src={"/Filthii.png"}
          alt="profile-picture"
          width={3024}
          height={4032}
          className="rounded-full object-cover  w-[200px] h-[200px] shadow shadow-blue-500"
        />
        <h1 className="py-4 text-sm flex items-center justify-center flex-col leading-6">
          <p>
            My name is{" "}
            <span className="font-semi-bold text-xl">Emmanuel Francis</span>
          </p>
          <p>I am a 24 years old software developer</p>
          <p>Located in Rwanda 🇷🇼</p>
        </h1>
        <div>
          <div className="flex items-center justify-center gap-2 text-3xl">
            <FaGithub className="cursor-pointer hover:shadow-blue-600 shadow-md transition-all rounded-full" />
            <FaLinkedin className="cursor-pointer hover:shadow-blue-600 shadow-md transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
