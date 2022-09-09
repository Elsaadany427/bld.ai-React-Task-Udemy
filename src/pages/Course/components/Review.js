import React, { useState, useContext } from "react";
import "./Review.css";
import { CourseContext } from "../../../State/courseContext";

export default function Review() {
  const [hideSeeMore, sethideSeeMore] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setdislike] = useState(false);

  const course = useContext(CourseContext);
  const defaultReviewer = [];
  const hiddenReviewer = [];

  const handleLike = () => {
    setLike(!like);
  }
  for (let i = 0; i < Math.min(5, course.reviews.length); i++) {
    defaultReviewer.push(course.reviews[i]);
  }

  for (
    let i = Math.min(5, course.reviews.length);
    i < course.reviews.length;
    i++
  ) {
    hiddenReviewer.push(course.reviews[i]);
  }

  // To handle see more
  const handleClick = () => {
    sethideSeeMore(!hideSeeMore);
  };

  return (
    <div className="container component-margin review">
      <div className="row">
        <div className="col-md-7 col-12">
          <h2 className="review-title"> Review </h2>
          <div className="row">
            <div className="col-md-8 col-12 mb-4">
              <form className="review-form d-flex">
                <input type="text" className="review-input" />
                <button className="review-seach-icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <div className="col-md-4 col-12">
              <form className="review-form d-flex">
                <input
                  type="text"
                  className="review-input review-input-rate"
                  placeholder="All Ratings"
                />
              </form>
            </div>
          </div>

          {defaultReviewer.map((reviewer) => (
            <div className="row mt-5">
              <div className="col-1">
                <div className="review-img">
                  <span> {reviewer.reviewer.substring(0, 1)} </span>
                </div>
              </div>
              <div className="col-9 mt-2">
                <h3 className="review-auther-name">{reviewer.reviewer}</h3>
                <span className="review-stars">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-half-o" aria-hidden="true"></i>
                </span>
                <span className="ms-1"> {reviewer.createAt.slice(0, 10)} </span>
                <div className="review-comment my-3">
                  <span>{reviewer.review_text}</span>
                </div>
                <span className="mt-3 review-helpful">
                  Was this review Helpful ?
                </span>
                <div className="review-comment mt-2">
                  <div>
                    {!like ? (
                      <i className="fa fa-thumbs-o-up" aria-hidden="true" onClick={handleLike}></i>
                    ) : (
                      <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                    )}
                  </div>
                  <div>
                    {!dislike ? (
                      <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                    ) : (
                      <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                    )}
                  </div>
                  <a className="review-report">Report</a>
                </div>
              </div>
            </div>
          ))}

          {hideSeeMore === true
            ? hiddenReviewer &&
              hiddenReviewer.map((reviewer) => (
                <div className="row mt-5">
                  <div className="col-1">
                    <div className="review-img">
                      <span> {reviewer.reviewer.substring(0, 1)} </span>
                    </div>
                  </div>
                  <div className="col-9 mt-2">
                    <h3 className="review-auther-name">{reviewer.reviewer}</h3>
                    <span className="review-stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-half-o" aria-hidden="true"></i>
                    </span>
                    <span className="ms-1">
                      {" "}
                      {reviewer.createAt.slice(0, 10)}{" "}
                    </span>
                    <div className="review-comment my-3">
                      <span>{reviewer.review_text}</span>
                    </div>
                    <span className="mt-3 review-helpful">
                      Was this review Helpful ?
                    </span>
                    <div className="review-comment mt-2">
                      <div>
                        <i
                          className={`fa fa-thumbs-o-up`}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div>
                        <i
                          className={`fa fa-thumbs-o-down`}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <a className="review-report">Report</a>
                    </div>
                  </div>
                </div>
              ))
            : null}

          {hiddenReviewer.length > 0 && (
            <button className="readmore my-4" onClick={handleClick}>
              {" "}
              <span>Read {hideSeeMore ? "Less" : "More"} </span>{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
