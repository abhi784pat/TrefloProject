import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.summary}>
          <div>
            <h5>Price</h5>
            <span className={classes.price}>{price}</span>
          </div>

          <br />
          <div>
            <h5>Size</h5>
            <span className={classes.price}>{props.size}</span>
          </div>

          <br />
          <div>
            <h5>Quantity</h5>
            <span className={classes.amount}>x {props.amount}</span>
          </div>

          <br />
          <div>
            <h5>Toppings</h5>
            <span className={classes.price}>{props.toppings}</span>
          </div>
        </div>
      </div>

      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
