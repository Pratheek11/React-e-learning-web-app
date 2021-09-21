import React from "react";
import styled from "styled-components";
import { GrUserExpert } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa";
import { ImBooks } from "react-icons/im";

function Benifits() {
  return (
    <Container>
      <div>
        <div>
          <h1>Online Course Benefits</h1>
        </div>
        <Carrier>
          <div>
            <GrUserExpert size={35} />
            <h3>Expert Teachers</h3>
            <p className="para">
              Our instructors are more adept at monitoring student problems and
              assessing their level of understanding and progress, and they
              provide much more relevant, useful feedback. We are experts in
              developing and testing hypotheses about learning difficulties or
              instructional strategies
            </p>
          </div>
          <div>
            <FaGlobe size={35} />
            <h3>Online Community</h3>
            <p className="para">
              Feel like home, with a "family of invisible friends".
            </p>
          </div>
          <div>
            <ImBooks size={35} />
            <h3>Flexible Curriculum</h3>
            <p className="para">
              Our expert teachers design and curate the curriculum using best
              practices and careful consideration of how people learn and retain
              information with the ongoing tech trends in the professional
              domain. We've debated every facet of our methodology, from the
              order in which to teach concepts, the analogies used to clarify
              them and how exercises should be structured to deliver the maximum
              educational punch.
            </p>
          </div>
        </Carrier>
      </div>
    </Container>
  );
}

export default Benifits;

const Container = styled.div`
  margin: 1%;
  border-radius: 10px;
  background-color: #d5bf86;
  display: flex;
  text-align: center;
  pointer-events: none;
`;
const Carrier = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  .para {
    font-size: 13px;
    padding-bottom: 10px;
    border-bottom: 2px solid black;
  }
`;
