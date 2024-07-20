"use client";
import React, { useState, useEffect } from "react";
// import tw from "tailwind-styled-components";
import Link from "next/link";
import Image from "next/image";

const Search = () => {
  const [pickuplocation, setPickuplocation] = useState("");
  const [dropofflocation, setDropofflocation] = useState("");

  return (
    <div className="bg-gray-200 h-screen">
      <Link href="/dashboard" passHref>
        <div className="bg-white px-4">
          <Image
            alt="map"
            className={"h-12 cursor-pointer"}
            src="https://img.icons8.com/ios-filled/50/000000/left.png"
            height={40}
            width={40}
          />
        </div>
      </Link>
      <div className="bg-white flex items-center px-4 mb-2">
        <div className="flex flex-col w-10 mr-2 items-center">
          <Image
            alt="circle"
            width={10}
            height={10}
            className="h-2.5"
            src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
          />
          <Image
            alt="line"
            width={10}
            height={10}
            className="h-10"
            src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
          />
          <Image
            alt="square"
            width={10}
            height={10}
            className="h-3"
            src="https://img.icons8.com/windows/50/000000/square-full.png"
          />
        </div>
        <div className="flex flex-col flex-1">
          <input
            className="h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none"
            placeholder="Enter pickup location"
            onChange={(event) => setPickuplocation(event.target.value)}
          />
          <input
            className="h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none"
            placeholder="Where to?"
            onChange={(event) => setDropofflocation(event.target.value)}
          />
        </div>
        <Image
          alt="rounded"
          width={10}
          height={10}
          className=" h-10 w-10 bg-gray-200 rounded-full ml-3"
          src="https://img.icons8.com/ios/50/000000/plus-math.png"
        />
      </div>
      <div className="bg-white flex text-l  items-center px-4 py-2 text-red-600">
        <Image
          width={10}
          height={10}
          alt="star"
          className="rounded-full bg-gray-400 p-2 mr-2 h-10 w-10"
          src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"
        />
        Saved Places (Not available)
      </div>
      <Link
        href={{
          pathname: "/rideselector",
          query: {
            pickuplocation: pickuplocation,
            dropofflocation: dropofflocation,
          },
        }}
        passHref>
        <div className="bg-black flex text-xl items-center py-2 text-white mt-4 justify-center text-center m-12 transform hover:scale-105 transition cursor-pointer">
          Confirm Locations
        </div>
      </Link>
      <div className="flex m-auto items-center justify-center flex-col gap-3">
        <Image src={"/meme_reddit.webp"} alt="meme" width={350} height={350} />
        <h3>Your Cat Cab On the Way!</h3>
      </div>
    </div>
  );
};

export default Search;
