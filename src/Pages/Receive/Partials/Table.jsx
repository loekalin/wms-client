import React from "react";
import { BiSearch } from "react-icons/bi";

const Table = () => {
  const data = ["No", "SUB - CATEGORY", "PRODUCT", " NUMBER CODE", "MANY", "UNIT", "DATE & TIME", "DETAIL"];
  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            {data.map((data, i) => {
              return <th key={i}>{data}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Beras</td>
            <td>Mintik Wangi</td>
            <td></td>
            <td>7</td>
            <td>By 5 Kg</td>
            <td>Blue</td>
            <td>
                <BiSearch size={20}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
