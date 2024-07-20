"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Map from "../components/Map/Map";

export default function Dashboard() {
  const options = [
    { name: "Ride", href: "/selector", img: "/location.svg" },
    { name: "Leaderboard", href: "/leaderboard", img: "/location.svg" },
  ];
  const [date, setDate] = useState(new Date().toISOString().slice(0, 16));
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("data")) {
      router.push("/login");
    }
  }, []);
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Map />
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4">
          {options.map((opt, id) => (
            <Link href={opt.href} key={id} passHref>
              <div className="flex flex-col bg-white flex-1 m-1 h-64 items-center justify-end rounded-lg shadow-lg transform text-xl cursor-pointer px-5 py-12">
                <div className="w-44 h-44">
                  <Image src={opt.img} alt={opt.name} />
                </div>
                <p className="text-white p-2 text-lg lg:w-2/3 rounded-md text-center mt-6 bg-theme-primary">
                  {opt.name}
                </p>
              </div>
            </Link>
          ))}
          <div className="flex flex-col bg-white flex-1 m-1 h-64 items-center justify-center rounded-lg shadow-lg transform text-xl cursor-pointer px-5 py-12">
            <div className="w-44 h-44">
              <Image
                src={"/booking.svg"}
                alt="booking"
                className=""
                layout=""
              />
            </div>
            <input
              id="date"
              type="datetime-local"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="lg:w-2/3 mt-6 px-4 py-5 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-theme-primary text-white"
            />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <Link href="/search" passHref>
            <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
              Where to?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
