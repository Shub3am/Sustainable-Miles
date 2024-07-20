import Image from "next/image";

export default function Header() {
  return (
    <header className="shadow">
      <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-2 py-2 md:mx-auto md:flex-row md:items-center">
        <a
          href="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <Image alt="logo" src="/electric-car.png" width={50} height={50} />
          <span className="ml-3 text-xl">Sustainable Miles</span>
        </a>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className="text-gray-600 md:mr-12 hover:text-theme-primary">
              <a href="/#howitworks">How it Works</a>
            </li>
            <li className="text-gray-600 md:mr-12 hover:text-theme-primary">
              <a href="/#idea">Our Initiative</a>
            </li>
            <li className="text-gray-600 md:mr-12 hover:text-theme-primary">
              <a href="/dashboard">
                <button className="rounded border-theme-primary px-6 py-2 font-medium hover:bg-theme-primary-hover transition-colors bg-theme-primary text-white">
                  Dashboard
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
