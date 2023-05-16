import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import { TailSpin } from "react-loader-spinner";

const Table = () => {
  const navigate = useNavigate();
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const [paginate, setPaginate] = useState(1);
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_APP_URL}/api/issuings?page=${paginate}`,
    fetcher
  );
  const tableRow = ["No", "PRODUCT", "SUB - CATEGORY", " NUMBER CODE", "UNIT", "DATE & TIME", "DETAIL"];
  const doEdit = (uuid) => {
    navigate(`/issuing/edit/${uuid}`);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
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
                setPaginate(data.links[0].url.substring(data.links[0].url.length - 1, data.links[0].url.length))
              }
              disabled={!data.links[0].url}
              className="btn"
            >
              «
            </button>
            <button className="btn">{data.current_page}</button>
            <button
             /* This is an onClick event handler that sets the value of the `paginate` state to the
             last page number in the `data.links` array. It does this by using the `slice` method to
             get the last element in the `data.links` array, accessing its `url` property, and then
             extracting the last character of that string (which should be the page number). This is
             used for pagination, allowing the user to navigate to the last page of data. */
              onClick={() =>
                setPaginate(
                  data.links
                    .slice(-1)[0]
                    .url.substring(data.links.slice(-1)[0].url.length - 1, data.links.slice(-1)[0].url.length)
                )
              }
              disabled={!data.links.slice(-1)[0].url}
              className="btn"
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
