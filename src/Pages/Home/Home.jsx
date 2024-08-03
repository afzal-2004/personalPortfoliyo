/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import gsap from "gsap";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaChevronDown,
  FaGithub,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

import image1 from "/Afzal.jpg";
import "./home.css";
import { useEffect } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);

export const Home = () => {
  const ContactData = [
    {
      icon: <MdEmail className="text-[20px] " />,
      href: "mailto:moa44468@gmail.com",
    },
    {
      icon: (
        <BsFillTelephoneFill
          className="text-[20px]
      "
        />
      ),
      href: "tel:+919520752384",
    },
    {
      icon: <FaWhatsapp className="text-[20px] " />,
      href: "https://wa.me/9520752384",
    },
    {
      icon: <FaLinkedinIn className="text-[20px]" />,
      href: "https://www.linkedin.com/in/afzal-97b608275",
    },
    {
      icon: <FaGithub className="text-[20px]" />,
      href: "https://github.com/afzal-2004",
    },
    {
      icon: <FaInstagram className="text-[20px] " />,
      href: "https://www.instagram.com/mohmmadafzal5",
    },
  ];

  const container = useRef();
  const icon = useRef();
  useGSAP(
    () => {
      gsap.from(".Text", {
        x: "-100%",
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });
    },
    { scope: container }
  );
  useGSAP(
    () => {
      gsap.from(".icons", {
        y: "-100%",
        ease: "power1.inOut",
        duration: 1,
        delay: 0.2,
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: icon }
  );
  return (
    <>
      <div
        id="Home"
        className=" sm:flex justify-between  m-[20px]  sm:h-[90vh]"
      >
        <section
          ref={container}
          className=" md:min-w-[50%]  flex flex-col items-center justify-center gap-y-4 relative h-[80vh] sm:h-auto"
        >
          <p className="Text text-[35px]  font-bold  "> Hello I am Afzal</p>
          <Typewriter text={"  A Full Stack  Web devloper"} duration={4} />

          <div className="  flex  flex-wrap gap-4  justify-center">
            {ContactData.map((data, i) => (
              <div key={i}>
                <a href={`${data.href}`}>
                  <button
                    className={` btnSocialMedia 
                    `}
                  >
                    {data.icon}
                  </button>
                </a>
              </div>
            ))}
          </div>
          <div className="  w-[70%] xl:w-[30%]  flex justify-between mt-[5%]">
            <a href="#Projects">
              <button className="projectbtn ">
                {" "}
                Projects
                <FiArrowUpRight className="text-[20px]" />
              </button>
            </a>
            <a href="https://docs.google.com/document/d/1aGAf75fBvOClSDV8EqnQkZSCWERD8ZJV-h0dHIBblLM/edit?usp=sharing">
              <button className="projectbtn ">
                Resume
                <IoDocumentTextOutline className="text-[20px]" />
              </button>
            </a>
          </div>
          <div ref={icon}>
            <FaChevronDown className=" text-[35px] text-center absolute  sm:bottom-0 sm:right-0 icons bottom-5" />
          </div>
        </section>

        <section
          className="   p-3   
     xl:w-[50%]  flex  justify-center items-center "
        >
          <img src={image1} alt="" className="homeImage " />
        </section>
      </div>
    </>
  );
};

const Typewriter = ({ text, duration }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const chars = text.split("");
    textRef.current.innerHTML = chars.map(() => "<span></span>").join("");
    const spans = textRef.current.querySelectorAll("span");

    gsap.to(spans, {
      duration: duration / chars.length,
      text: (index) => chars[index],
      stagger: 0.1,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  }, [text, duration]);

  return <div ref={textRef} className="text-[20px]"></div>;
};
