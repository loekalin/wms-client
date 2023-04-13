import React, { useState } from "react";

const ReceiveEdit = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <section>
      <h1 className="text-3xl font-semibold">Receive Detail</h1>
      <section className="mt-4 bg-white shadow-[1px_3px_12px_rgba(0,0,0,0.25)] rounded-lg">
        <h1 className="p-4 font-semibold text-2xl">Product Detail</h1>
        <div className="divider mx-4 m-0"></div>
        {/* todo */}
        <section className="flex flex-wrap flex-row  gap-x-6 py-6 gap-y-4 px-4">
          <InputEdit isEdit={isEdit} />
        </section>
        <section className="flex py-6 px-4 flex-row">
          {!isEdit && (
            <button onClick={() => setIsEdit((prev) => !prev)} className="btn w-1/12 hover:bg-[#0f3381] bg-[#1A56DB] border-none ">
              Edit
            </button>
          )}
          {isEdit && (
            <section className="space-x-4 w-full">
              <button onClick={() => setIsEdit((prev) => !prev)} className="btn w-1/12 hover:bg-slate-200 hover:text-[#1d4291] hover:border-[#0f3381] border-[#1A56DB] bg-white text-[#1A56DB] ">
                Cancel
              </button>
              <button className="btn w-1/12 hover:bg-[#0f3381] bg-[#1A56DB] border-none ">
                Save
              </button>
            </section>
          )}
        </section>
      </section>
    </section>
  );
};

export default ReceiveEdit;

const InputEdit = ({ isEdit }) => {
  return (
    <>
      <section>
        <h1 className="text-xl font-semibold">Product Name</h1>
        <input disabled={!isEdit} type="text" className="border p-1 rounded-sm mt-2" placeholder="Mintik Wangi" />
      </section>
      <section>
        <h1 className="text-xl font-semibold">Many</h1>
        <input disabled={!isEdit} type="text" className="border p-1 rounded-sm mt-2" placeholder="7" />
      </section>
      <section>
        <h1 className="text-xl font-semibold">Unit</h1>
        <input disabled={!isEdit} type="text" className="border p-1 rounded-sm mt-2" placeholder="Per 5 KG" />
      </section>
      <section>
        <h1 className="text-xl font-semibold">Supplier Name</h1>
        <input disabled={!isEdit} type="text" className="border p-1 rounded-sm mt-2" placeholder="Ahmad" />
      </section>
      <section>
        <h1 className="text-xl font-semibold">Categories</h1>
        <input disabled={!isEdit} type="text" className="border p-1 rounded-sm mt-2" placeholder="Sembako" />
      </section>
      <section>
        <h1 className="text-xl font-semibold">Sub Categories</h1>
        <input disabled={!isEdit} type="text" className="border p-1 rounded-sm mt-2" placeholder="Beras" />
      </section>
      <section>
        <h1 className="text-xl font-semibold">Number Code</h1>
        <input disabled={!isEdit} type="text" className="border p-1 rounded-sm mt-2" placeholder="XX/XXXX/XXXX" />
      </section>
    </>
  );
};
