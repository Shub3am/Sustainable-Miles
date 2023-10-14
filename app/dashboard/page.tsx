"use client"
import tw from "tailwind-styled-components";
import Map from "./map";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter()
    useEffect(()=> {
        if(!localStorage["logged_in"]) {
            router.push("/accounts/login")
        }
    })
  return (
    <Wrapper>
      <Map />
      <ActionItems>

        <ActionButtons>
          <Link href="/search" passHref>
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton className="text-red-600">
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels (Not Available)
          </ActionButton>
          <ActionButton className="text-red-600">
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve (Not Available)
          </ActionButton>
        </ActionButtons>
        <Link href="/search" passHref>
          <InputButton>Where to ?</InputButton>
        </Link>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
 flex flex-col h-screen
`;

const ActionItems = tw.div`
 flex-1 p-4
`;

const Header = tw.div`
 flex justify-between items-center
`;

const UberLogo = tw.img`
 h-28
`;

const ActionButtons = tw.div`
flex p-2
`;

const ActionButton = tw.div`
flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl curson-pointer
`;

const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center justify-center rounded-lg transform hover:scale-105 transition mt-8
`;




