import Image from "next/image";
import electric_car from "./electric-car.png";
export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto justify-center">
          <a className="mr-5 hover:text-gray-900" href="/">
            Home
          </a>
          <a className="mr-5 hover:text-gray-900" href="/#howitworks">
            How It Works
          </a>
          <a className="hover:text-gray-900" href="/#idea">
            Our Idea
          </a>
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <Image alt="logo" src={electric_car} width={50} height={50} />
          <span className="ml-3 text-xl">Sustainable Miles</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-center ml-5 lg:ml-0">
          <a href="/accounts/login">
            <button className="inline-flex items-center justify-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Dashboard
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
