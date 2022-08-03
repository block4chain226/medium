import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import "../css/auth.css";
import logo from "../images/logo/logo.png";
import ConnectButton from "../UI/ConnectButton/ConnectButton";

const Auth = ({ setAccounts }) => {
  async function connect() {
    if (window.ethereum) {
      const resolve = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(resolve);
    }
  }
  return (
    <div className="auth">
      <div className="container">
        <div className="logo">
          <img className="img" src={logo}></img>
          <p>Medium</p>
        </div>
        <ConnectButton onClick={connect}>Connect wallet</ConnectButton>
      </div>
    </div>
  );
};

export default Auth;
