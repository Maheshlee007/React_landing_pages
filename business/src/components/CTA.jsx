import React from "react";
import styles from "../constants/style";
const CTA = () => {
  return (
    <section className="sm:flex w-[90%] mx-auto my-4 bg-gray-gradient space-y-4">
      <div className="sm:w-[670px]">
        <h1 className={styles.heading2}>Let’s try our service now!</h1>
        <p
          className={`${styles.paragraph}  max-w-[470px] mt-5 text-justify`}
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex sm:justify-center sm:items-center w-[40%] ">
        <button className="bg-blue-gradient text-black text-old capitalize p-3 rounded">
          get started
        </button>
      </div>
    </section>
  );
};

export default CTA;
