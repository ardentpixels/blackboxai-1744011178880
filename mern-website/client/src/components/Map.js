import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Map = () => {
  return (
    <div className="map-container p-4 bg-gray-100 rounded-lg">
      <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
        <FaMapMarkerAlt className="text-red-500" /> 
        Our Location
      </h3>
      <div className="map-placeholder bg-white p-8 rounded shadow text-center">
        <p className="text-gray-500">Map integration would be displayed here</p>
      </div>
    </div>
  );
};

export default Map;