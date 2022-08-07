import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import "../css/auth.css";
import logo from "../images/logo/logo.png";
import ConnectButton from "../UI/ConnectButton/ConnectButton";
import { Navigate, useNavigate } from "react-router-dom";

const Auth = () => {
  const { setAccounts } = useContext(AuthContext);
  const navigate = useNavigate();
  async function connect() {
    if (window.ethereum) {
      const resolve = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(resolve);
      localStorage.setItem("loged", resolve);
      // navigate("/", { replace: true });
      // navigate(0);
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
