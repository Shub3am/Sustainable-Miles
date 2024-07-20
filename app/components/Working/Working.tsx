import bikingSvg from "../../../public/biking.svg"
import rightDirectionSvg from "../../../public/right-direction.svg"
import peopleCoffeeSvg from "../../../public/people-coffee.svg"

import Image from "next/image";

export default function Working() {
  return (
    <section className="text-gray-600 body-font" id="idea">
      <div className="container px-5 py-24 mx-auto capitalize">
        <div className="text-center mb-20 lg:w-3/5 lg:mx-auto">
          <h1 className="font-bold text-4xl capitalize text-black">
            How Gamifying mobility can help <span className="text-theme-primary underline decoration-wavy">sustainability</span> in a number of ways!
          </h1>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col ">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
           <Image src={rightDirectionSvg} alt="Right direcition" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Motivation
            </h2>
            <p className="leading-relaxed text-base">
              Gamification can incentivize and motivate users to make more
              sustainable travel choices, leading to behavioral changes that can
              have a significant impact on the environment.
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Engagement
            </h2>
            <p className="leading-relaxed text-base">
              Gamification can also engage users by providing challenges,
              leaderboards, and rewards, incentivizing sustainable trips.
            </p>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
          <Image src={bikingSvg} alt="biking on the road" />
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
          <Image src={peopleCoffeeSvg} alt="3 people with coffee" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Awareness
            </h2>
            <p className="leading-relaxed text-base">
              Gamification can raise awareness of sustainable transportation
              options and their benefits, making sustainable transportation more
              mainstream.
            </p>
          </div>
        </div>
        <button className="flex mx-auto mt-20 text-white `bg-green-500` border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg font-mono">
          How We Will Sustain The App!
        </button>
      </div>
    </section>
  );
}
