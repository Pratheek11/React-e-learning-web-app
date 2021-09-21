import React from "react";
import { Buttons, Container } from "./contentSlidCss";
import { Link } from "react-router-dom";

function ContentsSlide(props) {
  return (
    <Container num={props.slideNo}>
      <div className="carrier">
        <h1 className="header">{props.header}</h1>
        <p className="para">{props.para}</p>
        <Link to={props.link}>
          <Buttons>{props.buttonName}</Buttons>
        </Link>
      </div>
    </Container>
  );
}

export default ContentsSlide;
