export default function ContactPage({
  userName,
  setUsername,
  age,
  setAge,
  number,
  errors,
  setNumber,
  setEmail,
  email,
  datasumbit,
}) {
  return (
    <div className="font-poppins antialiased text-gray-900 m-0 p-0 box-border">
      <div className="bg-purple-900 mt-20 p-8 rounded-lg">
        <h1 className="text-white mb-2 text-2xl">Contact Details Add Here !</h1>
        <div className="font-poppins antialiased text-gray-900 m-0 p-0 box-border">
          <form className="w-full">
            <div className="mb-4">
              <label className="text-white text-lg">
                Name: &nbsp;
                <input
                  type="text"
                  id="name"
                  required
                  value={userName}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="border border-purple-600 rounded py-2 px-4 outline-none bg-transparent text-white w-72 mt-4 mb-8 ml-[80px]"
                  placeholder="Enter the name here"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="text-white text-lg">
                Age: &nbsp;
                <input
                  id="age"
                  type="number"
                  value={age}
                  required
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  className="border border-purple-600 rounded py-2 px-4 outline-none bg-transparent text-white w-72 mt-4 mb-8  ml-[96px]"
                  placeholder="Enter the Age here"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="text-white text-lg">
                Phone Number: &nbsp;
                <input
                  type="number"
                  id="no"
                  required
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  className="border border-purple-600 rounded py-2 px-4 outline-none bg-transparent text-white w-72 mt-4 mb-8"
                  placeholder="Enter the Number here"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="text-white text-lg">
                Email: &nbsp;
                <input
                  type="email"
                  id="email"
                  value={email}
                  pattern=".+@beststartupever\.com"
                  required
                  // pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="border border-purple-600 rounded py-2 px-4 outline-none bg-transparent text-white w-72 mt-4 mb-8 ml-[85px]"
                  placeholder="Enter the Email here"
                />
              </label>
            </div>

            {errors && (
              <div className="error bg-purple-500 text-white p-[0.5rem] mb-4 rounded ">{`Please include: ${errors}`}</div>
            )}
            <button
              type="submit"
              value="Submit"
              
              onClick={datasumbit}
              className="bg-purple-600 text-lg text-white px-2 py-2 rounded cursor-pointer todo-btn "
            >
              Save to Local Storage
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
