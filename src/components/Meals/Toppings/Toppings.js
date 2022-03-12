import { useState, useContext } from "react";
import CartContext from "../../../store/cart-context";
import Modal from "../../UI/Modal";
import "./Toppings.css";

const Toppings = (props) => {
  const cartCtx = useContext(CartContext);

  const [size, setSize] = useState("");
  const [toppings, setTopping] = useState("None");
  const [error, setError] = useState(false);
  //const [toppings, setToppings] = useState("");
  const SizeChangehandler = (event) => {
    setSize(event.target.value);
  };
  const Toppingschangehandler = (event) => {
    setTopping(event.target.value);
  };
  const submithandler = (event) => {
    //console.log("Hello");
    event.preventDefault();
    if (size === "") {
      setError(true);
    } else {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: props.amount,
        price: props.price,
        size,
        toppings,
      });
      props.onClose();
    }
  };
  const Error = (
    <div className="error">
      <p>Please Select At least One Size</p>
    </div>
  );
  const closehandler = () => {
    props.onClose();
  };
  const Toppings = props.isToppings[0].items.map((toppings) => (
    <span>
      <input
        type={"radio"}
        value={toppings.name}
        onChange={Toppingschangehandler}
      />
      {toppings.name}
    </span>
  ));

  return (
    <Modal>
      <div className="actions">
        <form onSubmit={submithandler}>
          <div>
            <h3>Size</h3>
            <input
              type="radio"
              value="Small"
              name="size"
              //checked={true}
              onChange={SizeChangehandler}
            />{" "}
            Small
            <input
              type="radio"
              value="Medium"
              name="size"
              onChange={SizeChangehandler}
            />{" "}
            Medium
            <input
              type="radio"
              value="Large"
              name="size"
              onChange={SizeChangehandler}
            />{" "}
            Large
          </div>
          {props.isToppings[0].isRadio && (
            <div>
              <h3>Toppings</h3>
              {Toppings}
            </div>
          )}
          <div>
            <button type="Submit">Submit</button>

            <button onClick={closehandler}>Close</button>
          </div>

          {error && Error}
        </form>
      </div>
    </Modal>
  );
};

export default Toppings;
