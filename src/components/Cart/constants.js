import { OrderPayloadKey } from "../../common/enums/enums";

const DEFAULT_FORM_PAYLOAD = {
  [OrderPayloadKey.USERNAME]: "",
  [OrderPayloadKey.EMAIL]: "",
  [OrderPayloadKey.PHONE]: "",
  [OrderPayloadKey.ADDRESS]: "",
};

export { DEFAULT_FORM_PAYLOAD };
