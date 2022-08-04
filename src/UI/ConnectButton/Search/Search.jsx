import React from "react";
import cl from "./Search.module.css";

const Search = ({ children, ...props }) => {
  return (
    <input {...props} className={cl.search}>
      {children}
    </input>
  );
};

export default Search;
