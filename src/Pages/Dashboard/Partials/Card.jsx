import React from "react";

const Card = ({ icon, nomor, keterangan }) => {
  return (
    <div className="bg-white shadow-[1px_3px_8px_rgba(0,0,0,0.25)] p-5 rounded-lg mt-12">
      <div className="flex items-center">
        <figure className="mr-4 bg-[#E1EFFE] p-2 rounded-lg scale-150 ">{icon}</figure>
        <div className="flex-col flex">
          <h1 className="text-xl font-bold">{nomor}</h1>
          <small className="text-sm font-normal opacity-50">{keterangan}</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
