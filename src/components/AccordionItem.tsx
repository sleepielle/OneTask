"use client";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";

import { useState } from "react";

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-7 border-b border-white/30">
      <div
        className="flex items-center justify-between hover:text-white transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`flex-1 text-lg font-bold ${isOpen ? "text-white" : ""}`}
        >
          {question}
        </span>
        {!isOpen ? <PlusIcon /> : <MinusIcon />}
      </div>

      <div
        className={`text-white/70 mt-5  text-justify max-w-lg ${
          isOpen ? "flex" : " hidden"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default AccordionItem;
