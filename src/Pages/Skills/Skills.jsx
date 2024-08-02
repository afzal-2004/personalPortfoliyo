import "../Home/home.css";
import "../Services/service.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SkillsCard } from "./SkillsCard";

import SkiiImage from "/Skills.png";
export const Skills = () => {
  const skillsdata = [
    {
      Programminglanguage: [
        {
          image: "/SkillsImage/Language.png",
          Name: "Programming language",
        },
        {
          image: "/SkillsImage/C.png",
          Name: "C",
        },
        {
          image: "/SkillsImage/Java.png",
          Name: "Java ",
        },
        {
          image: "/SkillsImage/Js.png",
          Name: "Java Script",
        },
      ],
    },
    {
      Programminglanguage: [
        {
          image: "/SkillsImage/Language.png",
          Name: "Programming language",
        },
        {
          image: "/SkillsImage/C.png",
          Name: "C",
        },
        {
          image: "/SkillsImage/Java.png",
          Name: "Java ",
        },
        {
          image: "/SkillsImage/Js.png",
          Name: "Java Script",
        },
      ],
    },
    {
      Programminglanguage: [
        {
          image: "/SkillsImage/Language.png",
          Name: "Programming language",
        },
        {
          image: "/SkillsImage/C.png",
          Name: "C",
        },
        {
          image: "/SkillsImage/Java.png",
          Name: "Java ",
        },
        {
          image: "/SkillsImage/Js.png",
          Name: "Java Script",
        },
      ],
    },
    {
      Programminglanguage: [
        {
          image: "/SkillsImage/Language.png",
          Name: "Programming language",
        },
        {
          image: "/SkillsImage/C.png",
          Name: "C",
        },
        {
          image: "/SkillsImage/Java.png",
          Name: "Java ",
        },
        {
          image: "/SkillsImage/Js.png",
          Name: "Java Script",
        },
      ],
    },
  ];
  return (
    <div
      id="Skills"
      className="mt-[10vh] flex  w-[90%] m-auto gap-[3%]  items-center "
    >
      <div>
        <img src={SkiiImage} alt="" className=" webpngAnimate" />
      </div>
      <div className=" bg-[#DAD6D1] max-w-[60vw]  min-h-[70vh]  p-4 flex  flex-col justify-center gap-3  rounded-lg  m-auto ">
        <h1 className="text-center "> Skills</h1>

        <Carousel>
          {skillsdata.map((data, i) => (
            <SkillsCard key={i} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
