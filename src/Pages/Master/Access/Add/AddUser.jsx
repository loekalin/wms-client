import React, { useState } from "react";

const AddUser = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <section>
      <h1 className="text-3xl font-semibold">Master User</h1>
      <h1 className="my-8 font-semibold text-2xl">Tambahkan User Baru</h1>{" "}
      <section className="mt-4 bg-white shadow-[1px_3px_12px_rgba(0,0,0,0.25)] rounded-lg">
        {/* todo */}
        <form className="flex flex-wrap flex-row  gap-x-6 py-6 gap-y-4 px-4">
          <InputEdit />
        </form>
        <section className="flex py-6 px-4 flex-row justify-end">
          <section className="space-x-4 w-full justify-end flex flex-row">
            <button
              onClick={() => setIsEdit((prev) => !prev)}
              className="btn w-1/12 hover:bg-slate-200 hover:text-[#1d4291] hover:border-[#0f3381] border-[#1A56DB] bg-white text-[#1A56DB] "
            >
              Cancel
            </button>
            <button className="btn w-1/12 hover:bg-[#0f3381] bg-[#1A56DB] border-none ">Save</button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default AddUser;

const InputEdit = () => {
  return (
    <>
      <section>
        <h1 className="text-xl font-semibold">Username</h1>
        <input type="text" className="border p-1 rounded-sm mt-2" placeholder="" />
      </section>
      <section>
        <h1 className="text-xl font-semibold">Password</h1>
        <input type="text" className="border p-1 rounded-sm mt-2" placeholder="" />
      </section>
      <section className=" w-60 ">
        <h1 className="text-xl font-semibold">Access</h1>
        <select className="select select-bordered w-full">
          <option disabled selected>
            User
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </section>
    </>
  );
};
