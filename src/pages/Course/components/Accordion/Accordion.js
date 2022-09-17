import React, { useState, useContext } from "react";
import "./Accordion.css";
import { CourseContext } from "../../../../Context/courseContext";

export default function Accordion() {
  const [open, setOpen] = useState({ isActive: false, idx: null });
  const [hideSeeMore, sethideSeeMore] = useState(false);
  const course = useContext(CourseContext);
  // To store the default Accordion Item
  const defaultAccordionItem = [];
  // To store the hidden Accordion Item inside see more
  const hiddenAccordionItem = [];
  for (let i = 0; i < Math.min(10, course.content.length); i++) {
    defaultAccordionItem.push(course.content[i]);
  }
  for (let i = Math.min(10, course.content); i < course.content.length; i++) {
    hiddenAccordionItem.push(course.content[i]);
  }

  // To handle see more
  const handleClick = () => {
    sethideSeeMore(!hideSeeMore);
  };
  // To handle open Accordion
  function handleOpen(index) {
    setOpen({ ...open, isActive: !open.isActive, idx: index });
  }
  return (
    <div className="container component-margin ">
      <div className="row">
        <div className="col-md-7">
          <h2>Course content</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="accordion-content my-4 d-flex justify-content-between">
            <div className="accordion-length">
              <span>
                17 sections • 225 lectures •{" "}
                <span>
                  <span>26h&nbsp;20m</span> total length
                </span>
              </span>
            </div>
            <button>
              <span>Expand all sections</span>
            </button>
          </div>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            {defaultAccordionItem &&
              defaultAccordionItem.map((item, index) => (
                <div className="accordion-item" key={item.lecture.id}>
                  <h2
                    className="accordion-header"
                    id={`panelsStayOpen-heading${index}`}
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#panelsStayOpen-collapse${index}`}
                      aria-expanded="true"
                      aria-controls={`panelsStayOpen-collapse${index}`}
                      onClick={() => handleOpen(index)}
                    >
                      <h4> {item.lecture.title} </h4>
                      <span>
                        {item.lecture.lessons.length} lectures •{" "}
                        <span>{item.lecture.total_estimate_time}min</span>
                      </span>
                    </button>
                  </h2>
                  {open && (
                    <div
                      id={`#panelsStayOpen-collapse${index}`}
                      className={`accordion-collapse collapse ${
                        index === open.idx && open.isActive ? "show" : ""
                      }`}
                      aria-labelledby={`panelsStayOpen-heading${index}`}
                    >
                      <div className="accordion-body">
                        <ul>
                          {item.lecture.lessons.map((lesson) => (
                            <li key={lesson.id}>
                              <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                                <i
                                  className="fa fa-play-circle me-3"
                                  aria-hidden="true"
                                ></i>
                                <div
                                  className="accordion-body-content-link d-flex justify-content-between"
                                  style={{ width: "100%" }}
                                >
                                  <div
                                    className="d-flex"
                                    style={{ width: "100%" }}
                                  >
                                    <a >{lesson.title}</a>

                                    <span className="ms-auto accordion-body-content-time">
                                      {lesson.is_preview ? (
                                        <a  className="me-4">
                                          Preview
                                        </a>
                                      ) : null}
                                      <span> {lesson.estimate_time} </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            {hideSeeMore === false
              ? hiddenAccordionItem &&
                hiddenAccordionItem.map((item, index) => (
                  <div className="accordion-item" key={item.id}>
                    <h2
                      className="accordion-header"
                      id={`panelsStayOpen-heading${index}`}
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#panelsStayOpen-collapse${index}`}
                        aria-expanded="true"
                        aria-controls={`panelsStayOpen-collapse${index}`}
                        onClick={() => handleOpen(index)}
                      >
                        <h4> {item.lecture.title} </h4>
                        <span>
                          {item.lecture.lessons.length} lectures •{" "}
                          <span>{item.lecture.total_estimate_time}min</span>
                        </span>
                      </button>
                    </h2>
                    {open && (
                      <div
                        id={`#panelsStayOpen-collapse${index}`}
                        className={`accordion-collapse collapse ${
                          index === open.idx && open.isActive ? "show" : ""
                        }`}
                        aria-labelledby={`panelsStayOpen-heading${index}`}
                      >
                        <div className="accordion-body">
                          <ul>
                            {item.lecture.lessons.map((lesson) => (
                              <li key={lesson.id}>
                                <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                                  <i
                                    className="fa fa-play-circle me-3"
                                    aria-hidden="true"
                                  ></i>
                                  <div
                                    className="accordion-body-content-link d-flex justify-content-between"
                                    style={{ width: "100%" }}
                                  >
                                    <div
                                      className="d-flex"
                                      style={{ width: "100%" }}
                                    >
                                      <a >{lesson.title}</a>

                                      <span className="ms-auto accordion-body-content-time">
                                        {lesson.is_preview ? (
                                          <a  className="me-4">
                                            Preview
                                          </a>
                                        ) : null}
                                        <span> {lesson.estimate_time} </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              : null}
            {hiddenAccordionItem.length > 0 && (
              <button className="readmore my-4" onClick={handleClick}>
                {" "}
                <span>Read {hideSeeMore ? "More" : "Less"} </span>{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
