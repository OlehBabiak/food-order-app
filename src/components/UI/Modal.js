import classes from "./Modal.module.css";
import ReactDom from "react-dom";
import { Fragment } from "react";

const BackDrop = ({ onClose }) => {
  return <div onClick={onClose} className={classes.backdrop} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay-cart-root");

const Modal = ({ children, onClose }) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<BackDrop onClose={onClose} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
