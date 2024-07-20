import Image from "next/image";
import successSvg from "../../public/success.svg";

export default function Success() {
  return (
    <div className="text-gray-600 relative lg:px-4 px-8 py-16 mx-auto lg:pt-32 md:px-8 xl:px-20 sm:max-w-full md:max-w-full capitalize flex justify-between items-center lg:flex-row flex-col gap-8">
      <div className="lg:w-1/3 mx-auto inline-flex items-center justify-center">
        <Image src={successSvg} alt="happy girl" className="w-2/3" />
      </div>

      <div className="sm:text-left text-center lg:w-3/5 lg:mx-auto">
        <h1 className="font-bold sm:text-4xl text-2xl capitalize text-black">
          Thank You for{" "}
          <span className="text-theme-primary underline decoration-wavy decoration-theme-primary">
            Successfully
          </span>{" "}
          completing your trip!
        </h1>
        <p className="leading-relaxed text-base mt-9 text-md">
          Thank you for completing your trip with us! We hope you had a
          fantastic experience and made wonderful memories. Your feedback is
          invaluable to us, and we'd love to hear your thoughts and suggestions
          to help us improve our services. Please take a moment to share your
          experience. Additionally, start planning your next adventure with
          us—we're excited to assist you in creating another amazing journey.
          Let us know how we can make your next trip even better!
        </p>
      </div>
    </div>
  );
}
