import React from "react";

const Modal = () => {
  return (
    <>
      <input type="checkbox" id="modalSearch" className="modal-toggle" />
      <label htmlFor="modalSearch" className="modal cursor-pointer">
        <label className="modal-box absolute">
          <h1 className="text-3xl font-bold">Search</h1>
          {/* form */}
          <div className="flex flex-col space-y-2  mt-8">
            <h1 className="font-medium ">Masukkan Tanggal</h1>
            <input type="date" className="border p-1 rounded-sm" />
            <h1 className="font-medium ">Masukkan No Kode</h1>
            <input type="text" className="border p-1 rounded-sm" placeholder="kode-tahun/bulan/hari/nomor" />
            <h1 className="font-medium ">Masukkan Nama Supplier</h1>
            <input type="text" className="border p-1 rounded- mb-9" placeholder="kode-tahun/bulan/hari/nomor" />
          </div>
            <button className="btn mx-auto w-full mt-8 hover:bg-[#0f3381] bg-[#1A56DB] border-none" >Search</button>
          {/* form */}
        </label>
      </label>
    </>
  );
};

export default Modal;
