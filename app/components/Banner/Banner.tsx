import Image from "next/image";
import carRoadSvg from "../../../public/car-road.svg";

export default function Banner() {
  return (
    <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full capitalize flex justify-between items-center">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl lg:w-4/5">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6 text-center lg:text-left">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-theme-primary">
                Get Paid While You Ride
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over{" "}
              <span className="inline-block text-theme-primary underline decoration-wavy">
                a lazy dog
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Get Rewarded While You a fellow Earthling contribute by switching
              to a eco-friendly transporation!
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="/register"
              className="inline-flex items-center justify-center h-10 md:w-fit w-1/2 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-theme-primary hover:bg-theme-primary-hover focus:shadow-outline focus:outline-none">
              Get started
            </a>
            <a
              href="/#idea"
              aria-label=""
              className="inline-flex items-center justify-center h-10 md:w-fit w-1/2 px-6 mr-6 font-medium tracking-wide text-theme-primary transition duration-200 rounded shadow-md hover:bg-theme-primary-hover hover:border-theme-primary-hover hover:text-white border-2 border-theme-primary focus:shadow-outline focus:outline-none font-semibold">
              Our Idea
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full hidden md:block">
        <Image src={carRoadSvg} alt="A car on the road" className="md:w" />
      </div>
    </div>
  );
}
