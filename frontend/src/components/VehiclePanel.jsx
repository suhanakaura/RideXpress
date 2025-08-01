import React from "react";
import car from "../assets/car2.webp";
import moto from "../assets/moto.png";
import auto from "../assets/auto.webp";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="py-1 absolute top-0 text-center w-[93%]"
      >
        <i className="ri-arrow-down-wide-line text-2xl text-gray-200"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmedRidePanel(true);
          props.setVehiclePanel(false);
        }}
        className="flex w-full border-2 border-gray-100 active:border-black mb-2 rounded-xl p-3 items-center justify-between"
      >
        <img className="h-15 bg-transparent" src={car} alt="" />
        <div className="w-1/2 ml-4">
          <h4 className="font-medium text-lg">
            XpressCar
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, secure rides
          </p>
        </div>
        <div className="text-xl font-semibold">$193.20</div>
      </div>
      <div
        onClick={() => {
          props.setConfirmedRidePanel(true);
          props.setVehiclePanel(false);
        }}
        className="flex w-full border-2 border-gray-100 active:border-black mb-2 rounded-xl p-3 items-center justify-between"
      >
        <img className="h-15 bg-transparent" src={moto} alt="" />
        <div className="w-1/2 ml-10">
          <h4 className="font-medium text-lg">
            XpressMoto
            <span>
              <i className="ri-user-fill"></i>2
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, secure rides
          </p>
        </div>
        <div className="text-xl font-semibold">$60.90</div>
      </div>
      <div
        onClick={() => {
          props.setConfirmedRidePanel(true);
          props.setVehiclePanel(false);
        }}
        className="flex w-full mb-2 border-2 border-gray-100 active:border-black rounded-xl p-3 items-center justify-between"
      >
        <img className="h-15 bg-transparent" src={auto} alt="" />
        <div className="w-1/2 ml-8">
          <h4 className="font-medium text-lg">
            XpressAuto
            <span>
              <i className="ri-user-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">5 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, secure rides
          </p>
        </div>
        <div className="text-xl font-semibold">$100.8</div>
      </div>
    </div>
  );
};

export default VehiclePanel;
