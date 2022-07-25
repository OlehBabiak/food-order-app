import { OrderValidationRule } from "./order-validation-rule.enum";

const OrderValidationMessage = {
  USERNAME_REQUIRE: "Username is required",
  USERNAME_MIN_LENGTH: `Username must be at least ${OrderValidationRule.USERNAME_MIN_LENGTH} characters long`,
  USERNAME_MAX_LENGTH: `Username must be at most ${OrderValidationRule.USERNAME_MAX_LENGTH} characters long`,
  USERNAME_FIRST_LETTER: "The first letter must be capitalized",
  EMAIL_REQUIRE: "Email is required",
  EMAIL_WRONG: "Email is wrong",
  ADDRESS_REQUIRE: "ADDRESS is required",
  ADDRESS_MIN_LENGTH: `Address must be at least ${OrderValidationRule.ADDRESS_MIN_LENGTH} characters long`,
  ADDRESS_MAX_LENGTH: `Address must be at most ${OrderValidationRule.ADDRESS_MAX_LENGTH} characters long`,
  PHONE_REQUIRE: "Phone is required",
  PHONE_VALIDATION: "Wrong phone value",
};

export { OrderValidationMessage };
