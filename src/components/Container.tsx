import React from "react";
import NavPages from "./pages/NavPages";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="relative h-full w-full bg-slate-950 min-h-screen">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] text-white font-[poppins]">
        <div className="flex items-center justify-center flex-col">
          <NavPages />
          <div className="pt-24"> {children}</div>
        </div>
      </div>
    </div>
  );
};

export default Container;
