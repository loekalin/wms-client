import React from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import { TailSpin } from "react-loader-spinner";

const Table = () => {
  const navigate = useNavigate();
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(`${import.meta.env.VITE_API_APP_URL}/api/users`, fetcher);
  const tableRow = ["No", "USERNAME", "ACCESS", "DETAIL"];
  const doEdit = () => {
    navigate("/master/access/edit");
  };
  return (
    <div className="overflow-x-auto">
      {isLoading ? (
        <TailSpin color="black" wrapperClass="flex w-full p-5 items-center justify-center" />
      ) : (
        <>
          <table className="table table-compact w-full">
            <thead>
              <tr>
                {tableRow.map((data, i) => {
                  return <th key={i}>{data}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((data, i) => {
                return (
                  <tr key={i}>
                    <th className="font-medium">{i + 1}</th>
                    <th className="font-medium">{data.username}</th>
                    <th className="font-medium">{data.role}</th>
                    <td>
                      <BiSearch onClick={doEdit} size={20} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Table;
