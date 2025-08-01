import React, { useRef, useState } from "react";
import mapimg from "../assets/mpimg.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
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
  },[vehiclePanel]);

  useGSAP(function(){
    if(confirmedRidePanel){
      gsap.to(confirmedRidePanelRef.current,{
      transform:'translateY(0)'
    })
    }
    else{
      gsap.to(confirmedRidePanelRef.current,{
      transform:'translateY(100%)'
    })
    }
  },[confirmedRidePanel]);

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
      transform:'translateY(0)'
    })
    }
    else{
      gsap.to(vehicleFoundRef.current,{
      transform:'translateY(100%)'
    })
    }
  },[vehicleFound]);

  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
      transform:'translateY(0)'
    })
    }
    else{
      gsap.to(waitingForDriverRef.current,{
      transform:'translateY(100%)'
    })
    }
  },[waitingForDriver]);
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
      <div ref={vehiclePanelRef} className="fixed w-full px-3 py-6 z-10 bottom-0 bg-white translate-y-full pt-12">
        <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div ref={confirmedRidePanelRef} className="fixed w-full px-3 py-6 z-10 bottom-0 bg-white translate-y-full pt-12">
        <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div  ref={vehicleFoundRef} className="fixed w-full px-3 py-6 z-10 bottom-0 bg-white translate-y-full pt-12">
        <LookingForDriver setVehicleFound={setVehicleFound} setConfirmedRidePanel={setConfirmedRidePanel}/>
      </div>
      <div ref={waitingForDriverRef} className="fixed w-full px-3 py-6 z-10 bottom-0 translate-y-full bg-white  pt-12">
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} setVehicleFound={setVehicleFound}/>
      </div>
    </div>
  );
};

export default Home;
