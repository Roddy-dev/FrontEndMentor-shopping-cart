import React from "react";
import ReactDOM from "react-dom";
import "../index.css";

// this is the backdrop for the modal

export default function Backdrop({ children }) {
  return ReactDOM.createPortal(
    <div className="backdrop">{children}</div>,
    document.getElementById("portal")
  );
}
