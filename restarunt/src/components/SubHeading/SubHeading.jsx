import React from "react";
import { images } from "../../constants";

const mb = {
  marginBottom: "1rem",
};
const SubHeading = (props) => (
  <div>
    <p className="p__cormorant">{props.title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
