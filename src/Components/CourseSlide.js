import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function CourseSlide(props) {
  const links = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <Container colors={props.colorNo}>
      <Cover>
        <Paras order={props.order}>
          <h1>{props.header}</h1>
        </Paras>
        <div>
          <Button>
            <Link style={links} to={props.component}>
              Explore More
            </Link>
          </Button>
        </div>
      </Cover>
    </Container>
  );
}

export default CourseSlide;

const Container = styled.div`
  background-color: orange;
  margin: 1%;
  height: 35vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${(props) =>
    props.colors == 1 &&
    css`
      background-color: #ddd8c4;
    `}
  ${(props) =>
    props.colors == 2 &&
    css`
      background-color: #a3c9ab;
    `}
      ${(props) =>
    props.colors == 3 &&
    css`
      background-color: #69a297;
    `}
`;

const Cover = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const Paras = styled.div`
  ${(props) =>
    props.order == "2" &&
    css`
      order: 2;
    `}
`;
const Button = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  align-items: center;
  background-color: white;
  color: black;
  width: 120px;
  height: 20px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;
