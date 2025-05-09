import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import Dashboard from "./components/Dashboard";

function App() {
  ///contactPage

  const [userName, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  function datasumbit(e) {
    e.preventDefault();

    if (!validationForm()) {
      return;
    }

    var datas = JSON.parse(localStorage.getItem("ContactDetails") || "[]");
    var data = {
      userName: userName,
      age: age,
      number: number,
      email: email,
    };
    datas.push(data);

    setUsername("");
    setAge("");
    setNumber("");
    setEmail("");

    setErrors("");

    localStorage.setItem("ContactDetails", JSON.stringify(datas));
  }

  const validationForm = () => {
    if (userName && age && number && email) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];

      for (const [key, value] of Object.entries({
        userName,
        age,
        number,
        email,
      })) {
        if (!value) {
          errorFields.push(key);
        }
      }

      setErrors(errorFields.join(", "));
      return false;
    }
  };

  //dashBoardPage
  const [addContactOpen, setAddContactOpen] = useState(false);

  const [rows, setRows] = useState([]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const [records, setRecords] = useState();

  const filter = (event) => {
    setRecords(
      rows.filter(
        (e) =>
          e.userName.toLowerCase().includes(event.target.value) ||
          e.email.toLowerCase().includes(event.target.value) ||
          e.age.toString().toLowerCase().includes(event.target.value) ||
          e.number.toString().toLowerCase().includes(event.target.value)
      )
    );
  };

  const handleDltRow = (targetIndex) => {
    const updatedRows = rows.filter((_, index) => index !== targetIndex);
    setRows(updatedRows);

    localStorage.setItem("ContactDetails", JSON.stringify(updatedRows));
  };

  const handleRowEdit = (index) => {
    setRowToEdit(index);

    setAddContactOpen(true);
  };

  const handleSumbit = (newRow) => {
    let updatedRows;

    if (rowToEdit === null) {
      updatedRows = [...rows, newRow];
    } else {
      updatedRows = rows.map((currRow, index) => {
        return index === rowToEdit ? newRow : currRow;
      });
    }

    setRows(updatedRows);
    localStorage.setItem("ContactDetails", JSON.stringify(updatedRows));
  };

  // const handleSumbit = (newRow) => {
  //   const updatedRows = [...rows, newRow];
  //   setRows(updatedRows);

  //   localStorage.setItem("ContactDetails", JSON.stringify(updatedRows));
  // };

  return (
    <>
      <div className="font-poppins antialiased text-gray-900 m-0 p-0 box-border  bg-purple-600 ">
        <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
          <div className="inline-block absolute top-8 left-0">
            <Link
              to="/contact"
              className="text-white m-2 p-2 bg-purple-900 rounded-lg"
            >
              Go to Contact Page
            </Link>
          </div>
          <div className="inline-block absolute top-8 right-0">
            <Link
              to="/dashboard"
              className="text-white m-2 p-2 bg-purple-900 rounded-lg"
            >
              Go to Dashboard
            </Link>
          </div>
          <Routes>
            <Route
              path="/contact"
              element={
                <ContactPage
                  userName={userName}
                  setUsername={setUsername}
                  age={age}
                  setAge={setAge}
                  number={number}
                  errors={errors}
                  setNumber={setNumber}
                  email={email}
                  setEmail={setEmail}
                  datasumbit={datasumbit}
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  rows={rows}
                  setRowToEdit={setRowToEdit}
                  rowToEdit={rowToEdit}
                  handleRowEdit={handleRowEdit}
                  setRows={setRows}
                  handleDltRow={handleDltRow}
                  filter={filter}
                  records={records}
                  setRecords={setRecords}
                  setAddContactOpen={setAddContactOpen}
                  addContactOpen={addContactOpen}
                  handleSumbit={handleSumbit}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
