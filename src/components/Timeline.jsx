import React from "react";
import data from "../assets/data.json";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timeline-box">
        {data.projects.map((item, index) => (
          <TimelineItem
            key={item.title}
            heading={item.title}
            index={index}
            text={item.date}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  </div>
);

export default Timeline;
