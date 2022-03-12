import { Fragment } from "react";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    props.onOpent();
  };
  // const opentopping = () => {
  //   setToppings(true);
  // };

  return (
    <Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        {/* <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "1",
            step: "0",
            defaultValue: "1",
          }}
        /> */}
        <button>+ Add</button>
      </form>
    </Fragment>
  );
};

export default MealItemForm;
