import React from "react";

import "./MenuItem.css";

const MenuItem = ({ uid, title, price, tags }) => (
  <div key={uid} className="app__menu">
    <div className="app__menu-item">
      <h2>{title}</h2>
      <div className="app__menu-bar"> </div>
      <p>{price}</p>
    </div>
    <p className="app__menu-tag">{tags}</p>
  </div>
);

export default MenuItem;
