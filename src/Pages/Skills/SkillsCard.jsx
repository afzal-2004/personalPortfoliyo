import "../Services/service.css";
import languageLogo from "/SkillsImage/Language.png";
import CLogo from "/SkillsImage/C.png";
import javaLogo from "/SkillsImage/Java.png";
import javaScript from "/SkillsImage/Js.png";

export const SkillsCard = () => {
  return (
    <>
      <main className="w-full min-h-[350px] bg-blue-300  flex  justify-between p-[25px]  rounded-lg m-auto">
        <>
          <section className="  w-[28%]  bg-white rounded-md boxShodow tansitionClass  utiityClass">
            <img src={languageLogo} alt="" className="max-w-[50%] " />
            <h4 className="text-wrap">Programming language</h4>
          </section>
          <section className="  flex flex-col  w-[68%]  justify-between   ">
            <div className=" flex  w-full h-[45%]  justify-between">
              <div
                className=" bg-white w-[47%] boxShodow  rounded-md  tansitionClass utiityClass
             "
              >
                <img
                  src={CLogo}
                  alt=""
                  className="max-w-[90px] max-h-[90px] "
                />
                <h4 className="text-wrap">C</h4>
              </div>
              <div
                className="  bg-white w-[47%] rounded-md   boxShodow tansitionClass  utiityClass
              "
              >
                <img
                  src={javaLogo}
                  alt=""
                  className="max-w-[90px] max-h-[90px] "
                />
                <h4 className="text-wrap">Java</h4>
              </div>
            </div>
            <div className=" bg-white h-[45%] boxShodow rounded-md  tansitionClass utiityClass">
              <img
                src={javaScript}
                alt=""
                className="max-w-[90px] max-h-[90px] "
              />
              <h4 className="text-wrap">Java Script</h4>
            </div>
          </section>
        </>
      </main>
    </>
  );
};
