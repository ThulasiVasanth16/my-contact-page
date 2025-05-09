import React, {useState} from "react";

const AddContact = ({ closeAddContact, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(defaultValue || {
    userName: "",
    age: "",
    number: "",
    email: "",
  });

  const [errors, setErrors] =useState("")

  const validationForm = () => {
  if(formState.userName && formState.age && formState.number && formState.email){
    setErrors("")
    return true;
  }else{
    let errorFields = [];

    for(const[key,value] of Object.entries(formState)){
      if(!value){
        errorFields.push(key)
      }
    }
    setErrors(errorFields.join(","))
    return false;
  }
  }

  const handleNameChange = (e) => {
    setFormState({
      ...formState,
      userName: e.target.value,
    });
  };

  const handleAgeChange = (e) => {
    setFormState({
      ...formState,
      age: e.target.value,
    });
  };

  const handleNumberChange = (e) => {
    setFormState({
      ...formState,
      number: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setFormState({
      ...formState,
      email: e.target.value,
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    if(!validationForm()) return
    onSubmit(formState);
    closeAddContact();
  };

  return (
    <div
      className="addcontact-container fixed z-[1] left-0 top-0 w-[100%] h-[100%] flex items-center justify-center bg-[rgba(0,0,0,0.4)] "
      onClick={(e) => {
        if(e.target.className === "addcontact-container")
        closeAddContact();
      }}
    >
      <div className="add rounded p-[2rem] bg-white w-[26em] overflow-hidden ">
        <form className="w-full">
          <div className="mb-4">
            <label className="text-black text-lg  items-baseline flex flex-col">
              Name: &nbsp;
              <input
                type="text"
                required
                id="name"
                value={formState.userName}
                onChange={handleNameChange}
                className="border border-black rounded py-2 px-4 outline-none bg-transparent text-black w-full mt-4 mb-8"
                placeholder="Enter the name here"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="text-black text-lg items-baseline flex flex-col ">
              Age: &nbsp;
              <input
                id="age"
                type="number"
                required
                value={formState.age}
                onChange={handleAgeChange}
                className="border border-black rounded py-2 px-4 outline-none bg-transparent text-black w-full mt-4 mb-8  "
                placeholder="Enter the Age here"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="text-black text-lg items-baseline flex flex-col ">
              Phone Number: &nbsp;
              <input
                type="number"
                id="no"
                required
                value={formState.number}
                min={0}
                max={10}
                onChange={handleNumberChange}
                className="border border-black rounded py-2 px-4 outline-none bg-transparent text-black w-full mt-4 mb-8"
                placeholder="Enter the Number here"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="text-black text-lg items-baseline flex flex-col ">
              Email: &nbsp;
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={handleEmailChange}
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                className="border border-black rounded py-2 px-4 outline-none bg-transparent text-black w-full mt-4 mb-8 "
                placeholder="Enter the Email here"
              />
            </label>
          </div>

          {errors && <div className="error bg-[#f8d7da] text-red-500 p-[0.5rem] mb-4 rounded-xl ">{`Please include: ${errors}`}</div>}
          <button
            type="submit"
            value="Submit"
            onClick={handleSumbit}
            className="bg-[#1d4ed8] text-lg text-white px-2 py-2 rounded-xl shadow-[0px_5px_5px_#ccc] w-[40%] cursor-pointer todo-btn "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;

