import Search from "../../UI/ConnectButton/Search/Search";
import React from "react";
import cl from "./RightBar.module.css";
import { Link } from "react-router-dom";

const RightBar = () => {
  let basicArticles = [
    { text: "Real Performance Paradox" },
    { text: "The Email Scam" },
    { text: "The forgetten benefits" },
    { text: "Become a Web3 Developer" },
  ];
  return (
    <div className={cl.container}>
      <div className={cl.search}>
        <Search />
      </div>
      <div className={cl.title}>
        <p>What"s today</p>
      </div>
      <div className={cl.topic}>
        <div className={cl.headers}>
          {basicArticles.map((item, index) => (
            <Link to="/">
              <div key={index} className={cl.article}>
                {item.text}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
