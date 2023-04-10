import React from "react";

import { AiFillCheckCircle } from "react-icons/ai";
import { SiHackthebox } from "react-icons/si";
import { MdOutlineMoveToInbox } from "react-icons/md";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { TbArrowsMaximize, TbArrowsMinimize } from "react-icons/tb";
const Dashboard = () => {
  const dummyData = [
    {
      icon: <SiHackthebox color="#1a56db" />,
      nomor: "8",
      keterangan: "Jumlah Stock Barang",
    },
    {
      icon: <MdOutlineMoveToInbox color="#1a56db" />,
      nomor: "10",
      keterangan: "Jumlah Barang Masuk",
    },
    {
      icon: <BsFillRocketTakeoffFill color="#1a56db" />,
      nomor: "2",
      keterangan: "Jumlah Barang Keluar",
    },
    {
      icon: <TbArrowsMaximize color="#1a56db" />,
      nomor: "69",
      keterangan: "Jumlah Barang Terbanyak",
    },
    {
      icon: <TbArrowsMinimize color="#1a56db" />,
      nomor: "1",
      keterangan: "Jumlah Barang Tersedikit",
    }
  ];
  return (
    <section>
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      {/* <div className="flex items-center" key={index}>
            <span className="mr-4 scale-150 ">
              <AiFillCheckCircle color="#1a56db" />
            </span>
            <div className="flex-col flex">
              <h1 className="text-xl font-bold">{data.title}</h1>
              <small className="text-sm font-normal opacity-50">{data.description}</small>
            </div>
          </div> */}
      <div className="grid grid-cols-5 gap-4">
        {/* <Card /> */}
        {dummyData.map((data, index) => {
          return <Card key={index} icon={data.icon} nomor={data.nomor} keterangan={data.keterangan} />;
        })}
      </div>
    </section>
  );
};

export default Dashboard;

const Card = ({ icon, nomor, keterangan }) => {
  return (
    <div className="bg-white shadow-[1px_3px_8px_rgba(0,0,0,0.25)] p-5 rounded-lg mt-12">
      <div className="flex items-center">
        <figure className="mr-4 bg-[#E1EFFE] p-2 rounded-lg scale-150 ">
          {/* <AiFillCheckCircle color="#1a56db" /> */}
          {icon}
        </figure>
        <div className="flex-col flex">
          <h1 className="text-xl font-bold">{nomor}</h1>
          <small className="text-sm font-normal opacity-50">{keterangan}</small>
        </div>
      </div>
    </div>
  );
};
