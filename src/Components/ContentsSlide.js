import React from "react";
import styled, { css } from "styled-components";

function ContentsSlide(props) {
  return (
    <Container num={props.slideNo}>
      <div className="carrier">
        <h1 className="header">{props.header}</h1>
        <p className="para">{props.para}</p>
      </div>
    </Container>
  );
}

export const Container = styled.div`
  margin: 1%;
  height: auto;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ef8354;

  .carrier {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
  .header {
    font-size: 40px;
    pointer-events: none;
  }
  .para {
    font-size: 35px;
    pointer-events: none;
  }
  ${(props) =>
    props.num === "1" &&
    css`
      background-color: #b8dfd8;
    `}
  ${(props) =>
    props.num === "2" &&
    css`
      background-color: #93b5c6;
    `}
`;

export const Buttons = styled.p`
  display: flex;
  font-size: 12px;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  align-items: center;
  background-color: black;
  color: white;
  width: 120px;
  height: 20px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export default ContentsSlide;
