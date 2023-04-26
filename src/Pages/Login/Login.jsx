import React, { useRef, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { GiHouse } from "react-icons/gi";
import { authStore } from "@/Lib/authStore";
import axios from "axios";

const sideData = [
  {
    title: "Mudah Untuk Digunakan",
    description: "Sistem yang kami buat, sudah kami rancang agar mudah digunakan oleh pengguna",
  },
  {
    title: "Pencatatan dan Pelacakan Stok Barang Yang Akurat",
    description: "Permudah proses pemantauan stok ketika keluar dan masuk gudang",
  },
  {
    title: "Pelaporan dan dashboard",
    description: "Memudahkan pemberian informasi yang relevan, lengkap, cepat, dan sesuai dengan kebutuhan perusahaan",
  },
];

const Login = () => {
  return (
    <section className="px-32 py-36 h-screen">
      <div className="flex flex-row justify-between h-full items-center">
        <LeftSide />
        <RightSide />
      </div>
    </section>
  );
};

export default Login;

const LeftSide = () => {
  return (
    <section className="space-y-6">
      <div className="group flex flex-col gap-x-4">
        <span className="items-center flex-row  flex gap-x-2">
          <GiHouse size={35} color="#1a56db" />
          <h1 className="text-4xl font-black">Small WMS</h1>
        </span>
        <div className="divider before:bg-black after:bg-black  m-0 p-0 w-0 group-hover:w-80 duration-300 transition-all"></div>
      </div>
      {sideData.map((data, index) => {
        return (
          <div className="flex items-center" key={index}>
            <span className="mr-4 scale-150 ">
              <AiFillCheckCircle color="#1a56db" />
            </span>
            <div className="flex-col flex">
              <h1 className="text-xl font-bold">{data.title}</h1>
              <small className="text-sm font-normal opacity-50">{data.description}</small>
            </div>
          </div>
        );
      })}
    </section>
  );
};

const RightSide = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const doLogin = authStore((state) => state.doLogin);
  const users = authStore((state) => state.users);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const formSubmit = async (e) => {
    e.preventDefault();
    // doLogin();
    try {
      setIsLoading(true);
      const response = await axios.post(`${import.meta.env.VITE_API_APP_URL}/api/login`, {
        username: usernameRef.current,
        password: passwordRef.current,
      });
      doLogin(response.data);
      console.log(response.data);
      setIsLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setIsError(error.response.data.error);
      authStore.setState({ isLoggedIn: false });
      setIsLoading(false);
    }
  };

  return (
    <div className="card w-1/3 shadow-2xl py-8">
      <div className="card-body">
        <h2 className="card-title mx-auto text-2xl font-black">Welcome Back</h2>
        <section className="flex flex-row items-center mx-auto gap-x-2">
          <GiHouse size={35} />
          <p className="font-semibold text-lg"> Small WMS</p>
        </section>

        <form onSubmit={formSubmit} className="space-y-4 md:space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input
              ref={usernameRef}
              onChange={(e) => (usernameRef.current = e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 focus text-gray-900 rounded-sm w-full p-3 "
              placeholder="Monyet"
              required={true}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input
              ref={passwordRef}
              onChange={(e) => (passwordRef.current = e.target.value)}
              type="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 focus text-gray-900 rounded-sm w-full p-3 "
              required={true}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required={true}
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="text-gray-500 dark:text-gray-300">Remember me</label>
              </div>
            </div>
          </div>
          {/* <Link> */}
          {isError && <p className="text-red-500">{isError}</p>}
          <button type="submit" disabled={isLoading} className="w-full text-white bg-blue-500 btn border-none hover:bg-blue-700">
            Login
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};
