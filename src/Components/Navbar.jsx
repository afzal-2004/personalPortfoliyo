export const Navbar = () => {
  return (
    <>
      <div className=" flex justify-between bg-blue-300 p-3 text-[18px]  items-center  fixed top-0  z-50 w-full">
        <h1>Afzal</h1>
        <ul className="flex gap-4 cursor-pointer">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#Service">Service</a>
          </li>

          <li>
            <a href="#Conatct">Conatct</a>
          </li>
        </ul>
      </div>
    </>
  );
};
