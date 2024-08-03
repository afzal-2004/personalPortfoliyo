import Footerimage from "/Afzal.jpg";
import { BiUpArrowCircle } from "react-icons/bi";
export const Footer = () => {
  return (
    <>
      <footer className="bg-blue-300 text-white mt-[5vh]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <img
                src={Footerimage}
                className=" w-[150px] h-[150px] rounded-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Follow us
                </h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/afzal-2004"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://www.linkedin.com/in/afzal-97b608275"
                      className="hover:underline"
                    >
                      Linkdin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/mohmmadafzal5"
                      className="hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold ">Related Docs</h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <a
                      href="https://docs.google.com/document/d/1aGAf75fBvOClSDV8EqnQkZSCWERD8ZJV-h0dHIBblLM/edit?usp=sharing"
                      className="hover:underline"
                    >
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1Uo6mTh17WqISc1i-m8aqRAeb376wldq1/view?usp=drive_link"
                      className="hover:underline"
                    >
                      Intern Completion Certificate
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold ">Connect Us </h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <a
                      href="tel:+919520752384"
                      className="hover:underline text-blue-500"
                    >
                      +91 95200752384
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:moa44468@gmail.com"
                      className="hover:underline  text-blue-500"
                    >
                      moa44468@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <a href="#">
                  <BiUpArrowCircle className="text-[50px]  text-red-500" />
                </a>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
      </footer>
    </>
  );
};
