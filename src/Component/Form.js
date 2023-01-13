import { useState } from "react";

export default function Form() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [em, setEm] = useState("");
  const [sub, setSub] = useState(false);

  const handleName = (event) => {
    setFirst(event.target.value);
  };
  const handleLast = (event) => {
    setLast(event.target.value);
  };
  const handleChange = (event) => {
    setEm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSub(true);
    setTimeout(() => {
      setSub(false);
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center backdrop-blur-sm bg-white/40 pr-4 pl-4 pt-10 pb-10 shadow-xl w-72">
      <form onSubmit={handleSubmit} className="flex flex-col w-56 gap-2">
        {sub && first.length !== 0 && last.length !== 0 && em.length !== 0 && (
          <div className="h-12 bg-blue-500 text-teal-50 text-center mb-2">
            Success! Thanks for your registeration
          </div>
        )}

        <input
          type="text"
          value={first}
          onChange={handleName}
          className="h-12 rounded-sm pl-2 outline-none focus:outline-yellow-400 focus:border-2"
          placeholder="Fist Name"
        />
        {sub && first.length === 0 && (
          <span className="text-red-600 p-0 text-sm">
            Please enter your first name{" "}
          </span>
        )}
        <input
          type="text"
          value={last}
          onChange={handleLast}
          className="h-12 rounded-sm pl-2 mt-4 outline-none focus:outline-yellow-400 focus:border-2"
          placeholder="Last Name"
        />
        {sub && last.length === 0 && (
          <span className="text-red-600 p-0 text-sm">
            Please enter your last name{" "}
          </span>
        )}
        <input
          type="email"
          value={em}
          onChange={handleChange}
          className="h-12 rounded-sm pl-2 mt-4 outline-none focus:outline-yellow-400 focus:border-2"
          placeholder="Email"
        />
        {sub && em.length === 0 && (
          <span className="text-red-600 p-0 text-sm">
            Please enter an email address{" "}
          </span>
        )}
        <input
          type="submit"
          value="Submit"
          className="bg-green-600 h-12 mt-4 rounded-lg font-small text-white cursor-pointer hover:bg-green-500"
        />
      </form>
    </div>
  );
}
