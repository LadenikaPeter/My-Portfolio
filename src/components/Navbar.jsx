import React from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="text-slate-200 px-[1rem] md:px-[4rem] h-[80px]">
      <div className="flex items-center justify-end h-full font-light text-sm">
        <a
          className="items-center gap-1 hover:scale-110 transition ease-in-out duration-500 hidden lg:flex"
          href="https://github.com/LadenikaPeter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub size="0.8rem" />
          Github
        </a>
        <a
          className="mx-10 items-center gap-1 hover:scale-110 transition ease-in-out duration-500 hidden lg:flex"
          href="https://www.linkedin.com/in/peter-ladenika/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin size="0.8rem" />
          LinkedIn
        </a>

        <a
          className="mr-10 lg:hidden"
          href="mailto:peterladenika@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
        <a
          href="https://drive.google.com/file/d/1wzyKxaNe-cKhlgO29H0hcUWC9XZ9Eerl/view?usp=sharing"
          target="_blank"
          className="lg:hidden"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
