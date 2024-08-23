import { Carousel } from "@material-tailwind/react";
import React from "react";

interface ListCaroselProps {
  children: React.ReactNode;
}

export const ListCarosel = ({ children }: ListCaroselProps) => {
  return (
    <Carousel
      placeholder={""}
      onPointerLeaveCapture={""}
      onPointerEnterCapture={""}
      className="rounded-xl"
      loop={true}
      style={{ minWidth: "250px", maxWidth: "550px" }}
    >
      {children}
    </Carousel>
  );
};
