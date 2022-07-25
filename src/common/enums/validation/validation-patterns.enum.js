import { OrderValidationRule } from "./order-validation-rule.enum";
import { OrderValidationMessage } from "./order-validation-message.enum";

const validationPatterns = {
  userMinLengthValid: {
    value: OrderValidationRule.USERNAME_MIN_LENGTH,
    message: OrderValidationMessage.USERNAME_MIN_LENGTH,
  },

  userMaxLengthValid: {
    value: OrderValidationRule.USERNAME_MAX_LENGTH,
    message: OrderValidationMessage.USERNAME_MAX_LENGTH,
  },

  addressMinLengthValid: {
    value: OrderValidationRule.ADDRESS_MIN_LENGTH,
    message: OrderValidationMessage.USERNAME_MIN_LENGTH,
  },

  addressMaxLengthValid: {
    value: OrderValidationRule.ADDRESS_MAX_LENGTH,
    message: OrderValidationMessage.ADDRESS_MAX_LENGTH,
  },

  textInputPattern: {
    value: /^[a-zA-Z][a-zA-Z0-9]{1,20}$/,
    message: OrderValidationMessage.USERNAME_FIRST_LETTER,
  },

  emailPattern: {
    value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
    message: OrderValidationMessage.EMAIL_WRONG,
  },

  phoneVPattern: {
    value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
    message: OrderValidationMessage.PHONE_VALIDATION,
  },
};

export { validationPatterns };
