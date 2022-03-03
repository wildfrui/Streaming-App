import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ options, title, description }) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standart modal visible active">
        <div className="header">{title}</div>
        <div className="content">{description}</div>
        <div>{options}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
