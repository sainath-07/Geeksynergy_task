import React, { useState } from "react";
import TopBar from "./TopBar";

const LoginPage = ({
  setloginpage,
  setsignpupage,
  setmoviespage,
}) => {
  const [credentials, setcredentials] = useState({
    name: "",
    password: "",
  });

  const getUserdetails = JSON.parse(localStorage.getItem("userdetails"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };

  const handleloginform = (e) => {
    e.preventDefault();

    if (getUserdetails) {
      const { name, password } = getUserdetails;

      if (name === credentials.name && password === credentials.password) {
        setloginpage(false);
        setsignpupage(false);
        setmoviespage(true);

        alert("login is successfull");
      } else {
        alert("Name or password is invalid, try again.");
      }
    } else {
      alert("No user found. Please sign up first.");
    }
  };

  return (
    <>
      <TopBar />
      <form
        onSubmit={handleloginform}
        className=" h-[99vh] flex items-center justify-center"
      >
        <div className="w-1/2 flex flex-col items-center justify-center border space-y-8 h-[70%] ">
          <p className="text-2xl font-bold text-center">Login form</p>
          <div>
            <label htmlFor="name" className="text-xl font-semibold">
              Name :
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="enter name"
              autoComplete="off"
              className="border rounded-md border-gray-400 text-xl p-2"
              size={40}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-xl font-semibold">
              Password :
            </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="enter password"
              autoComplete="off"
              className="border rounded-md border-gray-400 text-xl p-2"
              size={40}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600  text-white p-2 text-xl rounded-sm px-8"
          >
            login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
