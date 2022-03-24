import React from "react";
import "./Meal.css";

const Meal = (props) => {
  const {
    strTags,
    strArea,
    strMealThumb,
    strSource,
    strMeal,
    strYoutube,
    strInstructions,
  } = props.meal;
  return (
    <div className="meal">
      <h2>meal name: {strMeal}</h2>
      <h5>tags: {strTags}</h5>
      <h5>Area: {strArea}</h5>
      <img src={strMealThumb} alt="no img!" />
      <br />
      <a href={strSource}>Source</a>
      <br />
      <a href={strYoutube}>Youtube Link</a>
      <p>instruction: {strInstructions.slice(0, 100)}</p>
    </div>
  );
};

export default Meal;
