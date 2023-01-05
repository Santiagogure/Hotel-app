import React, { useEffect, useState } from "react";
import LogoWhite from "../assets/img/logo-white.svg";
import logoDark from "../assets/img/logo-dark.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-300`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-7
       lg:flex-row lg:justify-between lg:gap-y-0">
        <Link to="">
          {header ? (
            <img className="w-[160px]" src={logoDark} alt="" />
          ) : (
            <img className="w-[160px]" src={LogoWhite} alt="" />
          )}
        </Link>
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4  tracking-[1px] text-[14px] lg:text-[16px]
          uppercase font-black lg:gap-x-8`}
        >
          <a className="hover:shadow-xl" href="#menu_section" alt="">
            Home
          </a>
          <a href="#home_section"  alt="">
            Rooms
          </a>
          <a href="#footer_section"  alt="">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
