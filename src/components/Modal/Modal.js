import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

const animatingTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  const nodeRef = React.useRef(null);

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
      in={props.show}
      timeout={animatingTiming}
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      <div ref={nodeRef} className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
