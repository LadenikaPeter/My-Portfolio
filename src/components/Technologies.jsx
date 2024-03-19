import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

export default function Technologies() {
  return (
    <div>
      <p className="my-4 text-sm flex items-center">
        Technologies <IoMdArrowDropright />
      </p>

      <ul className="text-xs text-slate-400 flex gap-5 max-w-sm flex-wrap">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Angular</li>
        <li>Next.jS</li>
        <li>NgRx</li>
        <li>Redux</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
      </ul>

      <p className="mb-4 mt-6 text-sm flex items-center">
        Familiar With <IoMdArrowDropright />
      </p>

      <ul className="text-xs text-slate-400 flex gap-5 max-w-sm flex-wrap">
        <li>TanStack Query</li>
        <li>Vite</li>
        <li>Git</li>
        <li>Firebase</li>
        <li>SEO</li>
        <li>PWAs</li>
        <li>Version Control</li>
      </ul>
    </div>
  );
}
