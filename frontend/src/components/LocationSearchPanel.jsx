import React from "react";

const LocationSearchPanel = () => {
  // sample array for locations
  const location = [
    "24B, near Kapoor's cafe, Himachal Pradesh",
    "20C, near Kap street, Ludhiana, Punjab",
    "50B, near Gyan Sagar, Rajpura, Punjab",
    "17D, near laxmi narayana, Bilaspur, Himachal Pradesh",
  ];
  return (
    <div>
      {location.map(function (loc) {
        return (
          <div className="flex items-center justify-start p-3 rounded-2xl border-2 border-gray-100 active:border-black gap-4 my-2">
            <h2 className="bg-[#eee] flex items-center justify-center h-9 w-11 rounded-full">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>
            <h4 className="font-medium">
              {loc}
            </h4>
          </div>
        );
      })}
      {/* sample data */}

      
    </div>
  );
};

export default LocationSearchPanel;
