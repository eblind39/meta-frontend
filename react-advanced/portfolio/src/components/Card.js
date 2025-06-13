import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack spacing={4} align="center" color="white">
      { /* <Avatar.Root css={ringCss} colorPalette="pink">
        <Avatar.Fallback name={greeting} />
        <Avatar.Image src="https://i.pravatar.cc/150?img=7" />
      </Avatar.Root> */ }
    </VStack>
  );
};

export default Card;
