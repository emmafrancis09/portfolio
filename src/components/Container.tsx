import React from "react";
import NavPages from "./pages/NavPages";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-slate-950">
      <div className="w-full min-h-screen bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] text-white font-[poppins] flex flex-col">
        <NavPages />
        <div className="pt-24 px-[450px] text-center">{children}</div>
      </div>
    </div>
  );
};

export default Container;
