import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="w-[90%] flex py-4 justify-between items-center navbar fixed z-10 bg-slate-500/10">
      <img src={logo} alt="" className="w-32 h-8" />
      <ul className="list-none sm:flex hidden justify-end flex-1 items-center">
        {navLinks.map((navlink, index) => {
          return (
            <li
              key={navlink.id}
              className={`font-poppins text-white font-normal  text-[16px] ${
                index == navLinks.length - 1 ? "mr-0" : "mr-10"
              } cursor-pointer`}
            >
              {navlink.title}
            </li>
          );
        })}
      </ul>
      <div className="  flex-1 justify-end items-center flex sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-6 h-6 object-cover cursor-pointer"
          onClick={() => {
            settoggle(!toggle);
          }}
        />
        <div
          className={` ${
            toggle ? "flex" : "hidden"
          } absolute top-20 bg-black-gradient rounded-lg right-0 mx-4 my-2 flex-col list-none p-4 border-b-2 border-cyan-400 sidebar`}
        >
          {navLinks.map((navlink, index) => {
            return (
              <li
                key={navlink.id}
                className={`font-poppins  border-cyan-400  text-white font-normal  text-[16px] ${
                  index == navLinks.length - 1 ? "mb-0" : "mb-10"
                } cursor-pointer hover:bg-slate-500`}
              >
                {navlink.title}
              </li>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
