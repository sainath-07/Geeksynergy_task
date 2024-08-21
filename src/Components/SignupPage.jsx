import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SignupPage = ({
  moviespage,
  setmoviespage,
  setloginpage,
  setsignpupage,
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
    profession: "",
  });
  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("userdetails")) || [];
    setuserdata(storedUsers);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleform = (e) => {
    e.preventDefault();
    const updatedUserData = [...userdata, form];
    setuserdata(updatedUserData);
    localStorage.setItem("userdetails", JSON.stringify(updatedUserData));

    setsignpupage(false);
    setloginpage(true);
    setmoviespage(false);
    toast.success("User registered successfully!");
  };

  return (
    <>
      <form
        onSubmit={handleform}
        className="w-full flex flex-col items-center mt-24"
      >
        <div
          className="w-1/2 bg-white p-4 rounded-xl shadow-lg flex flex-col"
          style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
        >
          <p className="text-2xl font-bold text-center text-gray-800">
            Sign Up
          </p>

          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
              className="border rounded-lg border-gray-300 text-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
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

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="phonenumber"
              className="text-lg font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              placeholder="Enter your phone number"
              autoComplete="off"
              className="border rounded-lg border-gray-300 text-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-lg font-medium text-gray-700">
              Profession
            </label>
            <select
              name="profession"
              value={form.profession}
              onChange={handleChange}
              required
              className="border rounded-lg border-gray-300 text-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="">Select Profession</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="Product Manager">Product Manager</option>
              <option value="UX/UI Designer">UX/UI Designer</option>
              <option value="Front-End Developer">Front-End Developer</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white text-lg font-medium px-3 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out mx-auto mt-4"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignupPage;
