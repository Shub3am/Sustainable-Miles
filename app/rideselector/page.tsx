"use client";
import { useEffect, useState } from "react";
// import tw from "tailwind-styled-components";
import Map from "../components/Map/Map";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import RideSelector from "./RideSelector";

const Confirm = ({ searchParams }) => {
  const router = useRouter();
  const { pickuplocation, dropofflocation } = searchParams;
  const [points, SelectPoints] = useState(750);
  const [pickupCoordinate, setPickupCoordinate] = useState([
    -77.052256, 38.924735,
  ]);
  const [dropoffCoordinate, setDropoffCoordinate] = useState([
    -77.1703, 38.8407,
  ]);

  const getPickupCoordinate = (pickuplocation) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickuplocation}.json?` +
        new URLSearchParams({
          access_token: process.env.NEXT_PUBLIC_mapbox,
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinate(data.features[0].center);
      });
  };

  const getDropoffCoordinate = (dropofflocation) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropofflocation}.json?` +
        new URLSearchParams({
          access_token: process.env.NEXT_PUBLIC_mapbox,
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinate(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinate(pickuplocation);
    getDropoffCoordinate(dropofflocation);
  }, [pickuplocation, dropofflocation]);

  return (
    <div className="flex flex-col h-screen ">
      <div
        className="rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
">
        <Link href="/selector" passHref>
          <Image
            width={30}
            height={30}
            alt="left"
            className={"h-full object-contain"}
            src="https://img.icons8.com/ios-filled/50/000000/left.png"
          />
        </Link>
      </div>

      <Map
        pickupCoordinate={pickupCoordinate}
        dropoffCoordinate={dropoffCoordinate}
      />
      <div className="flex-1  h-1/2 overflow-y-scroll flex flex-col">
        <RideSelector
          updatePoints={SelectPoints}
          pickupCoordinate={pickupCoordinate}
          dropoffCoordinate={dropoffCoordinate}
        />
        <div
          className="bg-black flex text-xl items-center py-4 text-white mt-4 justify-center text-center m-4 transform hover:scale-105 transition cursor-pointer
"
          onClick={async () => {
            let dat = JSON.parse(localStorage.getItem("data"));
            let call = await fetch(
              `${process.env.NEXT_PUBLIC_backend_url}/points`,
              {
                method: "POST",
                body: JSON.stringify({
                  points: points,
                  id: dat.data.id,
                }),
                headers: { authorization: localStorage.getItem("data") },
              }
            ).then((res) => res.json());
            if (call.error) {
              alert(call.error);
            } else {
              router.push("/success");
            }
          }}
          style={{ marginBottom: 50 }}>
          Confirm
        </div>
      </div>
    </div>
  );
};

export default Confirm;
