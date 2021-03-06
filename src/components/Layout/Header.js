import { Fragment } from "react";

import mealsimage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>

        <HeaderCartButton />
      </header>
      <div>
        <img
          className={classes["main-image"]}
          src={mealsimage}
          alt="A table full of delicious food"
        />
      </div>
    </Fragment>
  );
};

export default Header;
