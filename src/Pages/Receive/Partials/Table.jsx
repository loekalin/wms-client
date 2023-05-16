import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

const Table = () => {
  const navigate = useNavigate();
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const [paginate, setPaginate] = useState(1);
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_APP_URL}/api/receivings?page=${paginate}`,
    fetcher
  );
  const tableRow = ["No", "PRODUCT", "SUB - CATEGORY", " NUMBER CODE", "UNIT", "DATE & TIME", "DETAIL"];
  const doEdit = (uuid) => {
    navigate(`/receive/edit/${uuid}`);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  // console.log(data);
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
              {data.data.map((data, i) => {
                return (
                  <tr key={i}>
                    <th className="font-medium">{i + 1}</th>
                    <th className="font-medium">{data.name}</th>
                    <th className="font-medium">{data.sub_category}</th>
                    <th className="font-medium">{data.uuid}</th>
                    <th className="font-medium">{data.satuan}</th>
                    <th className="font-medium">{data.date.substring(0, data.date.length - 3)}</th>
                    <td>
                      <BiSearch onClick={() => doEdit(data.uuid)} size={20} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="btn-group w-full flex justify-end my-5 pr-16">
            <button
              onClick={() =>
                setPaginate(
                  data.links[0].url.replace(
                    /[A-Za-z]+:\/\/\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b:([A-Za-z0-9]+(\/[A-Za-z0-9]+)+)\?[A-Za-z]+=/i,
                    ""
                  )
                )
              }
              disabled={!data.links[0].url}
              className="btn bg-[#1a56db] border-none hover:bg-[#123e9d]"
            >
              «
            </button>
            {data.links.slice(1, data.links.length - 1).map((data, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setPaginate(data.label)}
                  disabled={data.active}
                  className="btn bg-[#1a56db] border-none hover:bg-[#123e9d]"
                >
                  {data.label}
                </button>
              );
            })}
            <button
              onClick={() =>
                setPaginate(
                  data.links
                    .slice(-1)[0]
                    .url.replace(
                      /[A-Za-z]+:\/\/\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b:([A-Za-z0-9]+(\/[A-Za-z0-9]+)+)\?[A-Za-z]+=/i,
                      ""
                    )
                )
              }
              disabled={!data.links.slice(-1)[0].url}
              className="btn bg-[#1a56db] border-none hover:bg-[#123e9d]"
            >
              »
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Table;

function test({ setPaginate, data, i }) {
  return (
    <>
      {" "}
      <button
        onClick={() =>
          setPaginate(
            data.links[0].url.replace(
              /[A-Za-z]+:\/\/\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b:([A-Za-z0-9]+(\/[A-Za-z0-9]+)+)\?[A-Za-z]+=/i,
              ""
            )
          )
        }
        disabled={!data.links[0].url}
        className="btn"
      >
        «
      </button>
      {/* <button className="btn">{data.current_page}</button> */}
      {data.links.map((data, i) => {
        return (
          <button key={i} onClick={() => setPaginate(data.label)} disabled={data.active} className="btn">
            {data.label}
          </button>
        );
      })}
      <button
        onClick={() =>
          setPaginate(
            data.links
              .slice(-1)[0]
              .url.replace(
                /[A-Za-z]+:\/\/\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b:([A-Za-z0-9]+(\/[A-Za-z0-9]+)+)\?[A-Za-z]+=/i,
                ""
              )
          )
        }
        disabled={!data.links.slice(-1)[0].url}
        className="btn"
      >
        »
      </button>
    </>
  );
}
