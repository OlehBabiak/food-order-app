import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import Context from "../../../store/cart-context";
import { useContext } from "react";

const MealItem = ({ name, description, price, id }) => {
  const { cartContext } = useContext(Context);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
