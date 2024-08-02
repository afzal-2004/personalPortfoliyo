import Contactimg from "/Conatct.png";
import "../Home/home.css";
export const Conatct = () => {
  return (
    <div
      id="Conatct"
      className=" flex  items-center 
      mt-[10vh]   m-auto   gap-[3%]  w-[90%]"
    >
      <section>
        <img
          src={Contactimg}
          alt=""
          className="  object-contain float-right rounded-full dropfilter "
        />
      </section>
      <section className=" bg-[#DAD6D1] min-w-[60vw] min-h-[70vh] rounded-tl-[150px] rounded-bl-[150px] flex  flex-col items-center p-4">
        <h1>Contact me </h1>
        <form action="" className="gap-3 w-[45%]  p-2">
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
