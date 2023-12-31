"use client"
import React from "react";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../transportList";
import "./dash.css"

const RideSelector = (props) => {
  
  const [rideDuration, setRideDuration] = useState(0);
  const [selected, setSelected] = useState({index: "", enabled: false})

  useEffect(() => {
    const pickupCoord = props.pickupCoordinate;
    const dropoffCoord = props.dropoffCoordinate;

    if (pickupCoord && dropoffCoord) {
      rideDurationf(props);
    }
  }, [props]);

  const rideDurationf = (props) => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${props.pickupCoordinate[0]},${props.pickupCoordinate[1]};${props.dropoffCoordinate[0]},${props.dropoffCoordinate[1]}?` +
        new URLSearchParams({
          access_token: "pk.eyJ1Ijoic2h1YmhhbXZzIiwiYSI6ImNsbnFsemhubDEwZ2gyam1wNzBnMmw3aDIifQ.lz2spERI3IHw2H9qLT0sNA",
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
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <div key={index} className={selected.index == index ? "color": ""}>
          <Car key={index} onClick={()=>{setSelected({index: index, enabled: !selected.enabled})
        localStorage.setItem("pointer", String(car.points))
        }}>
            
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>{Math.round(Math.random() * 100 + 5)} min away {car.points}</Time>
            </CarDetails>
            <CarPrice>
              {"$" + (rideDuration * car.multiplier).toFixed(2) }
            </CarPrice>
          </Car></div>
        ))}
      </CarList>
    </Wrapper>
  );
};

const Wrapper = tw.div`
 flex-1  overflow-y-scroll flex flex-col flex flex-col
`;

const Title = tw.div`
text-center text-s text-gray-500 border-b py-2
`;
const CarList = tw.div`
border-b overflow-y-scroll 
`;
const Car = tw.div`
flex items-center 
`;

const CarImage = tw.img`
h-20 px-4
`;

const CarDetails = tw.div`
flex-1 px-8
`;
const Service = tw.div`
font-semibold`;
const Time = tw.div`
text-blue-500 text-xs
`;

const CarPrice = tw.div`
px-4 text-sm
`;

export default RideSelector;
