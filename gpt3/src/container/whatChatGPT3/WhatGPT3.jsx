import React from "react";
import { Feature } from "../../components";

import "./whatGPT3.css";

function WhatGPT3() {
  const title = "What is GPT-3";
  const text =
    "We so opinion friends me message as delight. \
    Whole front do of plate heard oh ought.\
     His defective nor convinced residence own. \
     Connection has put impossible own apartments boisterous.\
      At jointure ladyship an insisted so humanity he. \
      Friendly bachelor entrance to on by.";
  const Education = "Education";
  const etext =
    "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b";
  const Knowledgebase = "Knowledgebase";

  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title={title} text={text} />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The Possibilites are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature title={Knowledgebase} text={etext} />
        <Feature title={Education} text={etext} />
      </div>
    </div>
  );
}

export default WhatGPT3;
