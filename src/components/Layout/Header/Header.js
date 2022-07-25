import { Fragment } from "react";
import mealsImage from "../../../assets/88.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import HeaderThemeSwitcher from "./HeaderThemeSwitcher";
import { Link } from "react-router-dom";

const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link className={classes.link} to="/">
          <h1>Delivery app</h1>
        </Link>
        <HeaderCartButton onClick={onShowCart}>Cart</HeaderCartButton>
        <HeaderThemeSwitcher />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
