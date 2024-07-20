import React from "react";
import Image from "next/image";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="text-gray-600 body-font border-t">
      <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">Sustainable Miles</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {year} Sustainable Miles
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Image
            src="/electric-car.png"
            alt="Facebook"
            width={50}
            height={50}
          />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
