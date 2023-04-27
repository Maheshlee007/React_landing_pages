import React from "react";

import styles from "../constants/style";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section
      className="bg-primary  text-white  w-full flex sm:flex-row 
      ss:justify-between  h-[100px] p-8 my-2"
    >
      {stats.map((stat) => {
        return (
          <div
            key={stat.id}
            className={`w-[50%] mx-auto sm:flex sm:mr-4 mt-4 h-9 text-center items-center`}
          >
            <h4 className="font-semibold text-white text-4xl sm:mr-4 ] ">
              {stat.value}
            </h4>
            <p className="text-gradient text-lg pr-10 uppercase ">
              {stat.title}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
