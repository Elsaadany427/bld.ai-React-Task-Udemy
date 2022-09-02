import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { CardDate } from "../../Database/CardData";

export default function Courses(props) {
  const [Tap, setTap] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Sara-Samer/udemy/tabs")
      .then((data) => data.json())
      .then((data) => {
        setTap(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* Heading title */}
      <div className="Head-title">
        <h1>A broad selection of courses</h1>
        <p>
          Choose from 185,000 online video courses with new additions published
          every month
        </p>
      </div>
      <div className="cources-tab">
        <nav className="cources-nav">
          <ul className="cources-list">
            {Object.keys(Tap).map((element, index) => (
              <li className={`cources-item ${index === 0 && "active"}`} key={element}>
                <a href={`#${element}`}>{element}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container courses">
        <div className="row" style={{ clear: "both" }}>
          {CardDate.map((card) => (
            <Card key={card.id} CardData={card} />
          ))}
        </div>
      </div>
    </>
  );
}
