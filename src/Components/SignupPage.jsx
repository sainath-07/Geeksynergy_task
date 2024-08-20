import React, { useState } from "react";
import TopBar from "./TopBar";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleform = (e) => {
    e.preventDefault();
    localStorage.setItem("userdetails", JSON.stringify(form));
    setsignpupage(false);
    setloginpage(true);
    setmoviespage(false);

    alert("User registered successfully!");
  };

  return (
    <>
      <TopBar
        
      />
      <form
        onSubmit={handleform}
        className=" w-full flex flex-col items-center h-[80vh] mt-24"
      >
        <div
          className="w-1/2 border-2  space-y-7 grid justify-center p-4"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <div>
            <p className="text-2xl font-bold text-center">Signup form</p>
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
            <label htmlFor="email" className="text-xl font-semibold">
              Email :
            </label>
            <br />
            <input
              type="text"
              id="email"
              placeholder="enter email"
              autoComplete="off"
              className="border rounded-md border-gray-400 text-xl p-2"
              size={40}
              onChange={handleChange}
              required
              name="email"
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
          <div>
            <label htmlFor="phonenumber" className="text-xl font-semibold">
              Phonenumber :
            </label>
            <br />
            <input
              type="number"
              id="phonenumber"
              placeholder="enter phonenumber"
              autoComplete="off"
              className="border  rounded-md border-gray-400 text-xl p-2"
              name="phonenumber"
              size={40}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="text-xl font-semibold">Profession : </label>
            <select
              name="profession"
              value={form.profession}
              onChange={handleChange}
              required
              className="border border-gray-400"
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
            className="bg-green-600 text-white text-xl w-[30%] p-2 rounded-md mx-auto"
          >
            Signup
          </button>
        </div>
      </form>
    </>
  );
};

export default SignupPage;
