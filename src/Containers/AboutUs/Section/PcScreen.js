import { AspectRatio, Box } from "@chakra-ui/react";
import React, { useRef } from "react";
import "./PcScreen.css";

export const PcScreen = () => {
  const overlay = useRef();

  return (
    <Box
      className="monitor show"
      onClick={() => {
        overlay.current.classList.add("hide");
      }}
    >
      <Box className="screen">
        <AspectRatio maxW="560px" ratio={16 / 9} className="frontside">
          <iframe
            src="https://www.youtube.com/embed/7KZbn-ktiBs"
            allowFullScreen
            title="Ukazka RUSH hry"
          ></iframe>
        </AspectRatio>
        <Box className="backside" ref={overlay} />
      </Box>
      <Box className="stand" />
      <Box className="bottom" />
    </Box>
  );
};
