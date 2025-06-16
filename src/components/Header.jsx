import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div>
      <div className="px-[4rem] py-[0.5rem] flex flex-row justify-between items-center border-b-4 border-[#E3D4C3] bg-[#FFECCC]">
        <img
          src={logo}
          alt="LocalConnect"
          className="h-12 w-12 rounded-full "
        />
        <NavLink to="/signup">
          <ul className="flex flex-row gap-6 text-sm font-semibold font-Inter">
            <NavLink to="/home">
              <li className="cursor-pointer">Home</li>
            </NavLink>
            <NavLink to="/chat">
              <li className="cursor-pointer">Chat</li>
            </NavLink>
            <NavLink to="/events">
              <li className="cursor-pointer">Events</li>
            </NavLink>
            <NavLink>
              <li className="cursor-pointer">Updates</li>
            </NavLink>
          </ul>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
