import React from "react";

interface ListCaroselProps {
  children: React.ReactNode;
}

export const InformationContainer = ({ children }: ListCaroselProps) => {
  return (
    <div className="h-4/5 md:w-4/5 w-3/4 border-[#D8B9B950] border-2 border-solid rounded-3xl bg-[#99969620] mt-4 flex flex-col items-start m-auto pt-4 pb-2">
      {children}
    </div>
  );
};
