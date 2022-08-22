import React from "react";
import Card from "../Card/Card";
import { CardDate } from "../../Database/CardData";

export default function Courses(props) {
  return (
    <>
      {/* Main content -- Heading title */}
      <div className="Head-title">
        <h1>A broad selection of courses</h1>
        <p>
          Choose from 185,000 online video courses with new additions published
          every month
        </p>
      </div>
      <div className="container courses">
        <div className="row">
          {CardDate.map((card) => (
            <Card key={card.id} CardData={card} />
          ))}
        </div>
      </div>
    </>
  );
}
