import classes from "./MealsSummary.module.css";
import Context from "../../store/cart-context";
import { useContext } from "react";

const MealsSummary = ({ summary }) => {
  const { cartContext } = useContext(Context);
  const isDark = cartContext.isThemeDark;
  const lightClasses = `${classes.summary} ${isDark ? classes.light : ""}`;

  return (
    <section className={lightClasses}>
      <h2>{summary.header}</h2>
      <p>{summary.desc}</p>
    </section>
  );
};

export default MealsSummary;
