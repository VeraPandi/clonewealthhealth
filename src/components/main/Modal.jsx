import React from "react";

const Modal = ({ props, setProps, text }) => {
   return (
      <div className="modal">
         <button
            type="button"
            value={`${props}`}
            className="modal-close-btn"
            onClick={() => setProps(props)}
         >
            Close
         </button>
         <span className="modal-text">{text}</span>
      </div>
   );
};

export default Modal;
