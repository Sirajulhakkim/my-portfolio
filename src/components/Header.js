import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between items-center p-8 bg-primary sticky top-0 bg-white z-20">
        <h1 className=" text-white font-extrabold  text-3xl">
          My Portfolio
        </h1>

      {!toggleMenu ? (
        <nav className="hidden md:block">
          <ul className="flex text-white ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#resume">Resume</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="block md:hidden ">
          <ul
            onClick={() => setToggleMenu(!toggleMenu)}
            className="flex flex-col text-white  mobile-nav"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  );
}
