import React from "react";
import "./article.css";

const Article = ({ imgurl, data, text, btext }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgurl} alt="image " />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p> {data}</p>
          <h3>{text}</h3>
        </div>
        <p>{btext}</p>
      </div>
    </div>
  );
};

export default Article;
