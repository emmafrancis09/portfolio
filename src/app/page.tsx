import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const Page = () => {
  return (
    <div className="flex items-center justify-center flex-col py-4">
      <Image
        src={"/Filthii.png"}
        alt="profile-picture"
        width={3024}
        height={4032}
        className="rounded-full object-cover w-[200px] h-[200px] shadow shadow-blue-900 cursor-pointer hover:shadow-neutral-600 transition-all"
      />
      <h1 className="pt-4 flex items-center justify-center flex-col">
        <p>
          My name is <span className="font-semibold">Emmanuel Francis</span>
        </p>
        <p>I am a 24-year-old software developer</p>
        <p>Located in Rwanda 🇷🇼</p>
      </h1>
      <div className="flex items-center justify-start gap-4 text-xl py-2">
        <a
          href="https://github.com/emmafrancis09"
          target="_blank"
          rel="noopener noreferrer"
          title="Github Profile"
        >
          <FaGithub className="cursor-pointer active:opacity-45" />
        </a>
        <a
          href="https://www.linkedin.com/in/emma-francis09/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
        >
          <FaLinkedin className="cursor-pointer active:opacity-45" />
        </a>
        {/* ✅ Fixed Download Button */}
        <a
          href="/progFilthiresume.pdf"
          download="progFilthiresume.pdf"
          title="Download Resume"
        >
          <FaDownload className="cursor-pointer active:opacity-45" />
        </a>
      </div>
    </div>
  );
};

export default Page;
