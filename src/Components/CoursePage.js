import React from "react";
import data from "../data/CourseData.json";
import styled, { css } from "styled-components";
import Slide from "react-reveal/Slide";

function CoursePage({ match }) {
  let text;
  if (match.params.id <= data.length) {
    text = data.find((item) => item.id == match.params.id);
  } else {
    text = { header: "Item does not exist" };
  }
  return (
    <Slide bottom>
      <Container>
        {text.header}
        {text.para}
      </Container>
    </Slide>
  );
}

export default CoursePage;

const Container = styled.div`
  margin: 1%;
  border-radius: 10px;
  background-color: #cdf0ea;
  height: 62vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Cover = styled.div``;
