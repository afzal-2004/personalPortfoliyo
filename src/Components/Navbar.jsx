/* eslint-disable react/prop-types */
import { TiThMenu } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import "./Components.css";
export const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <>
      <div className=" NavItems ">
        <NavItems />
        <TiThMenu
          className=" sm:hidden z-50"
          onClick={() => {
            setopenMenu(!openMenu);
            console.log(!openMenu);
          }}
        />
      </div>
      {openMenu && <NavItems mobile setopenMenu={setopenMenu} />}
    </>
  );
};

const NavItems = ({ mobile, setopenMenu }) => {
  return (
    <>
      <h1>Afzal</h1>
      <ul
        className={`flex ${mobile ? "flex-col" : "gap-4"} cursor-pointer ${
          mobile ? "MobileItems" : "sm:flex hidden"
        } ${`setopenMenu?"navItemsSmooth": " "`}`}
      >
        {" "}
        <li className="sm:hidden   w-full  flex justify-end  m-[3vh] p-3">
          <RxCross1
            onClick={() => {
              setopenMenu(false);
            }}
          />
        </li>
        <li>
          <a
            href="#Home"
            onClick={() => {
              setopenMenu(false);
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#Skills"
            onClick={() => {
              setopenMenu(false);
            }}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            onClick={() => {
              setopenMenu(false);
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Experience"
            onClick={() => {
              setopenMenu(false);
            }}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#Service"
            onClick={() => {
              setopenMenu(false);
            }}
          >
            Service
          </a>
        </li>
        <li>
          <a
            href="#Conatct"
            onClick={() => {
              setopenMenu(false);
            }}
          >
            Conatct
          </a>
        </li>
      </ul>
    </>
  );
};
