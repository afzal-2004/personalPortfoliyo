import "../Home/home.css";
import "../Services/service.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import SkiiImage from "/Skills.png";
let Skill = "/SkillsImage/Language.png";
export const Skills = () => {
  const skillsdata = [
    //    PROGRAMMING LANGUAGE
    {
      Name1: "languages",
      image2: "/SkillsImage/C.png",
      Name2: "C",
      image3: "/SkillsImage/Java.png",
      Name3: "Java ",
      image4: "/SkillsImage/Js.png",
      Name4: "Java Script",
      image5: "/SkillsImage/Sql.png",
      Name5: "SQL",
    },

    //  MARKUP LANGUAGE
    {
      Name1: "Markup",
      image2: "/SkillsImage/Html.png",
      Name2: "Html",
      image3: "/SkillsImage/Css.png",
      Name3: "CSS ",
      image4: "/SkillsImage/XML.png",
      Name4: "XML",
    },

    //  FRAMEWORKS
    {
      Name1: "Frameworks",
      image2: "/SkillsImage/React.png",
      Name2: "React",
      image3: "/SkillsImage/TailwindCss.png",
      Name3: "Tailwind ",
      image4: "/SkillsImage/Express-js.png",
      Name4: "ExpressJs",
      image5: "/SkillsImage/Nodejs.png",
      Name5: "Node js",
    },
    //  TOOOLS USED
    {
      Name1: "Tools",
      image2: "/SkillsImage/figma.png",
      Name2: "Figma",
      image3: "/SkillsImage/GIthub.png",
      Name3: "Github ",
      image4: "/SkillsImage/MongoDb.png",
      Name4: "Mongo DB",
      image5: "/SkillsImage/Firebase.png",
      Name5: "Firebase",
    },

    //  AGAIN TOOLS
    {
      Name1: "Tools",
      image2: "/SkillsImage/ChatGPT-Logo.png",
      Name2: "ChatGpt",
      image3: "/SkillsImage/Gsap.png",
      Name3: "Gsap",
      image4: "/SkillsImage/Vs code.png",
      Name4: "Vs Code",
    },
  ];

  return (
    <div
      id="Skills"
      className="mt-[10vh]  flex flex-col-reverse sm:flex-row   
      w-[90%] min-h-[70vh] sm:min-h-[50vh] m-auto gap-[3%]  items-center "
    >
      <div>
        <img src={SkiiImage} alt="" className=" webpngAnimate " />
      </div>
      <div className=" bg-[#DAD6D1] sm:max-w-[60vw]  max-w-[100vw] xl:min-h-[70vh]  sm:min-h-[50vh]  p-4 flex  flex-col  justify-evenly gap-3  rounded-lg  sm:m-auto  ">
        <h1 className="text-center "> Skills</h1>

        <Carousel showThumbs={false} showStatus={false}>
          {skillsdata.map((data, i) => (
            <main
              key={i}
              className="w-full sm:min-h-[350px] h-[300px]  bg-blue-300  flex  justify-between p-[25px]  rounded-lg m-auto"
            >
              <>
                <section className="  w-[28%]  bg-white rounded-md boxShodow tansitionClass  utiityClass  ">
                  <img src={Skill} alt="" className="max-w-[50%]  " />
                  <h4 className="utlityText">{skillsdata[i].Name1}</h4>
                </section>
                <section className="  flex flex-col  w-[68%]  justify-between   ">
                  <div className=" flex  w-full h-[45%]  justify-between">
                    <div
                      className=" bg-white w-[47%] boxShodow  rounded-md  tansitionClass utiityClass
             "
                    >
                      <img
                        src={skillsdata[i].image2}
                        alt=""
                        className="SkillsImage "
                      />
                      <h4 className="utlityText">{skillsdata[i].Name2}</h4>
                    </div>
                    <div
                      className="  bg-white w-[47%] rounded-md   boxShodow tansitionClass  utiityClass
              "
                    >
                      <img
                        src={skillsdata[i].image3}
                        alt=""
                        className="SkillsImage "
                      />
                      <h4 className="utlityText">{skillsdata[i].Name3}</h4>
                    </div>
                  </div>
                  <section
                    className={` ${
                      i !== 4 && "flex  justify-between sm:h-[45%] "
                    } ${i == 1 && "hidden"}`}
                  >
                    <div
                      className={`bg-white boxShodow rounded-md  ${
                        i !== 4 ? " w-[47%] " : "w-[96%]"
                      }tansitionClass utiityClass`}
                    >
                      <img
                        src={skillsdata[i].image4}
                        alt=""
                        className=" SkillsImage"
                      />
                      <h4 className="utlityText">{skillsdata[i].Name4}</h4>
                    </div>
                    <div
                      className={`${
                        i == 4 && "hidden"
                      }   bg-white boxShodow rounded-md   w-[47%] tansitionClass utiityClass`}
                    >
                      <img
                        src={skillsdata[i].image5}
                        alt=""
                        className="SkillsImage "
                      />
                      <h4 className="utlityText">{skillsdata[i].Name5}</h4>
                    </div>
                  </section>
                </section>
              </>
            </main>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
