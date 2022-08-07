import { useEffect, useState, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import AuthContext from "./context/AuthContext";
import NavBar from "./components/NavBar/NavBar";
import Search from "./UI/ConnectButton/Search/Search";
import RightBar from "./components/RightBar/RightBar";
import HomeScreen from "./pages/HomeScreen";
import NewStory from "./pages/NewStory";
import MyBlog from "./pages/MyBlog";
import Blog1 from "./components/Blog/Blog1";

function App() {
  const { accounts, setAccounts } = useContext(AuthContext);
  const isConnected = Boolean(accounts[0]);
  console.log(accounts[0]);
  console.log(localStorage.getItem("loged"));

  return (
    <>
      <Router>
        {accounts.length > 0 || localStorage.getItem("loged") ? (
          <div className="App">
            <div className="container1">
              <div className="col1">
                <NavBar />
              </div>
              <div className="col2">
                <Routes>
                  <Route path="/" element={<HomeScreen />} />
                  <Route indexed element={<HomeScreen />} />
                  <Route path="/newStory" element={<NewStory />} />
                  <Route path="/myBlogs" element={<MyBlog />} />
                  <Route path="/blog1" element={<Blog1 />} />
                  <Route path="/blog1/:url" element={<Blog1 />} />
                </Routes>
              </div>
              <div className="col3">
                <RightBar />
              </div>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/auth" element={<Auth setAccounts={setAccounts} />} />
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
