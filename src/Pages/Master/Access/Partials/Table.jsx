import React from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  const data = ["No", "USERNAME", "ACCESS", "DETAIL"];
  const doEdit = () => {
    navigate("/master/access/edit");
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
            <td>
              <BiSearch onClick={doEdit} size={20} />
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>Kaos Oblong</td>
            <td> Kaos</td>
            <td>
              <BiSearch onClick={doEdit} size={20} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
