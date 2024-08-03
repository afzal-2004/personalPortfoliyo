import Contactimg from "/Conatct.png";
import "../Home/home.css";
export const Conatct = () => {
  return (
    <div
      id="Conatct"
      className=" flex  sm:flex-row
       flex-col  items-center justify-between
    mt-[10vh]   m-auto  xl:min-h-[70vh]   md:min-h-[50vh] gap-[3%]  sm:w-[90%] min-h-[120vh] "
    >
      <section className=" ">
        <img
          src={Contactimg}
          alt=""
          className="  sm:object-contain sm:float-right dropfilter    rounded-full   w-[300px]  sm:w-[500px] "
        />
      </section>
      <section className=" bg-[#DAD6D1] sm:min-w-[60vw] w-[100vw] min-h-[70vh] sm:rounded-tl-[150px] sm:rounded-bl-[150px] flex  flex-col items-center sm:p-4 ">
        <h1>Contact me </h1>
        <form action="" className="gap-3 xl-[45%]  w-[80%] md:w-[70%] p-2">
          <div className="mt-[20px] flex flex-col ">
            <label htmlFor="Name">Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="mt-[20px]  flex flex-col">
            <label htmlFor="Email">Email</label>
            <input type="text" placeholder="Your Email" />
          </div>
          <div className="mt-[20px]  flex flex-col">
            <label htmlFor="Contact">Contact</label>
            <input type="text" placeholder=" Your Contact Number" />
          </div>
          <div className=" flex flex-col mt-[20px ]">
            <label htmlFor="Message">Message</label>
            <textarea
              className="outline-none p-1 max-h-[200px]  "
              name=""
              id=""
              cols="10"
              rows="5"
            ></textarea>
          </div>
          <div className=" flex justify-center">
            <button className=" outline-none bg-red-400 p-3  mt-[20px] w-[50%] rounded-xl ">
              Sumbit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
