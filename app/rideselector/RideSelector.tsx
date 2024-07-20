"use client";
import React from "react";
import { useEffect, useState } from "react";
import { carList } from "./TransportList";
import "./dash.css";
import Image from "next/image";
import haversineDistance from "@erexstudio/geo-span-measure";

const RideSelector = (props) => {
  const [rideDuration, setRideDuration] = useState(0);
  const [rideDistance, setRideDistance] = useState(0);
  const [selected, setSelected] = useState({ index: "", enabled: false });

  useEffect(() => {
    const pickupCoord = props.pickupCoordinate;
    const dropoffCoord = props.dropoffCoordinate;

    if (pickupCoord && dropoffCoord) {
      rideDurationf(props);
    }
  }, [props]);

  const rideDurationf = (props) => {
    let mapboxAPI = process.env.NEXT_PUBLIC_mapbox;
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${props.pickupCoordinate[0]},${props.pickupCoordinate[1]};${props.dropoffCoordinate[0]},${props.dropoffCoordinate[1]}?` +
        new URLSearchParams({
          access_token: process.env.NEXT_PUBLIC_mapbox,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.routes[0]) {
          console.log(data);
          setRideDistance(Math.round(data.routes[0].distance / 1000));
          setRideDuration(data.routes[0].duration / 100);
        }
      });
  };

  return (
    <div className="flex-1  overflow-y-scroll flex flex-col flex flex-col">
      <div
        className="text-center text-s text-gray-500 border-b py-2
">
        Choose a ride, or swipe up for more
      </div>
      <div
        className="border-b overflow-y-scroll
">
        {carList.map((car, index) => (
          <div key={index} className={selected.index == index ? "color" : ""}>
            <div
              className="flex items-center
"
              key={index}
              onClick={() => {
                setSelected({ index: index, enabled: !selected.enabled });
                localStorage.setItem("pointer", String(car.points));
              }}>
              <Image
                alt="car-image"
                width={100}
                height={100}
                className={"px-4"}
                src={car.imgUrl}
              />
              <div
                className="flex-1 px-8
">
                <div
                  className="font-semibold`;
">
                  {car.service}
                </div>
                <div
                  className="text-blue-500 text-xs flex gap-3
">
                  <p>{Math.round(Math.random() * 15 + 5)} min away</p>|
                  <p> {car.points} Points</p>
                </div>
              </div>
              <div
                className="px-4 text-sm flex flex-col gap-1 line-through
">
                <p>
                  {"Petrol Cost: ₹" +
                    (rideDistance * (car.multiplier * 2)).toFixed(2)}
                </p>
                <p>
                  {" "}
                  {"Diesel Cost: ₹" +
                    (rideDistance * (car.multiplier * 1.75)).toFixed(2)}
                </p>
              </div>
              <div
                className="px-4 text-sm
">
                {"₹" + (rideDistance * car.multiplier).toFixed(2)}
                <p>{rideDistance}km</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideSelector;
