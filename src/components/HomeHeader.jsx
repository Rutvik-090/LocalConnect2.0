import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function HomeHeader() {
  return (
    <>
      <div>
        <div className="px-[4rem] py-[0.5rem] flex flex-row justify-between items-center border-b-4 border-[#E3D4C3] bg-[#FFECCC]">
          <img
            src={logo}
            alt="LocalConnect"
            className="h-12 w-12 rounded-full "
          />
          <NavLink to="/signup">
            <button className="font-bold font-Inter h-[2rem] w-[5rem] rounded-md border-2 border-[#6C4780] bg-[#6C4780] text-[#FFFDF0] text-sm cursor-pointer">
              Sign-Up
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
