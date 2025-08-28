import AccordionItem from "./AccordionItem";
import { faqItems } from "@/types";

export const FAQs = () => {
  return (
    <div
      id="faq"
      className="bg-black py-[72px] sm:py-24 bg-[linear-gradient(to_bottom,#4b2386,#000)]"
    >
      <div className="container  ">
        <h2 className="text-white text-center font-bold text-5xl tracking-tighter sm:text-6xl sm:max-w-[648px]  mx-auto">
          Frequently asked questions
        </h2>
        <div className="mt-12 text-white/70 max-w-[648px] mx-auto ">
          {faqItems.map(({ question, answer }) => (
            <AccordionItem key={question} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
