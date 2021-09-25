import React from "react";
import styled from "styled-components";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import Slide from "react-reveal/Slide";

function Footer() {
  return (
    <Slide bottom>
      <Container>
        Connect with Us and Many others like you,
        <Socials>
          <AiOutlineInstagram size={25} />
          <SiDiscord size={25} />
          <AiOutlineTwitter size={25} />
          <AiOutlineGithub size={25} />
        </Socials>
      </Container>
    </Slide>
  );
}
const Container = styled.div`
  margin: 1%;
  font-size: 20px;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  opacity: 0.9;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
`;

export default Footer;
