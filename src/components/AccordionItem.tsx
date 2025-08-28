"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";

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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className={`text-white/70 text-justify max-w-lg`}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
