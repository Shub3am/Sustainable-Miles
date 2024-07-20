"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Map from "../components/Map/Map";

export default function Dashboard() {
  const options = [
    { name: "Ride", href: "/search", img: "/car.jpg" },
    { name: "Leaderboard", href: "/leaderboard", img: "/cycle.jpg" },
  ];
  const [date, setDate] = useState(new Date().toISOString().slice(0, 16));
  const router = useRouter();
  useEffect(() => {
    if (!localStorage["data"]) {
      router.push("/login");
    }
  });
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Map />
      <div className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-4">
          {options.map((opt, id) => (
            <Link href={opt.href} key={id} passHref>
              <div className="flex flex-col flex-1 m-1 h-52 items-center justify-center rounded-lg shadow-md transform hover:scale-105 transition text-xl cursor-pointer relative overflow-hidden ">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={opt.img}
                  alt={opt.name}
                  layout="fill"
                />
                <p className="relative z-10 text-white p-2 text-5xl bg-black bg-opacity-70">
                  {opt.name}
                </p>
              </div>
            </Link>
          ))}
          <div className="flex flex-col bg-white flex-1 m-1 h-52 items-center justify-center rounded-lg shadow-md transform text-xl cursor-pointer text-green-600">
            <input
              id="date"
              type="datetime-local"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
