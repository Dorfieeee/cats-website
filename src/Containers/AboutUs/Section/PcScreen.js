import { AspectRatio, Box, Image } from "@chakra-ui/react";
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
            title="Zaznam utkani v BF4 HC RUSH"
          ></iframe>
        </AspectRatio>
        <Box className="backside" ref={overlay}>
          <Box
            w="31.5%"
            h="50%"
            pos="absolute"
            top="0"
            left="0"
            transform={"translateX(100%) translateY(68.5%) rotateY(-17deg)"}
          >
            <Image
              src={"/click_youtube.png"}
              alt="Click on YouTube visualization"
              layout="fill"
              quality={50}
            />
          </Box>
        </Box>
      </Box>
      <Box className="stand" />
      <Box className="bottom" />
    </Box>
  );
};
