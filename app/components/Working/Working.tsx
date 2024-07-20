import engagementSvg from "../../../public/engagement.svg";
import rightDirectionSvg from "../../../public/right-direction.svg";
import peopleCoffeeSvg from "../../../public/people-coffee.svg";

import Image from "next/image";

export default function Working() {
  return (
    <section className="text-gray-600 body-font" id="idea">
      <div className="container px-5 py-24 mx-auto capitalize">
        <div className="text-center mb-20 lg:w-3/5 lg:mx-auto">
          <h1 className="font-bold sm:text-4xl text-2xl capitalize text-black">
            How Gamifying mobility can help{" "}
            <span className="text-theme-primary underline decoration-wavy">
              sustainability
            </span>{" "}
            in a number of ways!
          </h1>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 mt-12 border-gray-200 sm:flex-row flex-col gap-8">
          <div className="lg:w-1/3 inline-flex items-center justify-center sm:relative absolute opacity-25 md:opacity-100">
            <Image
              src={rightDirectionSvg}
              alt="Right direcition"
              className="w-2/3"
            />
          </div>
          <div className="lg:w-2/3 flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-2xl title-font font-semibold mb-2 underline decoration-wavy decoration-theme-primary">
              Motivation
            </h2>
            <p className="leading-relaxed text-base">
              Gamification can incentivize and motivate users to make more
              sustainable travel choices, leading to behavioral changes that can
              have a significant impact on the environment. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Ipsa dolores magni esse
              expedita doloribus laborum odio earum omnis voluptatum nobis!
            </p>
          </div>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 w-2/3 ">
            <h2 className="text-gray-900 text-2xl title-font font-semibold mb-2 underline decoration-wavy decoration-theme-primary">
              Engagement
            </h2>
            <p className="leading-relaxed text-base">
              Gamification can also engage users by providing challenges,
              leaderboards, and rewards, incentivizing sustainable trips. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Sunt quasi,
              rerum nulla at nesciunt atque illum nisi illo iure sequi enim?
              Molestias, necessitatibus quaerat iure aliquam deserunt voluptatem
              quis tenetur.
            </p>
          </div>
          <div className="lg:w-1/3 inline-flex items-center justify-center rounded-full  sm:relative absolute opacity-25 md:opacity-100">
            <Image src={engagementSvg} alt="biking on the road" className="w-2/3" />
          </div>
        </div>
        <div className="flex items-center mx-auto sm:flex-row flex-col">
          <div className="lg:w-1/3 inline-flex items-center justify-center rounded-full sm:relative absolute opacity-25 md:opacity-100">
            <Image
              src={peopleCoffeeSvg}
              alt="3 people with coffee"
              className="w-2/3"
            />
          </div>
          <div className="w-2/3 flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-2xl title-font font-semibold mb-2 underline decoration-wavy decoration-theme-primary">
              Awareness
            </h2>
            <p className="leading-relaxed text-base">
              Gamification can raise awareness of sustainable transportation
              options and their benefits, making sustainable transportation more
              mainstream. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Amet architecto asperiores accusantium vel deserunt ab,
              nulla sit animi pariatur. Velit?
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
