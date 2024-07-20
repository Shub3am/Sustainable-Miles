import Image from "next/image";
import powerfulSvg from "../../../public/powerful.svg";

export default function ReduceCost() {
  return (
    <div className="text-gray-600 relative lg:px-4 px-8 py-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-full md:max-w-full capitalize flex justify-between items-center lg:flex-row flex-col gap-8">
      <div className="lg:w-1/3 inline-flex items-center justify-center">
        <Image src={powerfulSvg} alt="girl" className="w-2/3" />
      </div>

      <div className="text-center lg:w-3/5 lg:mx-auto">
        <h1 className="font-bold sm:text-4xl text-2xl capitalize text-black">
          We are saving{" "}
          <span className="text-theme-primary underline decoration-wavy decoration-theme-primary">
            70%
          </span>{" "}
          of user's cost!
        </h1>
        <p className="leading-relaxed text-base mt-9 text-lg">
          By adopting our solutions, we are saving 70% of users' costs. Our
          innovative approach leverages gamification to incentivize sustainable
          choices, providing challenges, rewards, and leaderboards. This not
          only reduces expenses significantly but also promotes environmentally
          friendly behaviors, contributing to a more sustainable and
          cost-effective lifestyle.
        </p>
      </div>
    </div>
  );
}
