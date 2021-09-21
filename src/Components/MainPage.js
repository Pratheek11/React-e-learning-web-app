import React from "react";
import ContentsSlide from "./ContentsSlide.js";
import Slide from "react-reveal/Slide";
import CourseSlide from "./CourseSlide.js";
import Benifits from "./Benifits.js";
import data from "../data/CourseData.json";

function MainPage() {
  let items = data;
  items.splice(3, 1);
  return (
    <div>
      <Slide bottom>
        <ContentsSlide
          slideNo="1"
          header="Welcome"
          buttonName="Join Virtual Campus"
          para="THE NEXT BIG THING"
          link="/pager"
        />
      </Slide>
      <div>
        {items.map((item) => {
          let order = 1;
          if (item.id % 2 == 0) {
            order = 2;
          }
          return (
            <Slide bottom>
              <CourseSlide
                key={item.id}
                header={item.header}
                colorNo={item.colorNo}
                component={`/course/${item.id}`}
                order={order}
              />
            </Slide>
          );
        })}
      </div>
      <Slide bottom>
        <ContentsSlide
          slideNo="2"
          header="About Us"
          buttonName="Learn More"
          link="/pager"
          para="Learning Together From the Comfort of Your Home"
        />
      </Slide>
      <Slide bottom>
        <Benifits />
      </Slide>
    </div>
  );
}

export default MainPage;
