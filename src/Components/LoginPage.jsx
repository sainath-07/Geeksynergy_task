import React, { useState } from "react";
import toast from "react-hot-toast";
import TopBar from "./TopBar";

const LoginPage = ({ setloginpage, setsignpupage, setmoviespage }) => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const getUserdetails = JSON.parse(localStorage.getItem("userdetails")) || [];
  console.log(getUserdetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };

  const handleloginform = (e) => {
    e.preventDefault();

    if (getUserdetails) {
      const logintrue = getUserdetails.find(
        (user) =>
          user.email === credentials.email &&
          user.password === credentials.password
      );
      if (logintrue) {
        setloginpage(false);
        setsignpupage(false);
        setmoviespage(true);
        toast.success("Login is successful!");
      } else {
        toast.error("Name or password is invalid, try again.");
      }
    } else {
      toast.error("No user found. Please sign up first.");
    }
  };

  return (
    <>
    {/* <TopBar/> */}
      <form
        onSubmit={handleloginform}
        className="h-[99vh] flex items-center justify-center"
      >
        <div
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-6"
          style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
        >
          <p className="text-3xl font-bold text-center text-gray-800">Login</p>

          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="name"
              name="email"
              placeholder="Enter your name"
              autoComplete="off"
              className="border rounded-lg border-gray-300 text-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="password"
              className="text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="off"
              className="border rounded-lg border-gray-300 text-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white text-lg font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out w-full mt-4"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
