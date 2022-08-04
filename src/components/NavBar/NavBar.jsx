import React, { useContext } from "react";
import logo from "../../images/logo/logo.png";
import book from "../../images/icons/book.svg";
import logout from "../../images/icons/logout.ico";
import home from "../../images/icons/home.png";
import write from "../../images/icons/write.svg";
import cl from "./NavBar.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const NavBar = () => {
  const { setAccounts } = useContext(AuthContext);
  async function logout1() {
    setAccounts(null);
    localStorage.removeItem("loged");
  }
  return (
    <div className={cl.container}>
      <div className={cl.logo}>
        <Link to="/">
          <div className={cl.img}>
            <img src={logo} />
          </div>
        </Link>
      </div>
      <div className={cl.menu}>
        <Link to="/">
          <img src={home} style={{ width: "50%", cursor: "pointer" }} />
        </Link>
        <Link to="/MyBlog">
          <img src={book} style={{ width: "40%", cursor: "pointer" }} />
        </Link>
        <Link to="/NewStory">
          <img src={write} style={{ width: "50%", cursor: "pointer" }} />
        </Link>
      </div>
      <div className={cl.logout}>
        <img
          onClick={logout1}
          src={logout}
          style={{ width: "40%", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default NavBar;
