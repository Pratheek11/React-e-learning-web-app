import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import styled from "styled-components";
import Slide from "react-reveal/Slide";

function Page404() {
  return (
    <Slide bottom>
      <Container>
        <div>
          <RiErrorWarningLine size={40} />
          <h1>204</h1>
          <p>We will implement this page soon!!</p>
        </div>
      </Container>
    </Slide>
  );
}

export default Page404;

const Container = styled.div`
  height: 61vh;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  background-color: #ff2626;
  pointer-events: none;
  margin: 1%;
  border-radius: 10px;
`;
