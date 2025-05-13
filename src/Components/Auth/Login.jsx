import React, { useContext, useState } from "react";
import AuthContext from "./Auth";
import { MdClose } from "react-icons/md";
import { div } from "framer-motion/client";
const Login = ({ Setshowlogin }) => {
  const [password, setpasswoord] = useState("");
  const AuthPassword = "09876";
  const { Authenticated, setAuthenticated } = useContext(AuthContext);
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (password === AuthPassword) {
      setAuthenticated(true);
      alert("Login Successful");
      setAuthenticated(true);
      Setshowlogin(false);
    } else {
      alert("Password did not match");
    }
  };

  return (
    <div className="w-full top-0 left-0 absolute h-[100vh] flex items-center justify-center bg-black bg-opacity-50 z-[999] px-4">
      <div className=" ">
        <form
          action=""
          className="bg-[black] py-10 px-10 flex flex-col w-96 relative"
        >
          <div className="flex flex-col text-white gap-2 ">
            <label htmlFor="" className="text-lg">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setpasswoord(e.target.value)}
              placeholder=" 🔑"
              className="bg-transparent text-white pl-3 border border-red-600 py-3 outline-none rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white rounded mt-2 py-2"
            onClick={SubmitHandler}
          >
            Login
          </button>
          <button
            className="absolute top-3 right-4 text-white"
            onClick={() => Setshowlogin(false)}
          >
            <MdClose />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
