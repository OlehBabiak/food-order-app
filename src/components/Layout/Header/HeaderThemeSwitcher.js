import classes from "./HeaderThemeSwitcher.module.css";
import { useContext, useState } from "react";
import Context from "../../../store/cart-context";

const HeaderThemeSwitcher = () => {
  const { cartContext } = useContext(Context);
  const [isSwitcherOn, setIsSwitcherOn] = useState(true);

  const switcher = (switcher, theme) => {
    return `${switcher} ${!isSwitcherOn ? theme : ""}`;
  };

  const switchHandler = () => {
    setIsSwitcherOn((prev) => !prev);
    cartContext.changeTheme();
  };

  return (
    <div
      onClick={switchHandler}
      className={switcher(classes.switcher, classes.outLightTheme)}
    >
      <div
        className={switcher(classes.innerSwitcher, classes.innerLightTheme)}
      ></div>
    </div>
  );
};

export default HeaderThemeSwitcher;
