import React, { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const ReceiveEdit = () => {
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(`${import.meta.env.VITE_API_APP_URL}/api/receivings/${id}`, fetcher);
  console.log(data);
  return (
    <section>
      <h1 className="text-3xl font-semibold">Receive Detail</h1>
      <section className="mt-4 bg-white shadow-[1px_3px_12px_rgba(0,0,0,0.25)] rounded-lg">
        <h1 className="p-4 font-semibold text-2xl">Product Detail</h1>
        <div className="divider mx-4 m-0"></div>
        {/* todo */}
        <section className="flex flex-wrap flex-row  gap-x-6 py-6 gap-y-4 px-4">
          <InputEdit
            isLoading={isLoading}
            category={data?.[0].category}
            product_name={data?.[0].product}
            satuan={data?.[0].satuan}
            sub_category={data?.[0].sub_category}
            supplier={data?.[0].supplier}
            value={data?.[0].value}
            uuid={data?.[0].uuid}
            isEdit={isEdit}
          />
        </section>
        <section className="flex py-6 px-4 flex-row">
          {!isEdit && (
            <button
              onClick={() => setIsEdit((prev) => !prev)}
              className="btn w-1/12 hover:bg-[#0f3381] bg-[#1A56DB] border-none "
            >
              Edit
            </button>
          )}
          {isEdit && (
            <section className="space-x-4 w-full">
              <button
                onClick={() => setIsEdit((prev) => !prev)}
                className="btn w-1/12 hover:bg-slate-200 hover:text-[#1d4291] hover:border-[#0f3381] border-[#1A56DB] bg-white text-[#1A56DB] "
              >
                Cancel
              </button>
              <button className="btn w-1/12 hover:bg-[#0f3381] bg-[#1A56DB] border-none ">Save</button>
            </section>
          )}
        </section>
      </section>
    </section>
  );
};

export default ReceiveEdit;

const InputEdit = ({ isLoading, isEdit, product_name, value, satuan, supplier, sub_category, category, uuid }) => {
  return (
    <>
      {isLoading ? (
        <TailSpin color="black" wrapperClass="flex w-full p-5 items-center justify-center" />
      ) : (
        <>
          <section>
            <h1 className="text-xl font-semibold">Product Name</h1>
            <input
              disabled={!isEdit}
              type="text"
              className="border p-1 rounded-sm mt-2"
              value={product_name}
              placeholder={product_name}
            />
          </section>
          <section>
            <h1 className="text-xl font-semibold">Many</h1>
            <input
              disabled={!isEdit}
              type="text"
              className="border p-1 rounded-sm mt-2"
              value={value}
              placeholder={value}
            />
          </section>
          <section>
            <h1 className="text-xl font-semibold">Unit</h1>
            <input
              disabled={true}
              type="text"
              className="border p-1 rounded-sm mt-2"
              value={satuan}
              placeholder={satuan}
            />
          </section>
          <section>
            <h1 className="text-xl font-semibold">Supplier Name</h1>
            <input
              disabled={true}
              type="text"
              className="border p-1 rounded-sm mt-2"
              value={supplier}
              placeholder={supplier}
            />
          </section>
          <section>
            <h1 className="text-xl font-semibold">Categories</h1>
            <input
              disabled={true}
              type="text"
              className="border p-1 rounded-sm mt-2"
              value={category}
              placeholder={category}
            />
          </section>
          <section>
            <h1 className="text-xl font-semibold">Sub Categories</h1>
            <input
              disabled={true}
              type="text"
              className="border p-1 rounded-sm mt-2"
              value={sub_category}
              placeholder={sub_category}
            />
          </section>
          <section>
            <h1 className="text-xl font-semibold">Number Code</h1>
            <input disabled={true} type="text" className="border p-1 rounded-sm mt-2" value={uuid} placeholder={uuid} />
          </section>
        </>
      )}
    </>
  );
};
