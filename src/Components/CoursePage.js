import React from "react";
import data from "../data/CourseData.json";
import styled from "styled-components";
import Slide from "react-reveal/Slide";

function CoursePage({ match }) {
  let text;
  if (match.params.id <= data.length) {
    text = data.find((item) => item.id === match.params.id);
  } else {
    text = { header: "Item does not exist" };
  }
  return (
    <Slide bottom>
      <Container>
        <h1>{text.header}</h1>
        <p>{text.para}</p>
      </Container>
    </Slide>
  );
}

export default CoursePage;

const Container = styled.div`
  margin: 1%;
  border-radius: 10px;
  background-color: #cdf0ea;
  min-height: 42vh;
  padding: 10px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
