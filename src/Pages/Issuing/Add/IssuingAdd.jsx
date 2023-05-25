import React, { useRef } from "react";
import { addIssuingStore } from "@/Lib/addIssuingStore";
import { useNavigate } from "react-router-dom";

const IssuingAdd = () => {
  return (
    <section className="w-full">
      <h1 className="text-3xl font-semibold">Issuing</h1>
      <section className="flex-row flex gap-x-8">
        <div className="w-1/3 mt-4">
          <LeftSection />
        </div>
        <div className="w-2/3 mt-4">
          <RightSection />
        </div>
      </section>
    </section>
  );
};

export default IssuingAdd;

const LeftSection = () => {
  const kategori = ["Sembako", "Pakaian"];
  const subKategori = ["Beras", "Minyak"];
  const barang = ["Beras Merah", "Beras Putih"];
  const satuanBarang = ["Kg", "Lusin"];

  const addIssuingData = addIssuingStore((state) => state.addData);
  const kategoriRef = useRef("");
  const subKategoriRef = useRef("");
  const barangRef = useRef("");
  const jumlahBarangRef = useRef("");
  const satuanBarangRef = useRef("");

  const kategoriHandler = (e) => {
    kategoriRef.current = e.target.value;
  };
  const subKategoriHandler = (e) => {
    subKategoriRef.current = e.target.value;
  };
  const barangHandler = (e) => {
    barangRef.current = e.target.value;
  };
  const jumlahBarangHandler = (e) => {
    jumlahBarangRef.current = e.target.value;
  };
  const satuanBarangHandler = (e) => {
    satuanBarangRef.current = e.target.value;
  };
  const doAddData = () => {
    addIssuingData({
      kategori: kategoriRef.current,
      subKategori: subKategoriRef.current,
      barang: barangRef.current,
      jumlahBarang: jumlahBarangRef.current,
      satuanBarang: satuanBarangRef.current,
      tanggalBarang: new Date().toLocaleString(),
    });
  };

  return (
    <>
      <h1 className=" font-semibold text-xl">Barang</h1>
      <div className="mt-4  bg-white shadow-[1px_3px_12px_rgba(0,0,0,0.25)] rounded-lg p-4">
        <div className="flex flex-col space-y-2">
          <h1 className="font-medium ">Pilih Kategori</h1>
          <select
            onChange={kategoriHandler}
            ref={kategoriRef}
            className="select text-opacity-60 text-black font-medium select-bordered w-full"
          >
            <option disabled selected>
              Pilih Kategori
            </option>
            {/* kategori */}
            {kategori.map((data, index) => {
              return (
                <option key={index} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          {/*Sub Kategori  */}
          <h1 className="font-medium pt-4">Pilih Sub-Kategori</h1>
          <select
            onChange={subKategoriHandler}
            ref={subKategoriRef}
            className="select text-opacity-60  text-black font-medium  select-bordered w-full "
          >
            <option disabled selected>
              Pilih Sub Kategori
            </option>
            {subKategori.map((data, index) => {
              return (
                <option key={index} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          {/* Barang */}
          <h1 className="font-medium pt-4">Pilih Barang</h1>
          <select
            onChange={barangHandler}
            ref={barangRef}
            className="select text-opacity-60  text-black  font-medium select-bordered w-full "
          >
            <option disabled selected>
              Pilih Sub Kategori
            </option>
            {barang.map((data, index) => {
              return (
                <option key={index} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          {/* Jumlah Barang */}
          <h1 className="font-medium  pt-4">Jumlah Barang</h1>
          <input
            onChange={jumlahBarangHandler}
            ref={jumlahBarangRef}
            type="number"
            className="border border-gray-300  rounded-lg p-3 mb-9"
            placeholder="321"
          />
          {/* Satuan Barang */}
          <h1 className="font-medium  pt-4">Satuan Barang</h1>
          <select
            onChange={satuanBarangHandler}
            ref={satuanBarang}
            className="select text-opacity-60  text-black font-medium  select-bordered w-full "
          >
            <option disabled selected>
              Pilih Satuan Barang
            </option>
            {satuanBarang.map((data, index) => {
              return (
                <option key={index} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
        </div>
        <button onClick={doAddData} className="btn mx-auto w-full mt-8 hover:bg-[#0f3381] bg-[#1A56DB] border-none">
          Tambah
        </button>
      </div>
    </>
  );
};

const RightSection = () => {
  const data = ["NO", "KATEGORI", "SUB - KATEGORI", "NAMA", "JUMLAH", "SATUAN", "TANGGAL & WAKTU", "SUPPLIER", "AKSI"];
  const issuingData = addIssuingStore((state) => state.data);
  const removeData = addIssuingStore((state) => state.removeData);
  const navigate = useNavigate()

  const deleteData = (index) => {
    removeData(index);
  };
  const cancelButton = () => {
    navigate("/issuing")
  }
  return (
    <>
      <h1 className=" font-semibold text-xl">Detail Barang</h1>
      <div className="mt-4 bg-white shadow-[1px_3px_12px_rgba(0,0,0,0.25)] rounded-lg p-4">
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                {data.map((item, i) => {
                  return <th key={i}>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {issuingData &&
                issuingData.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item.kategori}</td>
                      <td>{item.subKategori}</td>
                      <td>{item.barang}</td>
                      <td>
                        <p className="bg-gray-200  rounded-lg text-center">{item.jumlahBarang}</p>
                      </td>
                      <td>{item.satuanBarang}</td>
                      <td>{item.tanggalBarang}</td>
                      <td>{":v"}</td>
                      <td className="text-red-600 font-semibold cursor-pointer hover:underline" onClick={() => deleteData(i)}>
                        {" "}
                        Remove
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <section className="flex flex-row justify-end gap-x-4">
            <button onClick={cancelButton} className="btn  w-52 mt-8 hover:bg-slate-200 hover:text-[#1d4291] hover:border-[#0f3381] border-[#1A56DB] bg-white text-[#1A56DB]">Cancel</button>
            <button className="btn w-52 mt-8 hover:bg-[#0f3381] bg-[#1A56DB] border-none">Simpan</button>
          </section>
        </div>
      </div>
    </>
  );
};
