import "./Experences.css";
import Intern from "/webDevIntern.webp";
export const Experiences = () => {
  return (
    <div
      id="Experience"
      className="    sm:flex-row flex-col flex items-center justify-center"
    >
      <section className="Experience  gap-4">
        <h1 className="text-red-400"> Experience</h1>
        <div className=" gap-1">
          <h1>Front End Devloper </h1>
          <p>(First Ricoz Private Limited)</p>
        </div>

        <div className=" w-[80%]">
          <h4 className="  font-semibold text-[20px]">
            During my internship at First Ricoz Private Limited, I had the
            opportunity to work on various exciting projects and enhance my
            skills in software development. My main responsibilities included:
          </h4>
          <ul className=" list-disc gap-4 text-[18px]">
            <li>
              Developed and maintained frontend components using React and
              Tailwind CSS.
            </li>
            <li>
              Implemented responsive design to ensure optimal user experience
              across different devices.
            </li>
            <li>
              Worked closely with cross-functional teams, including backend
              developers, designers, and product managers.
            </li>
            <li>
              Identified and resolved bugs and performance issues in existing
              applications.
            </li>
            <li>
              Received mentorship and guidance from senior developers,
              contributing to my professional growth.
            </li>
          </ul>
        </div>
      </section>
      <section className="flex  flex-col justify-around">
        <img src={Intern} alt="" className=" webpngAnimate  " />
        <h1 className="text-center"> Web Developer</h1>
      </section>
    </div>
  );
};
