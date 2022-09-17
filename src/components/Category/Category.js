import React from "react";

export default function Category(props) {
  const {name, image} = props.CategoryDate;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="category-content mx-auto">
        <figure>
          <a >
            <img
              src={`/categories/${image}`}
              alt={image}
            />
          </a>
        </figure>
        <figcaption> {name} </figcaption>
      </div>
    </div>
  );
}
