/* eslint-disable react/prop-types */
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
export const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <>
      <div>
        <div className=" flex justify-between bg-blue-300 p-3 text-[18px]  items-center  fixed top-0  z-50 w-full ">
          <h1>Afzal</h1>
          <NavItems />
          <RiMenu3Fill
            className=" sm:hidden"
            onClick={() => {
              setopenMenu(true);
            }}
          />
        </div>
        {openMenu && <NavItems />}
      </div>
    </>
  );
};

const NavItems = () => {
  return (
    <>
      <ul className={`sm:flex gap-4 cursor-pointer  hidden`}>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Service">Service</a>
        </li>

        <li>
          <a href="#Conatct">Conatct</a>
        </li>
      </ul>
    </>
  );
};

// const NavItemsMobile = () => {
//   return (
//     <>
//       <ul className={` gap-4 cursor-pointer  absolute  z-40 `}>
//         <li>
//           <a href="#Home">Home</a>
//         </li>
//         <li>
//           <a href="#Skills">Skills</a>
//         </li>
//         <li>
//           <a href="#Projects">Projects</a>
//         </li>
//         <li>
//           <a href="#Experience">Experience</a>
//         </li>
//         <li>
//           <a href="#Service">Service</a>
//         </li>

//         <li>
//           <a href="#Conatct">Conatct</a>
//         </li>
//       </ul>
//     </>
//   );
// };
