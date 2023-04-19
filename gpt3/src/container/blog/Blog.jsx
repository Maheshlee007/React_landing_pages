import React from "react";
import { Article } from "../../components";
import "./blog.css";

import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
function Blog() {
  const text = "GPT-3 and Open  AI is the future. Let us exlore how it is?";

  const btext = "Read Full Article";
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgurl={blog01}
            date="Sep 26, 2021"
            text={text}
            btext={btext}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgurl={blog02}
            date="Sep 26, 2021"
            text={text}
            btext={btext}
          />
          <Article
            imgurl={blog03}
            date="Sep 26, 2021"
            text={text}
            btext={btext}
          />
          <Article
            imgurl={blog04}
            date="Sep 26, 2021"
            text={text}
            btext={btext}
          />
          <Article
            imgurl={blog05}
            date="Sep 26, 2021"
            text={text}
            btext={btext}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
