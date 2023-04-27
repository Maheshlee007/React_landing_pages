import { features } from "../constants";
// import { star } from "../assets";

// import React from "react";

const Business = () => {
  return (
    <section
      id="features"
      className="bg-primary w-full h-full flex flex-col my-16 justify-between items-start 
    ss:flex-col sm:flex-row sm:mt-20"
    >
      <aside className="font-poppins  w-full ss:w-[80%] sm:w-[50%]">
        <h1 className="font-semibold text-[45px] text-white">
          You do the business, we’ll handle the money.
        </h1>
        <p className="text-justify text-zinc-500">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="bg-blue-gradient rounded-md text-black p-3 font-poppins font-normal mt-3">
          Get Started
        </button>
      </aside>
      <aside className="w-full sm:w-[40%] sm:m-0 text-white ss:w-[80%] ss:self-end ss:mt-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex justify-evenly my-6 cursor-pointer hover:bg-cyan-100/20 rounded-3xl "
          >
            <img
              src={feature.icon}
              alt={`${feature.icon}`}
              className="block w-[32px] h-[32px] self-center"
            />
            <div className="text-white ml-3">
              <h2 className="text-xl font-bold">{feature.title}</h2>
              <p className="text-zinc-500 text-justify ">{feature.content}</p>
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
};

export default Business;
