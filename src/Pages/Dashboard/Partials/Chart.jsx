import React from "react";
import { LineChart, Line, CartesianGrid,Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";
import axios from "axios";
import useSWR from "swr";

const ChartComponent = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(`${import.meta.env.VITE_API_APP_URL}/api/dashboard`, fetcher);
  const dataMapped = {
    name: data?.map((item) => item.name),
    uv: data?.map((item) => item.value),
  };
  console.log(dataMapped);
  const dataChart = dataMapped?.name?.map((data, index) => ({
    name: data,
    value: dataMapped.uv[index]
  }));
  return (
    <ResponsiveContainer
      width="100%"
      height={500}
      className="bg-white shadow-[1px_3px_8px_rgba(0,0,0,0.25)] rounded-lg mt-12"
    >
      <LineChart width={600} height={300} data={dataChart}>
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip/>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartComponent;
