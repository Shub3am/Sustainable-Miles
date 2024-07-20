"use client";
import React from "react";
import { useEffect, useState } from "react";
import { carList } from "./TransportList";
import "./dash.css";
import Image from "next/image";

const RideSelector = (props) => {
  const [rideDuration, setRideDuration] = useState(0);
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
                width={40}
                height={40}
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
                  className="text-blue-500 text-xs
">
                  {Math.round(Math.random() * 100 + 5)} min away {car.points}
                </div>
              </div>
              <div
                className="px-4 text-sm
">
                {"$" + (rideDuration * car.multiplier).toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideSelector;
