import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

function HomeFooter() {
  return (
    <div>
      <div className="px-[4rem] py-[0.5rem] flex flex-row justify-between items-center border-t-4 border-[#E3D4C3]">
        <ul className="text-Inter font-semibold text-sm text-[000000] list-disc">
          <li>Contact Us</li>
          <li>About Us</li>
          <li>FAQ</li>
        </ul>

        <p className="text-Inter font-semibold text-sm text-[000000]">
          © 2025 LocalConnect. All rights reserved.
        </p>

        <ul className="flex flex-row gap-4 items-center">
          <img src={facebook} alt="facebook" className="h-8 w-8" />
          <img src={instagram} alt="instagram" className="h-8 w-8" />
          <img src={twitter} alt="twitter" className="h-6 w-6 " />
        </ul>
      </div>
    </div>
  );
}

export default HomeFooter;
