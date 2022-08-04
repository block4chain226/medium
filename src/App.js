import { useEffect, useState, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Layout from "./components/Layout";
import AuthContext from "./context/AuthContext";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const { accounts, setAccounts } = useContext(AuthContext);
  const isConnected = Boolean(accounts[0]);

  return (
    <>
      {accounts.length > 0 || localStorage.getItem("loged") ? (
        <div className="App">
          <div className="container1">
            <div className="col1">
              <NavBar />
            </div>
            <div className="col2">kil</div>
            <div className="col3">dffdb</div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Auth setAccounts={setAccounts} />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
