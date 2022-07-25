import classes from "./Cartnput.module.css";

const CartInput = ({ onValueChange, input, register, errors }) => {
  return (
    <div className={classes["app-add-form"]}>
      <input {...register} {...input} onChange={onValueChange} />
      <div className={classes["error-message"]}>
        {errors && <p>{errors?.message || "Error"}</p>}
      </div>
    </div>
  );
};

export default CartInput;
