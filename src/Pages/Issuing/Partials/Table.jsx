import React from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  const data = ["No", "PRODUCT", "SUB - CATEGORY", "MERK", " NUMBER CODE", "MANY", "UNIT", "DATE & TIME", "DETAIL"];
  const doEdit = () => {
    navigate("/issuing/edit");
  };
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
            <td>Kaos Oblong</td>
            <td> Kaos</td>
            <td>Erigo</td>
            <td>14f1a649-3414-48cb-8dc6-301fe812a677</td>
            <td>By 5 Kg</td>
            <td>40</td>
            <td>01-01-2006</td>
            <td>
              <BiSearch onClick={doEdit} size={20} />
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>Kaos Oblong</td>
            <td> Kaos</td>
            <td>Zydankaos</td>
            <td>48cb-8dc614f1a649-3414-301fe812a677</td>
            <td>By 2 Kg</td>
            <td>10</td>
            <td>21-12-2001</td>
            <td>
              <BiSearch size={20} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
