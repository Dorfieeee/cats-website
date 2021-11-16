import { HStack, Img } from "@chakra-ui/react";
import React from "react";
import "./GameIcons.css";

const images = [
  {
    src: "https://i.ibb.co/zrB8Lwd/cod4-icon.png",
    alt: "Call of Duty 4: Modern Warfare"
  },
  {
    src: "https://i.ibb.co/vvThQFj/Call-of-Duty-Modern-Warfare-2-2-icon.png",
    alt: "Call of Duty: Modern Warfare 2"
  },
  { src: "https://i.ibb.co/w7cGCzH/bf4-icon.png", alt: "Battlefield 4" },
  { src: "https://i.ibb.co/n8B9CQq/bf3icon.png", alt: "Battlefield 3" },
  { src: "https://i.ibb.co/s2LWqBV/bf5icon.png", alt: "Battlefield 5" }
];

export const GameIcons = (props) => {
  return (
    <HStack className="game-icons">
      {images.map((img) => (
        <Img src={img.src} alt={img.alt} maxW="23.5%" h="auto" key={img.alt} />
      ))}
    </HStack>
  );
};
