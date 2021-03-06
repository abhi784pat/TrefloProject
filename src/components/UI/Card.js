import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={props.cart === true ? classes.cardcart : classes.card}>
      {props.children}
    </div>
  );
};

export default Card;
