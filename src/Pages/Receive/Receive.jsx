import React from "react";
import SearchButton from "@/Pages/Receive/Partials/SearchButton";
import Table from "@/Pages/Receive/Partials/Table";
import { useNavigate } from "react-router-dom";
const Receive = () => {
  const navigate = useNavigate()
  return (
    <section>
      <h1 className="text-3xl font-semibold">Receive</h1>
      <section className="mt-4 bg-white shadow-[1px_3px_12px_rgba(0,0,0,0.25)] rounded-lg">
        <h1 className="p-4 font-semibold text-xl">All Receive</h1>
        <div className="flex flex-row justify-between mx-4">
          <SearchButton />
          <button onClick={()=> navigate("/receive/add/")} className="btn hover:bg-[#0f3381] bg-[#1A56DB] border-none">+ &nbsp; Add new Product</button>
        </div>
        <div className="divider mx-4"></div>
        {/* todo */}
        <Table />
      </section>
    </section>
  );
};

export default Receive;
