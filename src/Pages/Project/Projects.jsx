import "./Project.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export const Projects = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("/data.json")
      .then((responce) => {
        setdata(responce.data);
        // console.log(responce.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div id="Projects" className="mt-[10vh]">
      <Carousel
        infiniteLoop
        interval={1000}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        {data.map((items, i) => (
          <div
            key={i}
            className="sm:max-w-[80vw] sm:min-h-[70vh] h-[50vh] sm:ml-[10vw] bg-blue-400 flex  items-center rounded-md  justify-center"
          >
            <section className="flex  items-center bg-white m-auto w-[80%] rounded-2xl max h-[70%] ">
              <div
                className="
            sm:w-[400px] sm:h-[400px] object-contain  p-3 h-[300px] flex  items-center"
              >
                <img src={items.image} alt="" className=" imageOfProject" />
              </div>

              <div className="   w-full gap-6 flex flex-col   justify-center items-center gap-y-7  h-full">
                <h1 className=" ">{items.name}</h1>

                <p className=" sm:text-[20px]  text-[12px] sm:w-[60%]">
                  {items.description}
                </p>
                <a
                  href={items.hostLink}
                  className=" bg-red-500  p-3  rounded-md "
                >
                  <button>View demo</button>
                </a>
              </div>
            </section>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
