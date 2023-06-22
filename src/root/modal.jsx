import React from "react";
import ReactDOM from "react-dom";

const Modal = () => {
  return ReactDOM.createPortal(
    <div>Modal</div>,
    document.getElementById("portal")
  );
};

export default Modal;
