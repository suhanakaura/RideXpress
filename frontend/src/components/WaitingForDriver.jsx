import React from "react";
import car from "../assets/car2.webp";


const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
        className="py-1 absolute top-0 text-center w-[93%]"
      >
        <i className="ri-arrow-down-wide-line text-2xl text-gray-200"></i>
      </h5>
      <div className="flex items-center justify-between">
        <img className="h-10" src={car} alt="" />
        <div className="text-right">
          <h2 className="text-lg font-medium">Sarthak</h2>
          <h4 className="text-lg -mt-1 -mb-1 font-semibold">MP 04 AB 1234</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-2">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-t-2 border-gray-200">
            <i className="text-lg ri-map-pin-range-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab Ahemdabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-t-2 border-gray-200">
            <i className="text-lg ri-map-pin-5-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab Ahemdabad
              </p>
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
