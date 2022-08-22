import React from "react";

export default function Card(props) {
  const {image, title, auther, starRate, students, price} =  props.CardData;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="course-card">
        <div className="card-img">
          <img
            src={require(`../../assets/courses/${image}`)}
            alt={image}
          />
        </div>
        <h3>
          <a href="#h"> { title } </a>
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
    </div>
  );
}
