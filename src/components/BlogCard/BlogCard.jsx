import React, { useContext } from "react";
import cl from "./BlogCard.module.css";
import AuthContext from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const BlogCard = ({ title, text, owner_of, externalUrl }) => {
  const { accounts } = useContext(AuthContext);
  const navigate = useNavigate();
  const length = 100;
  const trimmedString = text.length > 100 ? text.substring(0, length) : text;
  const account = `${owner_of.slice(0, 4)}...${owner_of.slice(38)}`;

  const clickHandler = () => {
    const last = externalUrl.split("/").pop();
    navigate(`/blog1/${last}`);
    // navigate("/blog1/");
  };

  return (
    <>
      <div onClick={clickHandler} className={cl.container}>
        <div className={cl.left_side}>
          <div className={cl.info}>
            <Link to="/blog1/">dfdf</Link>
            <p>{account}</p>
            <p>Mar 21</p>
          </div>
          <div className={cl.title}>{title}</div>
          <div className={cl.text}>{trimmedString}...</div>
        </div>
        <div className={cl.right_side}>
          <img src="https://ipfs.io/ipfs/QmWEsG4ayh75BMk2H1CowAdALPjsi3fD7CSZ6qxNM1yNnz/image/moralis.png" />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
