import React, {useState} from "react";
import "./Instructors.css";

export default function Instructors() {
  const [showMore, setShowMore] = useState(false);
  const text = `Avinash Jain is currently a senior at UC Berkeley majoring in
  Electrical Engineering and Computer Science. He's the CEO and
  Founder of TheCodex, an online educational platform focused on
  bringing the best programming content to hundreds of thousands of
  students around the world. His programming journey began at the age
  of 10, starting off with simple Python scripts to crawl the weather.
  Since then, he's worked at numerous companies and is professionally
  experienced in Python, iOS Development and Web Development. He's
  launched a plethora of applications in the App Store amassing
  thousands of downloads. Additionaly, he's competed and won in
  several hackathons around the world including PennApps and NWHacks.
  Avinash has a passion to teach - his enthusiasm and love for
  programming is evident in every video. For the past 7 years he's
  been an instructor on Udemy and he loves motivating and enabling
  others to pursue their programming dreams. He hopes to help students
  realize the power of programming and jumpstart their careers through
  his courses. Checkout TheCodex for all of his courses, fantastic
  discounts, and any guidance or help.`;
  return (
    <div className="container component-margin instructors">
      <div className="row">
        <div className="col-md-7">
          <h2 className="instructors-name">Avinash Jain</h2>
          <p className="instructors-role">
            CEO of TheCodex.me - Teaching 500,000+ Students how to code
          </p>
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0 d-flex align-items-center">
              <div className="col-md-4">
                <img
                  src="/instructor/10260436_946b_6.jpg"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <span className="ms-3">4.4 Instructor Rating</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa fa-certificate" aria-hidden="true"></i>
                      <span className="ms-3 mt-1">73,895 Reviews</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa fa-users" aria-hidden="true"></i>
                      <span className="ms-3 mt-1">892,679 Students</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa fa-play-circle" aria-hidden="true"></i>
                      <span className="ms-3 mt-1">16 Courses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className="instructors-desc">
            {showMore ? text : `${text.substring(0, 250)}`}
            <button
              className="btn showMore ps-0 mt-2 d-block"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}{" "}
              <i
                className={`fa fa-arrow-circle-${showMore ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
            </button>
          </p>
        </div>

        <div className="col-md-7 mt-4">
          <h2 className="instructors-name">The Codex</h2>
          <p className="instructors-role">
          Teaching Python through Projects
          </p>
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0 d-flex align-items-center">
              <div className="col-md-4">
                <img
                  src="/instructor/52310762_220a.jpg"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <span className="ms-3">4.4 Instructor Rating</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa fa-certificate" aria-hidden="true"></i>
                      <span className="ms-3 mt-1">73,895 Reviews</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa fa-users" aria-hidden="true"></i>
                      <span className="ms-3 mt-1">892,679 Students</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa fa-play-circle" aria-hidden="true"></i>
                      <span className="ms-3 mt-1">16 Courses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className="instructors-desc">
            {showMore ? text : `${text.substring(0, 250)}`}
            <button
              className="btn showMore ps-0 mt-2 d-block"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}{" "}
              <i
                className={`fa fa-arrow-circle-${showMore ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
