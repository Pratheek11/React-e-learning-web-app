import React from "react";
import items from "../data/CourseData.json";
import Slide from "react-reveal/Slide";
import CourseSlide from "./CourseSlide.js";

function FullCoursePage() {
  return (
    <div>
      {items.map((item, index) => {
        let order = 1;
        if (item.id % 2 === 0) {
          order = 2;
        }
        return (
          <Slide key={index} bottom>
            <CourseSlide
              key={index}
              header={item.header}
              colorNo={item.colorNo}
              component={`/course/${item.id}`}
              order={order}
            />
          </Slide>
        );
      })}
    </div>
  );
}

export default FullCoursePage;
