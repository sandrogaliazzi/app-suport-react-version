import React from "react";

export default function Modal({ id, isCentered, modalTitle, icon, children, size }) {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby={id}
      aria-hidden="true"
    >
      <div className={`modal-dialog modal-${size} ${isCentered ? "modal-dialog-centered" : ""}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addMessageModal">
              {modalTitle} <i className={icon}> </i>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}