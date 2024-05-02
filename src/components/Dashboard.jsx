import React from "react";
import Sidebar from "./Sidebar";
import Table from "./Table";
import AddContact from "./AddContact";
import { useEffect } from "react";

export default function Dashboard({
  rows,
  setRows,
  handleDltRow,
  setRowToEdit,
  handleSumbit,
  setAddContactOpen,
  filter,
  handleRowEdit,
  records,
  setRecords,
  addContactOpen,
  rowToEdit,
}) {
  useEffect(() => {
    const storeData = JSON.parse(
      localStorage.getItem("ContactDetails") || "[]"
    );
    setRows(storeData);
    setRecords(storeData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="dashboard flex  ">
      <Sidebar />
      <div className="container bg-white flex-[6] ">
        <div className="App flex flex-col items-center justify-center h-auto ">
        {/* relative top-[10.6%] */}
          <Table rows={rows} deleteRow={handleDltRow} editRow={handleRowEdit}  filter={filter} records={records}/>
          <button
            className="bg-[#1d4ed8] text-lg text-white px-2 py-2 rounded-xl shadow-[0px_5px_5px_#ccc]  cursor-pointer todo-btn mt-[40px] w-[5%] "
            onClick={() => setAddContactOpen(true)}
          >
            Add
          </button>
          {addContactOpen && (
            <AddContact
              closeAddContact={() => {
                setAddContactOpen(false);
                setRowToEdit(null);
              }}
              onSubmit={handleSumbit}
              defaultValue={rowToEdit !== null && rows[rowToEdit]}
            />
          )}
          
        </div>
      </div>
    </div>
  );
}
