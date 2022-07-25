import Card from "../../UI/Card";
import classes from "./RestaurantsNavPage.module.css";
import { Link } from "react-router-dom";
import mac from "../../../assets/McDonalds_Golden_Arches.png";
import kfc from "../../../assets/KFC.svg";
import bigBurger from "../../../assets/IMG_0529.png";
import tastyBurger from "../../../assets/unnamed.png";

const RestaurantsNavPage = () => {
  return (
    <Card>
      <div className={classes.home}>
        <Link to="/mac">
          <img className={classes.image} src={mac} alt="mac" />
        </Link>
        <Link to="/kfc">
          <img className={classes.image} src={kfc} alt="kfc" />
        </Link>
        <Link to="/big-burger">
          <img className={classes.image} src={bigBurger} alt="big burger" />
        </Link>
        <Link to="/tasty-burger">
          <img className={classes.image} src={tastyBurger} alt="tasty burger" />
        </Link>
      </div>
    </Card>
  );
};

export default RestaurantsNavPage;
