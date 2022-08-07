import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Url } from "../../config/constants";
import axios from "axios";
import cl from "./Blog.module.css";

const Blog1 = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { url } = useParams();
  console.log(url);

  async function fetchBlogContent() {
    const res = await axios.get(`${Url}/${url}`);
    setTitle(res.data.title);
    setText(res.data.text.toString());
    console.log(res.data.title);
  }

  useEffect(() => {
    if (!text || !title) {
      fetchBlogContent();
    }
  }, [text, title]);

  return (
    <div>
      <div className={cl.container}>
        <div className={cl.title}>{title}</div>
        <div className={cl.text}>{text}</div>
      </div>
    </div>
  );
};

export default Blog1;
