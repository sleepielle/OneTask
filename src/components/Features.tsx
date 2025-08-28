import { features } from "@/types";
import Feature from "./Feature";

export const Features = () => {
  return (
    <div className="bg-black py-[72px] text-white sm:py-24 ">
      <div className="container">
        <div className="flex items-center justify-center flex-col">
          <h2 className="font-bold text-center text-5xl sm:text-6xl tracking-tighter ">
            Everything you need
          </h2>
          <p className="text-xl text-center mt-5 max-w-xl text-white/70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-16 sm:px-10">
          {features.map((feature) => (
            <Feature
              title={feature.title}
              description={feature.description}
              key={feature.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
