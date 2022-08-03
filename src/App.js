import { useEffect, useState, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
import AuthContext from "./context/AuthContext";

function App() {
  const [accounts, setAccounts] = useState([]);
  const isConnected = Boolean(accounts[0]);

  return (
    <>
      <AuthProvider>
        {isConnected ? (
          <div className="App">
            <div className="container">
              <div className="col1"></div>
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
      </AuthProvider>
    </>
  );
}

export default App;
