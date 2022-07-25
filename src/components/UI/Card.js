import classes from "./Card.module.css";
import Context from "../../store/cart-context";
import { useContext } from "react";

const Card = ({ children }) => {
  const { cartContext } = useContext(Context);
  const isDark = cartContext.isThemeDark;
  const lightClasses = `${classes.card} ${isDark ? classes.light : ""}`;

  return <div className={lightClasses}>{children}</div>;
};

export default Card;
