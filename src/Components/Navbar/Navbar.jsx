import { useState } from "react";
import TitleText from "../Text/TitleText";
import { NavLink } from "react-router-dom";
import Button from "../Buttons/Button";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Explore", href: "/explore" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div>
      <>
        <div>
          {/* MAIN NAV BAR */}
          <div className="flex justify-between  items-center xl:px-[4rem] md:px-[3rem] px-[2rem] bg-white shadow py-4 ">
            <button
              onClick={() => setIsOpen(true)}
              className="text-3xl md:hidden"
            >
              <HiMenuAlt3 />
            </button>
            <TitleText
              text="Agrolink"
              size={`xl:text-[24px] md:text-[20px] text-[14px] `}
              color="text-[#0A4E29]"
              className="font-sans font-semibold xl:flex md:flex hidden"
            />

            {/* Desktop Links */}
            <div className="hidden md:flex gap-12 items-center text-[16px] font-sans ">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `relative pb-2 transition-colors ${isActive ? "text-[#DAA545] font-semibold" : "text-[#041B0E]"}`
                  }
                >
                  <>{link.name}</>
                </NavLink>
              ))}
            </div>
            <div className="hidden md:flex xl:flex gap-4 items-center justify-center">
              <Button
                variant="primary"
                text="Get Started"
                paddingTB="py-[0.65rem]"
                paddingRL="px-6"
                borderRadius="rounded-[0.80rem]"
                borderColor="#00193C"
              />
            </div>

            {/* OPEN BUTTON (Only Hamburger) */}
          </div>

          {/* SLIDING SIDEBAR */}
          <div
            className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-500 ease-in-out z-50 flex flex-col md:hidden 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            {/* HEADER INSIDE SIDEBAR (This holds the X) */}
            <div className="flex justify-between items-center px-[2rem] py-5 bg-white mb-3">
              <TitleText
                text="Agrolink"
                size="text-[16px]"
                color="text-[#0A4E29]"
                className="font-sans font-semibold"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-black"
              >
                <HiX />
              </button>
            </div>

            {/* LINKS INSIDE SIDEBAR */}
            <div className="flex flex-col px-10 gap-8">
              {navLinks.map((links, index) => (
                <NavLink
                  key={links.href}
                  to={links.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                  }}
                  className={({ isActive }) =>
                    `text-[14px] font-outfit tracking-widest transition-all duration-500 transform ${
                      isOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    } ${isActive ? "text-[#041B0E] font-bold" : "text-[#041B0E]"}`
                  }
                >
                  {links.name}
                </NavLink>
              ))}
              <Button
                variant="primary"
                text="Get Started"
                paddingTB="py-[0.65rem]"
                paddingRL="px-6"
                borderRadius="rounded-[0.80rem]"
                borderColor="#00193C"
              />
            </div>
          </div>

          {/* BACKDROP */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* <NavBox /> */}
        </div>
      </>
    </div>
  );
};

export default Navbar;
