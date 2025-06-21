import React from "react";

function ItemCard({id, name, price, imageUrl}) {
  return (
    <a href={'products/'+id} className="group block overflow-hidden">
      <div className="relative h-[350px] sm:h-[450px]">
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
        />

        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>

      <div className="relative bg-white pt-3">
        <h3 className="text-m text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {name}
        </h3>

        <p className="mt-1.5 tracking-wide text-black text-xl font-bold">₹{price}</p>
      </div>
    </a>
  );
}

export default ItemCard;
