import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { FamiliarWithArray, technologiesArray } from "../constants/TechStack";

export default function Technologies() {
  return (
    <div>
      <p className="my-4 text-sm flex items-center">
        Technologies <IoMdArrowDropright />
      </p>

      <ul className="text-xs text-slate-400 flex gap-5 max-w-sm flex-wrap">
        {technologiesArray?.map((technology) => {
          return <li key={technology.key}>{technology.item}</li>;
        })}
      </ul>

      <p className="mb-4 mt-6 text-sm flex items-center">
        Familiar With <IoMdArrowDropright />
      </p>

      <ul className="text-xs text-slate-400 flex gap-5 max-w-sm flex-wrap">
        {FamiliarWithArray?.map((technology) => {
          return <li key={technology.key}>{technology.item}</li>;
        })}
      </ul>
    </div>
  );
}
