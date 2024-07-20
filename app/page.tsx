import Banner from "./components/Banner/Banner";
import Process from "./components/Process/Process";
import ReduceCost from "./components/ReduceCost/ReduceCost";
import Working from "./components/Working/Working";
export default function Home() {
  return (
    <div>
      <Banner />
      <ReduceCost />
      <Working />
      <Process />
    </div>
  );
}
