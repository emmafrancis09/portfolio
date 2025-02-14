import React from "react";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";

const technologies = [
  { icon: FaHtml5, label: "HTML" },
  { icon: FaCss3, label: "CSS" },
  { icon: IoLogoJavascript, label: "JavaScript" },
  { icon: FaReact, label: "React" },
  { icon: BiLogoTailwindCss, label: "Tailwind CSS" },
  { icon: RiNextjsFill, label: "Next.js" },
  { icon: BiLogoTypescript, label: "TypeScript" },
];

const Page = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-4xl">Technologies</h1>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-2 pt-16 text-2xl">
        {technologies.map(({ icon: Icon, label }, index) => (
          <div
            key={index}
            className="border-neutral-700 w-24 h-24 rounded-lg border flex items-center justify-center cursor-pointer transition-all hover:bg-neutral-700 flex-col space-y-4"
          >
            <Icon />
            <p className="text-[10px]">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
