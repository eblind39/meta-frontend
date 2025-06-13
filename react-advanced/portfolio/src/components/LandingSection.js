import React from "react";
import { defineStyle, Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Ernesto!";
const bio1 = "A fullstack developer";
const bio2 = "specialised in React + Node.js";

const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "colorPalette.500",
  outlineOffset: "2px",
  outlineStyle: "solid",
})

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} align="center" color="white">
      { /* <Avatar.Root css={ringCss} colorPalette="pink">
        <Avatar.Fallback name={greeting} />
        <Avatar.Image src="https://i.pravatar.cc/150?img=7" />
      </Avatar.Root> */ }
      <Heading as="h2" size="lg">
        {bio1}
      </Heading>
      <Heading as="h3" size="md">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
