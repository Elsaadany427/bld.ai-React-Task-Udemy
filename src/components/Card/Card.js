import React from "react";

export default function Card(props) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="course-card">
        <div className="card-img">
          <img
            src={require(`../../assets/courses/${props.CardData.image}`)}
            alt={props.CardData.image}
          />
        </div>
        <h3>
          <a href="#h"> { props.CardData.title } </a>
        </h3>
        <div>
          <span> {props.CardData.auther} </span>
        </div>
        <div className="card-stars-container">
          <span>
            <span> {props.CardData.starRate} </span>
            <span className="card-stars">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </span>
            <span>({props.CardData.students})</span>
          </span>
        </div>
        <div className="card-price">
          <span> E£{props.CardData.price} </span>
        </div>
      </div>
    </div>
  );
}
