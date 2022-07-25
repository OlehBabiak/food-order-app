import Card from "../UI/Card";
import classes from "./errorMessage.module.css";

const ErrorMessage = ({ content }) => {
  return (
    <Card>
      <h2 className={classes.error}>{content}</h2>
    </Card>
  );
};

export default ErrorMessage;
