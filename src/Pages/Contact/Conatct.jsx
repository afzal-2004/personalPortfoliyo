import Contactimg from "/Conatct.png";
import "../Home/home.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Conatct = () => {
  const [Name, setName] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [Message, setMessage] = useState("");

  const HandelSumbit = (e) => {
    e.preventDefault();
    if (Name === "" || email === "" || contact === "" || Message === "") {
      toast.error("Plesae Fill all  Fields");
    } else {
      console.log(Name, email, contact, Message);
      setMessage("");
      setcontact("");
      setName("");
      setemail("");

      toast.success("Saved Data  Successfully");
    }
  };
  return (
    <div
      id="Conatct"
      className=" flex  sm:flex-row
       flex-col  items-center justify-between
   sm:mt-[10vh] mt-[5vh]   m-auto  xl:min-h-[70vh]   md:min-h-[50vh] gap-[3%]  sm:w-[90%] min-h-[130vh] "
    >
      <section className=" min-h-[50vh] mb-[5vh] ">
        <img
          src={Contactimg}
          alt=""
          className="  sm:object-contain sm:float-right dropfilter    rounded-full   w-[300px]  sm:w-[500px] min-h[] "
        />
      </section>
      <section className=" bg-[#DAD6D1] sm:min-w-[60vw] w-[100vw] min-h-[70vh] sm:rounded-tl-[150px] sm:rounded-bl-[150px] flex  flex-col items-center sm:p-4 ">
        <h1>Contact me </h1>
        <form
          action=""
          className="gap-3 xl-[45%]  w-[80%] md:w-[70%] p-2"
          onSubmit={HandelSumbit}
        >
          <div className="mt-[20px] flex flex-col ">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              required
              placeholder="Your Name"
              value={Name}
              onChange={(e) => {
                e.preventDefault();
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mt-[20px]  flex flex-col">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => {
                e.preventDefault();

                setemail(e.target.value);
              }}
            />
          </div>
          <div className="mt-[20px]  flex flex-col">
            <label htmlFor="Contact">Contact</label>
            <input
              type="text"
              required
              placeholder=" Your Contact Number"
              value={contact}
              onChange={(e) => {
                e.preventDefault();

                setcontact(e.target.value);
              }}
            />
          </div>
          <div className=" flex flex-col mt-[20px ]">
            <label htmlFor="Message">Message</label>
            <textarea
              className="outline-none p-1 max-h-[200px]  "
              name=""
              id=""
              cols="10"
              rows="5"
              value={Message}
              onChange={(e) => {
                e.preventDefault();

                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <div className=" flex justify-center">
            <button className=" outline-none bg-red-400 p-3  mt-[20px] w-[50%] rounded-xl ">
              Sumbit
            </button>
          </div>
          <ToastContainer autoClose={3000} />
        </form>
      </section>
    </div>
  );
};
