import React from "react";
import ChartComponent from "@/Pages/Dashboard/Partials/Chart";
import Card from "@/Pages/Dashboard/Partials/Card";
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
      <div className="grid grid-cols-5 gap-4">
        {dummyData.map((data, index) => {
          return <Card key={index} icon={data.icon} nomor={data.nomor} keterangan={data.keterangan} />;
        })}
      </div>
      <ChartComponent />
    </section>
  );
};

export default Dashboard;

