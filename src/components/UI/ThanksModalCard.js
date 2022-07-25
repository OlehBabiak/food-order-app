import Modal from "./Modal";
import classes from "./ThanksModalCard.module.css";

const ThanksModalCard = ({ content }) => {
  return (
    <Modal>
      <div className={classes["thanks-wrapper"]}>{content}</div>
    </Modal>
  );
};

export default ThanksModalCard;
