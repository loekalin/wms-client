import React from "react";
import { BiSearch } from "react-icons/bi";
import Modal from "@/Pages/Receive/Partials/Modal";

const SearchButton = () => {
  return (
    <div className="form-control cursor-pointer">
      <div className="input-group ">
        <label htmlFor="modalSearch" className="flex flex-row">
          <div className="cursor-pointer border p-[11px] rounded-tl-lg rounded-bl-lg flex items-center w-64">
            <BiSearch size={25} className="text-black opacity-40 mr-2" />
            <h1 className="text-black opacity-40">Search</h1>
          </div>
          <p className="btn border-none rounded-bl-none rounded-tl-none hover:bg-[#0f3381] bg-[#1A56DB] text-white">Search</p>
        </label>
      </div>
      <Modal />
    </div>
  );
};

export default SearchButton;
