import React, { useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const AddUser = () => {
  const formRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const selectRef = useRef();

  const formRefHandler = (e) => {
    e.preventDefault();
    formRef.current.reset();
  };

  const postHandler = async (e) => {
    try {
      e.preventDefault();
      const data = {
        username: usernameRef.current,
        password: passwordRef.current,
        role: selectRef.current,
      };
      const res = await axios.post(`${import.meta.env.VITE_API_APP_URL}/api/user`, data);
      MySwal.fire({
        title: <p>Success</p>,
        text: "User berhasil ditambahkan",
        icon: "success",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          formRef.current.reset();
        }
      });
    } catch (error) {
        MySwal.fire({
            title: <p>Failed</p>,
            text: "User gagal ditambahkan",
            icon: "error",
            confirmButtonText: "Ok",
        })
    }
  };

  return (
    <section>
      <h1 className="text-3xl font-semibold">Master User</h1>
      <h1 className="my-8 font-semibold text-2xl">Tambahkan User Baru</h1>{" "}
      <section className="mt-4 bg-white shadow-[1px_3px_12px_rgba(0,0,0,0.25)] rounded-lg">
        {/* todo */}
        <form ref={formRef} className="flex flex-wrap flex-row  gap-x-6 py-6 gap-y-4 px-4">
          <InputEdit
            passwordHandler={(e) => (passwordRef.current = e.target.value)}
            usernameHandler={(e) => (usernameRef.current = e.target.value)}
            selectRefHandler={(e) => (selectRef.current = e.target.value)}
            passwordRef={passwordRef}
            usernameRef={usernameRef}
            selectRef={selectRef}
          />
          <section className="flex py-6 px-4 flex-row justify-end w-full">
            <section className="space-x-4 w-full justify-end flex flex-row">
              <button
                onClick={formRefHandler}
                className="btn w-1/12 hover:bg-slate-200 hover:text-[#1d4291] hover:border-[#0f3381] border-[#1A56DB] bg-white text-[#1A56DB] "
              >
                Cancel
              </button>
              <button onClick={postHandler} className="btn w-1/12 hover:bg-[#0f3381] bg-[#1A56DB] border-none ">
                Save
              </button>
            </section>
          </section>
        </form>
      </section>
    </section>
  );
};

export default AddUser;

const InputEdit = ({ usernameHandler, passwordHandler, passwordRef, usernameRef, selectRef, selectRefHandler }) => {
  return (
    <>
      <section>
        <h1 className="text-xl font-semibold">Username</h1>
        <input
          onChange={usernameHandler}
          ref={usernameRef}
          type="text"
          className="border p-1 rounded-sm mt-2"
          placeholder=""
        />
      </section>
      <section>
        <h1 className="text-xl font-semibold">Password</h1>
        <input
          onChange={passwordHandler}
          ref={passwordRef}
          type="password"
          className="border p-1 rounded-sm mt-2"
          placeholder=""
        />
      </section>
      <section className=" w-60 ">
        <h1 className="text-xl font-semibold">Access</h1>
        <select onChange={selectRefHandler} ref={selectRef} className="select select-bordered w-full">
          <option disabled selected>
            User
          </option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </section>
    </>
  );
};
