import classes from "./Input.module.css";
import { forwardRef } from "react";

const Input = forwardRef(({ input, label }, ref) => {
  return (
    <div className={`${classes.input} ${input.style}`}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
