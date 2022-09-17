import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "../Category/Category";

export default function Categories() {
  const [categoriesData, setCategoriesData] = useState([]);
  // Fetch tabs
  useEffect(() => {
    axios
      .get("http://localhost:4000/CategoryData")
      .then((data) => {
        setCategoriesData(data.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div className="categories container">
      <div className="categories-title">
        <h2>Top categories</h2>
      </div>
      <div className="row">
        {categoriesData.map((categoty) => (
          <Category key={categoty.id} CategoryDate={categoty} />
        ))}
      </div>
    </div>
  );
}
