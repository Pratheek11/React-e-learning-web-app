import React from "react";
import data from "../data/CourseData.json";
import Slide from "react-reveal/Slide";
import CourseSlide from "./CourseSlide.js";

function FullCoursePage() {
  let items = data;
  return (
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
  );
}

export default FullCoursePage;
