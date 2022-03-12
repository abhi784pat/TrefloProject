import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

import Toppings from "../Toppings/Toppings";

const MealItem = (props) => {
  const [toppings, setToppings] = useState(false);

  const price = props.price;

  const closetopping = () => {
    setToppings(false);
  };
  const opentopping = () => {
    setToppings(true);
  };

  var ratingstar;
  if (Number.isInteger(props.rating)) {
    const stars = Array(props.rating).fill(0);
    ratingstar = stars.map((_, index) => {
      return <FaStar key={index} color="DarkYellow" />;
    });
  } else {
    const stars = Array(Math.ceil(props.rating)).fill(0);
    ratingstar = stars.map((_, index) => {
      if (index !== stars.length - 1) {
        return <FaStar key={index} />;
      } else {
        return <FaStarHalfAlt key={index} />;
      }
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <div>
          <img
            className={classes["main-image"]}
            src={props.img_url}
            alt="A table full of delicious food"
          />
        </div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <span className={classes.price}>₹ {price}</span>
        <br></br>
        <span className={props.type === "Veg" ? classes.type2 : classes.type1}>
          {props.type}
        </span>
        <div>
          <h3>Rating</h3>
          <span>{ratingstar}</span>
        </div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          //onAddToCart={addToCartHandler}
          onOpent={opentopping}
        />
      </div>
      {toppings && (
        <Toppings
          onClose={closetopping}
          id={props.id}
          name={props.name}
          price={props.price}
          amount={1}
          isToppings={props.isTopping}
        />
      )}
    </li>
  );
};

export default MealItem;
