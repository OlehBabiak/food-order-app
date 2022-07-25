import Context from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  userData: {},
};

const defaultThemeState = {
  isThemeDark: false,
};

const defaultLoadState = {
  error: false,
  loading: false,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount; // змінена заг вартість

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    ); // індекс присутнього товару в корзині

    const existingCartItem = state.items[existingCartItemIndex]; // товар який присутній

    let updatedItems; //змінений масив товарів

    if (existingCartItem) {
      //якщо такий товар вже є
      const updatedItem = {
        //товар що змінюється
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount, //в присутньому товарі змінюєм к-сть товару
      };
      updatedItems = [...state.items]; //оновлені товари
      updatedItems[existingCartItemIndex] = updatedItem; //товар з індексом що повторюється
    } else {
      updatedItems = state.items.concat(action.item); //якщо овар не повторюваний, додаєм новий тоавр
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      userData: {},
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    ); // індекс присутнього товару в корзині
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      userData: {},
    };
  }

  if (action.type === "ADD_USER_DATA") {
    state.userData = action.form;
    console.log(state.userData);
    return {
      items: state.items,
      totalAmount: state.totalAmount,
      userData: state.userData,
    };
  }

  if (action.type === "CLEAR_STATE") {
    return {
      items: [],
      totalAmount: 0,
      userData: {},
    };
  }

  return defaultCartState;
};

const themeReducer = (state, action) => {
  if (action.type === "TOGGLE_THEME") {
    return {
      isThemeDark: !state.isThemeDark,
    };
  }
  return defaultThemeState;
};

const loadReducer = (state, action) => {
  if (action.type === "TOGGLE_ERROR") {
    return {
      error: action.bool,
    };
  }

  if (action.type === "TOGGLE_LOADER") {
    console.log("load: ", state.loader);
    return {
      loading: action.bool,
    };
  }
};

function ContextProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const [themeState, dispatchThemeAction] = useReducer(
    themeReducer,
    defaultThemeState
  );
  const [loadState, dispatchLoadAction] = useReducer(
    loadReducer,
    defaultLoadState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const toggleThemeColor = () => {
    dispatchThemeAction({ type: "TOGGLE_THEME" });
  };

  const onAddUserData = (form) => {
    dispatchCartAction({ type: "ADD_USER_DATA", form: form });
  };

  const clearState = () => {
    dispatchCartAction({ type: "CLEAR_STATE" });
  };

  const changeErrState = (val) => {
    dispatchLoadAction({ type: "TOGGLE_ERROR", bool: val });
  };

  const changeLoad = (val) => {
    dispatchLoadAction({ type: "TOGGLE_LOADER", bool: val });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    isThemeDark: themeState.isThemeDark,
    order: cartState,
    loadState: loadState,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    changeTheme: toggleThemeColor,
    addUserData: onAddUserData,
    clearState: clearState,
    changeErrState,
    changeLoad,
  };

  return (
    <Context.Provider value={{ cartContext }}>{children}</Context.Provider>
  );
}

export default ContextProvider;
