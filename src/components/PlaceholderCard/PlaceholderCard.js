import React from "react";

export default function PlaceholderCard() {
  return (
    <div className="card" aria-hidden="true">
      <img
        src="https://via.placeholder.com/240x135?text=Loading"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
        </p>
        <a href="#s" className="btn disabled placeholder col-6" aria-label="btn" > </a>
      </div>
    </div>
  );
}
