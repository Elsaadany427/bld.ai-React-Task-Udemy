import React from "react";
import "./NotFounded.css";

function NotFounded() {
  return (
    <>
      <div className="notfound container">
        <div className="row">
        <div className="col-12">
          <div className="notfound-content">
            <div className="notfound-404">
              <h1>404</h1>
            </div>
            <h2>Oops! This Page Could Not Be Found</h2>
            <p>
              Sorry but the page you are looking for does not exist, have been
              removed. name changed or is temporarily unavailable
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFounded;
