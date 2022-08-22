import React from "react";
import { CategoryData } from "../../Database/CategoryData";
import Category from "../../components/Category/Category";

export default function Categories(props) {
  return (
    <div className="categories container">
      <div className="categories-title">
        <h2>Top categories</h2>
      </div>
      <div className="row">
        {CategoryData.map((categoty) => (
          <Category key={categoty.id} CategoryDate={categoty} />
        ))}
      </div>
    </div>
  );
}
