import React, { useState } from "react";
import "./Accordion.css";

export default function Accordion() {
  const [hidden, setHidden] = useState(false);
  const handleClick = () => {
    setHidden(!hidden);
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-7">
          <h2>Course content</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7">
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
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <h4> Up and Running With Python </h4>
                  <span>
                    10 lectures • <span>57min</span>
                  </span>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                        <i
                          className="fa fa-play-circle me-3"
                          aria-hidden="true"
                        ></i>
                        <div
                          className="accordion-body-content-link d-flex justify-content-between"
                          style={{ width: "100%" }}
                        >
                          <div className="d-flex" style={{ width: "100%" }}>
                            <a href="#2">Installing Python</a>

                            <span className="ms-auto accordion-body-content-time">
                              <a href="#2" className="me-4">
                                Preview
                              </a>
                              <span> 04:07 </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                        <i
                          className="fa fa-play-circle me-3"
                          aria-hidden="true"
                        ></i>
                        <div
                          className="accordion-body-content-link d-flex justify-content-between "
                          style={{ width: "100%" }}
                        >
                          <div className="d-flex" style={{ width: "100%" }}>
                            <a href="#2">Installing Python</a>

                            <span className="ms-auto accordion-body-content-time">
                              <a href="#2" className="me-4">
                                Preview
                              </a>
                              <span> 04:07 </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                        <i
                          className="fa fa-play-circle me-3"
                          aria-hidden="true"
                        ></i>
                        <div
                          className="accordion-body-content-link d-flex justify-content-between "
                          style={{ width: "100%" }}
                        >
                          <div className="d-flex" style={{ width: "100%" }}>
                            <a href="#2">Installing Python</a>

                            <span className="ms-auto accordion-body-content-time">
                              <a href="#2" className="me-4">
                                Preview
                              </a>
                              <span> 04:07 </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne2">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne2"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne2"
                >
                  <h4> The Basics (Data Types) </h4>
                  <span>
                    10 lectures • <span>57min</span>
                  </span>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne2"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingOne2"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                        <i
                          className="fa fa-play-circle me-3"
                          aria-hidden="true"
                        ></i>
                        <div
                          className="accordion-body-content-link d-flex justify-content-between "
                          style={{ width: "100%" }}
                        >
                          <div className="d-flex" style={{ width: "100%" }}>
                            <a href="#2">Installing Python</a>

                            <span className="ms-auto accordion-body-content-time">
                              <a href="#2" className="me-4">
                                Preview
                              </a>
                              <span> 04:07 </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                        <i
                          className="fa fa-play-circle me-3"
                          aria-hidden="true"
                        ></i>
                        <div
                          className="accordion-body-content-link d-flex justify-content-between "
                          style={{ width: "100%" }}
                        >
                          <div className="d-flex" style={{ width: "100%" }}>
                            <a href="#2">Installing Python</a>

                            <span className="ms-auto accordion-body-content-time">
                              <a href="#2" className="me-4">
                                Preview
                              </a>
                              <span> 04:07 </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                        <i
                          className="fa fa-play-circle me-3"
                          aria-hidden="true"
                        ></i>
                        <div
                          className="accordion-body-content-link d-flex justify-content-between "
                          style={{ width: "100%" }}
                        >
                          <div className="d-flex" style={{ width: "100%" }}>
                            <a href="#2">Installing Python</a>

                            <span className="ms-auto accordion-body-content-time">
                              <a href="#2" className="me-4">
                                Preview
                              </a>
                              <span> 04:07 </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne3">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne3"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne3"
                >
                  <h4> Conditions and Loops </h4>
                  <span>
                    10 lectures • <span>57min</span>
                  </span>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne3"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingOne3"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                        <i
                          className="fa fa-play-circle me-3"
                          aria-hidden="true"
                        ></i>
                        <div
                          className="accordion-body-content-link d-flex justify-content-between "
                          style={{ width: "100%" }}
                        >
                          <div className="d-flex" style={{ width: "100%" }}>
                            <a href="#2">Installing Python</a>

                            <span className="ms-auto accordion-body-content-time">
                              <a href="#2" className="me-4">
                                Preview
                              </a>
                              <span> 04:07 </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                        <i
                          className="fa fa-play-circle me-3"
                          aria-hidden="true"
                        ></i>
                        <div
                          className="accordion-body-content-link d-flex justify-content-between "
                          style={{ width: "100%" }}
                        >
                          <div className="d-flex" style={{ width: "100%" }}>
                            <a href="#2">Installing Python</a>

                            <span className="ms-auto accordion-body-content-time">
                              <a href="#2" className="me-4">
                                Preview
                              </a>
                              <span> 04:07 </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                        <i
                          className="fa fa-play-circle me-3"
                          aria-hidden="true"
                        ></i>
                        <div
                          className="accordion-body-content-link d-flex justify-content-between "
                          style={{ width: "100%" }}
                        >
                          <div className="d-flex" style={{ width: "100%" }}>
                            <a href="#2">Installing Python</a>

                            <span className="ms-auto accordion-body-content-time">
                              <a href="#2" className="me-4">
                                Preview
                              </a>
                              <span> 04:07 </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {hidden === false ? (
              <>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOne4"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne4"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne4"
                    >
                      <h4> Functions! </h4>
                      <span>
                        10 lectures • <span>57min</span>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne4"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingOne4"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                            <i
                              className="fa fa-play-circle me-3"
                              aria-hidden="true"
                            ></i>
                            <div
                              className="accordion-body-content-link d-flex justify-content-between"
                              style={{ width: "100%" }}
                            >
                              <div className="d-flex" style={{ width: "100%" }}>
                                <a href="#2">Installing Python</a>

                                <span className="ms-auto accordion-body-content-time">
                                  <a href="#2" className="me-4">
                                    Preview
                                  </a>
                                  <span> 04:07 </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                            <i
                              className="fa fa-play-circle me-3"
                              aria-hidden="true"
                            ></i>
                            <div
                              className="accordion-body-content-link d-flex justify-content-between "
                              style={{ width: "100%" }}
                            >
                              <div className="d-flex" style={{ width: "100%" }}>
                                <a href="#2">Installing Python</a>

                                <span className="ms-auto accordion-body-content-time">
                                  <a href="#2" className="me-4">
                                    Preview
                                  </a>
                                  <span> 04:07 </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                            <i
                              className="fa fa-play-circle me-3"
                              aria-hidden="true"
                            ></i>
                            <div
                              className="accordion-body-content-link d-flex justify-content-between "
                              style={{ width: "100%" }}
                            >
                              <div className="d-flex" style={{ width: "100%" }}>
                                <a href="#2">Installing Python</a>

                                <span className="ms-auto accordion-body-content-time">
                                  <a href="#2" className="me-4">
                                    Preview
                                  </a>
                                  <span> 04:07 </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOne4"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne4"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne4"
                    >
                      <h4> Functions! </h4>
                      <span>
                        10 lectures • <span>57min</span>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne4"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingOne4"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                            <i
                              className="fa fa-play-circle me-3"
                              aria-hidden="true"
                            ></i>
                            <div
                              className="accordion-body-content-link d-flex justify-content-between"
                              style={{ width: "100%" }}
                            >
                              <div className="d-flex" style={{ width: "100%" }}>
                                <a href="#2">Installing Python</a>

                                <span className="ms-auto accordion-body-content-time">
                                  <a href="#2" className="me-4">
                                    Preview
                                  </a>
                                  <span> 04:07 </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                            <i
                              className="fa fa-play-circle me-3"
                              aria-hidden="true"
                            ></i>
                            <div
                              className="accordion-body-content-link d-flex justify-content-between "
                              style={{ width: "100%" }}
                            >
                              <div className="d-flex" style={{ width: "100%" }}>
                                <a href="#2">Installing Python</a>

                                <span className="ms-auto accordion-body-content-time">
                                  <a href="#2" className="me-4">
                                    Preview
                                  </a>
                                  <span> 04:07 </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="accordion-body-content d-flex justify-content-between align-items-center mb-3">
                            <i
                              className="fa fa-play-circle me-3"
                              aria-hidden="true"
                            ></i>
                            <div
                              className="accordion-body-content-link d-flex justify-content-between "
                              style={{ width: "100%" }}
                            >
                              <div className="d-flex" style={{ width: "100%" }}>
                                <a href="#2">Installing Python</a>

                                <span className="ms-auto accordion-body-content-time">
                                  <a href="#2" className="me-4">
                                    Preview
                                  </a>
                                  <span> 04:07 </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            <button className="readmore my-4" onClick={handleClick}> <span>Read {hidden ? 'More': 'Less'} </span> </button>
          </div>
        </div>
      </div>
    </div>
  );
}
