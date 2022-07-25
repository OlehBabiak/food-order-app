import Header from "./components/Layout/Header/Header";
import { Fragment, useContext, useState } from "react";
import Cart from "./components/Cart/Cart";
import RoutesComp from "./components/RoutesComp";
import ThanksModalCard from "./components/UI/ThanksModalCard";
import Footer from "./components/Layout/Header/Footer";
import classes from "./App.module.css";
import Context from "./store/cart-context";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [thanksModalCardIsVisible, setThanksModalCardIsVisible] =
    useState(false);
  const [content, setContent] = useState("");
  const { cartContext } = useContext(Context);
  const isDark = cartContext.isThemeDark;
  const lightClasses = `${classes.dark} ${isDark ? classes.light : ""}`;

  const cartHandler = () => {
    setCartIsVisible(!cartIsVisible);
  };

  const thanksCardHandler = (val, message) => {
    setThanksModalCardIsVisible(val);
    setContent(message);
    setTimeout(() => {
      setThanksModalCardIsVisible(false);
    }, 4000);
  };

  return (
    <Fragment>
      {cartIsVisible && (
        <Cart onShowCard={thanksCardHandler} onCloseCart={cartHandler} />
      )}
      {thanksModalCardIsVisible && <ThanksModalCard content={content} />}
      <Header onShowCart={cartHandler} />
      <main className={lightClasses} style={{ flex: "1 1 auto" }}>
        <RoutesComp />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
