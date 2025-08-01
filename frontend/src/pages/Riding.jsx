import React from 'react'
import map from '../assets/mpimg.webp'
import car from "../assets/car2.webp";
import { Link } from 'react-router-dom';

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed h-10 w-10 bg-white border-1 border-black right-2 top-2 flex items-center justify-center rounded-full'>
            <i className="text-lg font-bold ri-home-9-fill"></i>
        </Link>
      <div className='h-1/2'>
      <img className='h-full w-full object-cover' src={map} alt="" />
      </div>
      <div className='h-1/2 p-4 '>
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
      <button className="mt-5 w-full rounded-lg p-2 bg-green-600 text-white font-semibold">Make a Payment</button>
      </div>
    </div>
  )
}

export default Riding
