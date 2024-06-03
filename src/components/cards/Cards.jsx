import React from "react";
import { Link } from "react-router-dom";
import classes from "./Cards.module.css";

export default function Cards({ foods }) {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {foods.map((food) => (
          <li key={food.id}>
            <Link to={`/food/${food.id}`}>
              <img
                className={classes.image}
                src={`${food.imageUrl}`}
                alt={food.name}
              />
              <h2>{food.name}</h2>
              <h2>{food.price}$</h2>
            </Link>
          </li>
        ))}
      </ul>
      <div>{foods.length}</div>
    </div>
  );
}
