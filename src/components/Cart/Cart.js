import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import Context from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartInput from "./CartInput";
import FoodAppService from "../services/FoodAppService";
import {
  OrderPayloadKey,
  OrderValidationMessage,
  PageMessages,
  validationPatterns,
} from "../../common/enums/enums";

import { useOrderForm } from "../../hooks/hooks";
import { DEFAULT_FORM_PAYLOAD } from "./constants";

const Cart = ({ onCloseCart, onShowCard }) => {
  const { cartContext } = useContext(Context);
  const [form, setForm] = useState(DEFAULT_FORM_PAYLOAD);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  const foodAppService = new FoodAppService();
  const { register, errors, handleSubmit, reset } = useOrderForm({
    defaultValues: DEFAULT_FORM_PAYLOAD,
  });

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const onValueChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const localSetHandler = (order, content) => {
    localStorage.setItem("order", JSON.stringify(order));
    onShowCard(true, content);
  };

  const onSubmit = () => {
    const json = JSON.stringify(cartContext.order);
    foodAppService
      .postRestOrder(json)
      .then((data) => {
        localSetHandler(data, PageMessages.THANKS_CONTENT);
      })
      .catch(onShowCard(true, PageMessages.ERROR_CONTENT));
    cartContext.clearState();
    onCloseCart();
    reset();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  useEffect(() => {
    cartContext.addUserData(form);
  }, [form]);

  return (
    <Modal onClose={onCloseCart}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CartInput
          register={register(OrderPayloadKey.USERNAME, {
            required: OrderValidationMessage.USERNAME_REQUIRE,
            minLength: validationPatterns.userMinLengthValid,
            maxLength: validationPatterns.userMaxLengthValid,
            pattern: validationPatterns.textInputPattern,
          })}
          errors={errors[OrderPayloadKey.USERNAME]}
          input={{
            type: "text",
            placeholder: "Name",
            name: OrderPayloadKey.USERNAME,
            value: form.name,
          }}
          onValueChange={onValueChange}
        />
        <CartInput
          register={register(OrderPayloadKey.EMAIL, {
            required: OrderValidationMessage.EMAIL_REQUIRE,
            pattern: validationPatterns.emailPattern,
          })}
          errors={errors[OrderPayloadKey.EMAIL]}
          input={{
            type: "email",
            placeholder: "Email",
            name: OrderPayloadKey.EMAIL,
            value: form.email,
          }}
          onValueChange={onValueChange}
        />
        <CartInput
          register={register(OrderPayloadKey.PHONE, {
            required: OrderValidationMessage.PHONE_REQUIRE,
            pattern: validationPatterns.phoneVPattern,
          })}
          errors={errors[OrderPayloadKey.PHONE]}
          input={{
            type: "phone",
            placeholder: "Phone",
            name: OrderPayloadKey.PHONE,
            value: form.phone,
          }}
          onValueChange={onValueChange}
        />
        <CartInput
          register={register(OrderPayloadKey.ADDRESS, {
            required: OrderValidationMessage.ADDRESS_REQUIRE,
            minLength: validationPatterns.addressMinLengthValid,
            maxLength: validationPatterns.addressMaxLengthValid,
          })}
          errors={errors[OrderPayloadKey.ADDRESS]}
          input={{
            type: "address",
            placeholder: "Address",
            name: OrderPayloadKey.ADDRESS,
            value: form.address,
          }}
          onValueChange={onValueChange}
        />
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onCloseCart} className={classes["button--alt"]}>
            Close
          </button>
          {hasItems && (
            <button type={"submit"} className={classes.button}>
              Order
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default Cart;
