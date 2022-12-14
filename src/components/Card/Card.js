import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { id, image, title, auther, starRate, students, price } = props.CardData;
    return (
      <>
        <div
          className="course-card"
        >
          <div className="card-img">
            <img src={`${image}`} alt={image} />
          </div>
          <h3>
            <Link to={`/course/${id}`} state={props.CardData} > {title} </Link>
          </h3>
          <div>
            <span> {auther} </span>
          </div>
          <div className="card-stars-container">
            <span>
              <span> {starRate} </span>
              <span className="card-stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </span>
              <span>({students})</span>
            </span>
          </div>
          <div className="card-price">
            <span> E£{price} </span>
          </div>
        </div>
      </>
    );
  }

