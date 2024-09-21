import React from "react";

export default function ProductCard({ image, title, price, minQty, buttonText }) {
  return (
    <>

      <div className="max-w-xs p-4 border rounded-lg shadow-lg">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-md font-bold mb-2">{title}</h3>
        <p className="text-lg font-semibold text-green-500 mb-1">${price}</p>
        <p className="text-sm text-gray-500">Min. {minQty} Pcs</p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          {buttonText}
        </button>
      </div>

    
      
   
    </>

  );
}
