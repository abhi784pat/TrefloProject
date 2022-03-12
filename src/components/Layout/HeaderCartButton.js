import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  // console.log(btnIsHighlighted);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    // if (items.length === 0) {
    //   return;
    // }
    // console.log("true1");
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      // console.log("false1");
      setBtnIsHighlighted(false);
    }, 5000);

    return () => {
      // console.log("cleanup");
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <button className={btnClasses}>
        <span className={classes.icon}>
          <CartIcon />
        </span>

        <span>Your Cart</span>

        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </Link>
  );
};

export default HeaderCartButton;
