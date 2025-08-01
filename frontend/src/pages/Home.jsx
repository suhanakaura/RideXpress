import React, { useRef, useState } from "react";
import mapimg from "../assets/mpimg.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import car from "../assets/car2.webp"
import moto from "../assets/moto.png"
import auto from "../assets/auto.webp"

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    setPickup("");
    setDestination("");
  };
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 20
        });
        gsap.to(panelCloseRef.current,{
          opacity:1
        })
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 20
        });
        gsap.to(panelCloseRef.current,{
          opacity:0
        })
      }
    },
    [panelOpen]
  );

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
      transform:'translateY(0)'
    })
    }
    else{
      gsap.to(vehiclePanelRef.current,{
      transform:'translateY(100%)'
    })
    }
  },[vehiclePanel])
  return (
    <div className="h-screen relative overflow-hidden">
      <h1 className="absolute left-5 top-5 text-2xl font-semibold">
        RideXpress
      </h1>
      <div className="h-screen w-screen">
        <img className="h-full w-full object-cover" src={mapimg} alt="" />
      </div>
      <div className="flex flex-col justify-end h-screen top-0 absolute w-full ">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            onClick={() => {
              setPanelOpen(false);
            }}
            ref = {panelCloseRef}
            className="absolute top-6 opacity-0 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold mb-5 mt-3">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[52%] left-10 bg-gray-900"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg mb-3 w-full"
              type="text"
              value={pickup}
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              placeholder="Add a pick-up location"
            />
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg mb-3 w-full"
              type="text"
              value={destination}
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[0%] bg-white">
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className="fixed w-full px-3 py-6 z-10 bottom-0 bg-white translate-y-full">
        <h5 onClick={()=>{setVehiclePanel(false)}} className="py-1 absolute top-0 text-center w-[93%]"><i className="ri-arrow-down-wide-line text-2xl text-gray-200"></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
        <div className="flex w-full border-2 border-gray-100 active:border-black mb-2 rounded-xl p-3 items-center justify-between">
          <img className="h-15 bg-transparent" src={car} alt="" />
          <div className="w-1/2 ml-4">
            <h4 className="font-medium text-lg">XpressCar<span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, secure rides</p>
          </div>
          <div className="text-xl font-semibold">$193.20</div>
        </div>
        <div className="flex w-full border-2 border-gray-100 active:border-black mb-2 rounded-xl p-3 items-center justify-between">
          <img className="h-15 bg-transparent" src={moto} alt="" />
          <div className="w-1/2 ml-10">
            <h4 className="font-medium text-lg">XpressMoto<span><i className="ri-user-fill"></i>2</span></h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, secure rides</p>
          </div>
          <div className="text-xl font-semibold">$60.90</div>
        </div>
        <div className="flex w-full mb-2 border-2 border-gray-100 active:border-black rounded-xl p-3 items-center justify-between">
          <img className="h-15 bg-transparent" src={auto} alt="" />
          <div className="w-1/2 ml-8">
            <h4 className="font-medium text-lg">XpressAuto<span><i className="ri-user-fill"></i>3</span></h4>
            <h5 className="font-medium text-sm">5 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, secure rides</p>
          </div>
          <div className="text-xl font-semibold">$100.8</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
