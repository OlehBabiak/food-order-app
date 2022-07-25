import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = ({ menu, summary }) => {
  return (
    <Fragment>
      <div>
        <MealsSummary summary={summary} />
        <AvailableMeals menu={menu} />
      </div>
    </Fragment>
  );
};

export default Meals;
