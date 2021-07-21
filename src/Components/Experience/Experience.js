import React from 'react'
import './experience.css'

import timelineElements from "./timelineElements";

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {

    let workIconStyles = { background: "#C49B66" };

    return (
        <div className="div-experience" id="experience">
            <h1 className="title-exp">Experience</h1>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                // let isWorkIcon = element.icon === "work";
                // let showButton =
                //     element.buttonText !== undefined &&
                //     element.buttonText !== null &&
                //     element.buttonText !== "";

                return (
                    <VerticalTimelineElement
                    key={element.key}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={ workIconStyles }
                    >
                    <h3 className="vertical-timeline-element-title elem-title">
                        {element.title}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                        {element.location}
                    </h5>
                    <p id="description">{element.description}</p>
                    {/* {showButton && (
                        <a
                        className={`button ${
                            isWorkIcon ? "workButton" : "schoolButton"
                        }`}
                        href="/"
                        >
                        {element.buttonText}
                        </a>
                    )} */}
                    </VerticalTimelineElement>
                );
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Experience
