import React from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

const Table = ({ rows, deleteRow, editRow, filter, records }) => {
  return (
    <div className="table-wrapper  w-full">
      <input
        type="text"
        className="form-contro block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 w-[20rem] ml-[77%] my-[4%] max-w[20%]  "
        onChange={filter}
        placeholder="Search"
      />
      <table className="table-block  overflow-hidden table-fixed border-collapse shadow-xl rounded whitespace-nowrap  w-[100em] max-w-[96%] m-auto ]">
        <thead className="thead bg-[#ccc] text=[#222]">
          <tr>
            <th className="p-[0.8rem]">Name</th>
            <th className="p-[0.8rem]">Age</th>
            <th className="p-[0.8rem]">Phone Number</th>
            <th className="p-[0.8rem]"> Email</th>
            <th className="p-[0.8rem]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records &&
            records.map((row, index) => {
              return (
                <tr key={index} className="hover:bg-[#eee]">
                  <td className="p-[0.8rem] border-t-[0.5px] border-[#ddd] border-solid text-ellipsis overflow-hidden">
                    {row.userName && row.userName.toLowerCase()}
                  </td>
                  <td className="p-[0.8rem] border-t-[0.5px] border-[#ddd] border-solid text-ellipsis overflow-hidden">
                    {row.age && row.age.toLowerCase()}
                  </td>
                  <td className="p-[0.8rem] border-t-[0.5px] border-[#ddd] border-solid text-ellipsis overflow-hidden">
                    {row.number && row.number.toLowerCase()}
                  </td>
                  <td className="expand p-[0.8rem]  border-t-[0.5px] border-[#ddd] border-solid text-ellipsis overflow-hidden w-full">
                    {row.email && row.email.toLowerCase()}
                  </td>
                  <td className="p-[0.8rem]  border-t-[0.5px] border-[#ddd] border-solid text-ellipsis overflow-hidden">
                    <span className="actions flex justify-evenly">
                      <BsFillTrashFill
                        className=" dlt cursor-pointer text-red-500"
                        onClick={() => deleteRow(index)}
                      />
                      <BsFillPencilFill
                        className="cursor-pointer"
                        onClick={() => editRow(index)}
                      />
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
