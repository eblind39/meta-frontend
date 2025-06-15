import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: ergutierrez39@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/eblind39",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ernesto-gutierrez-ergch/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/eblind39",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/eblind39",
  },
];

const Header = () => {
  const [position, setPosition] = useState(window.pageYOffset)
  const boxIdRef = useRef()

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    console.log(element, id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(()=> {
      const handleScroll = () => {
          let moving = window.pageYOffset
          
          if (position + moving > position) {
            setPosition(prevVal => prevVal + moving)
            boxIdRef.current.style.translateY = -200;
          } else {
            setPosition(prevVal => prevVal - moving)
            boxIdRef.current.style.translateY = 0;
          }
      };

      window.addEventListener("scroll", handleScroll);

      return(() => {
          window.removeEventListener("scroll", handleScroll);
      })
  })

  return (
    <Box
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={boxIdRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))} 
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a
                href="/#projects"
                onClick={handleClick("projects")}
                style={{ color: "white", textDecoration: "none" }}
              >
                Projects
              </a>
              <a
                href="/#contactme"
                onClick={handleClick("contactme")}
                style={{ color: "white", textDecoration: "none" }}
              >
                Contact me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
