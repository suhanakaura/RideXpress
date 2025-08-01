import React from "react";
import car from "../assets/car2.webp"

const ConfirmedRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmedRidePanel(false);
        }}
        className="py-1 absolute top-0 text-center w-[93%]"
      >
        <i className="ri-arrow-down-wide-line text-2xl text-gray-200"></i>
      </h5>
        <h3 className="text-2xl font-semibold mb-5 text-center">Confirm your Ride</h3>
        <div className="flex flex-col justify-between items-center gap-2">
          <img className="h-40" src={car} alt="" />
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-t-2 border-gray-200">
              <i className="text-lg ri-map-pin-range-line"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">Kankariya Talab Ahemdabad</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-t-2 border-gray-200">
              <i className="text-lg ri-map-pin-5-line"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">Kankariya Talab Ahemdabad</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-t-2 border-gray-200">
              <i className="text-lg ri-money-rupee-circle-line"></i>
              <div>
                <h3 className="text-lg font-medium">Rs. 192.30</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
          <button className="mt-5 w-[70%] rounded-lg p-2 bg-green-600 text-white font-semibold">Confirm</button>
        </div>
    </div>
  );
};

export default ConfirmedRide;
