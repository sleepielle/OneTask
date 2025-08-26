import Image from "next/image";
import EcosystemIcon from "../assets/icons/ecosystem.svg";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black py-[72px] text-white sm:py-24">
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

        <div className="flex flex-col sm:flex-row gap-4 mt-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex-col flex items-center  text-center justify-center border border-white/30 px-5 py-10 rounded-xl sm:flex-1"
            >
              <div className="inline-flex h-12 w-12 bg-white text-black justify-center items-center rounded-lg">
                <EcosystemIcon />
              </div>
              <h3 className="mt-6 font-bold">{feature.title}</h3>
              <p className="mt-2 text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
