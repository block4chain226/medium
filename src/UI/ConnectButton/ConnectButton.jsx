import React from "react";
import cl from "./connectButton.module.css";

const ConnectButton = ({ children, ...props }) => {
  return (
    <button {...props} className={cl.button}>
      {children}
    </button>
  );
};

export default ConnectButton;
