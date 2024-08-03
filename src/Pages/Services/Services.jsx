import { FaFirefoxBrowser } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { SiAdobeindesign } from "react-icons/si";
import "./service.css";

export const Services = () => {
  return (
    <>
      <div id="Service" className="Services    ">
        <h1 className="text-center">Service</h1>
        <div className=" flex gap-[15px] sm:gap-[20px] sm:w-[80%] w-[90%] m-auto   ">
          <section className="Experience_time boxShodow tansitionClass">
            <h2 className="  p-4 ">
              {" "}
              1 Year hands
              <br /> On Experience
            </h2>
          </section>

          <section className="  flex flex-col  w-[70%]  justify-between gap-3 sm:gap-0">
            <section className="flex sm:gap-[20px] gap-[10px]  w-full">
              <div className="  card  ">
                <h4 className="carditems  ">
                  <FaFirefoxBrowser className=" text-[30px]" />
                  <p>Web Devlopement</p>
                </h4>
              </div>
              <div className=" card  ">
                <h4 className="carditems">
                  <FiFigma className=" text-[30px]" />
                  <p>Designing</p>
                </h4>
              </div>
            </section>
            <div className="card w-[100%] boxShodow">
              <h4 className="carditems">
                <SiAdobeindesign className=" text-[30px]" />
                <p>Photo and Video Editing</p>
              </h4>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
