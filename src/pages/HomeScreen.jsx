import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/HomeScreen.css";
import BlogCard from "../components/BlogCard/BlogCard";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [blogs, setBlogs] = useState([
    {
      externalUrl:
        "https://ipfs.infura.io/ipfs/QmeoPid8yvG298qwooB9ZqyhzUt5b8KMTveykPJqhNxxsX",
      owner_of: "xxxx",
    },
    {
      externalUrl:
        "https://ipfs.infura.io/ipfs/QmTJxM4wYssi4Hxa6N5RrpcFe2s9d9kRousJPQhzBRRBgJ",
      owner_of: "xxxx",
    },
  ]);
  const [blogsContent, setBlogsContent] = useState();

  const fetchBlogsContent = async () => {
    const limit5 = blogs?.slice(0, 5);
    let contentBlog = [];

    if (limit5) {
      limit5.map(async (blog) => {
        if (blog) {
          const { externalUrl, owner_of } = blog;
          const res = await axios.get(externalUrl);
          const text = res.data.text.toString();
          const title = res.data.title;
          contentBlog.push({ title, text, owner_of, externalUrl });
        }
      });
    }
    setBlogsContent(contentBlog);
  };

  useEffect(() => {
    if (blogs && !blogsContent) {
      fetchBlogsContent();
    }
  }, []);

  return (
    <div className="container3">
      <div className="header"></div>
      <div className="blogs">
        {blogsContent &&
          blogsContent.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              text={blog.text}
              owner_of={blog.owner_of}
              externalUrl={blog.externalUrl}
            />
          ))}
      </div>
    </div>
  );
};

export default HomeScreen;
