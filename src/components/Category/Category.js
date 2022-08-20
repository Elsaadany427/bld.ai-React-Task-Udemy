import React from "react";

export default function Category(props) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="category-content mx-auto">
        <figure>
          <a href="#S">
            <img
              src={require(`../../assets/categories/${props.CategoryDate.image}`)}
              alt={props.CategoryDate.image}
            />
          </a>
        </figure>
        <figcaption> {props.CategoryDate.name} </figcaption>
      </div>
    </div>
  );
}
