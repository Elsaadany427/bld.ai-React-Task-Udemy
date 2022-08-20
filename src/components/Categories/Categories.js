import React from "react";

export default function Categories(props) {
  return (
    <div className="categories container">
      <div className="categories-title">
        <h2>Top categories</h2>
      </div>
      <div className="row">{props.children}</div>
    </div>
  );
}
