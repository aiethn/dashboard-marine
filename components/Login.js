import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeRole, loginUser } from "../features/User";
import { useRouter } from "next/router";
import { User, SALT } from "../data/Data";
import bcrypt from "bcryptjs";

export function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const getRole = useSelector((state) => state.user.role);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [showFalse, setShowFalse] = useState(false);

  useEffect(() => {
    if (getRole === "admin") router.push("/dashboard");
  }, []);

  const handleOnChange = ({ target: { name, value } }) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnLogin = () => {
    const hashUser = bcrypt.hashSync(data.password, SALT);
    if (data.username === User.username && hashUser === User.password) {
      successLogin();
    } else {
      setShowFalse(true);
      setTimeout(() => {
        setShowFalse(false);
      }, 3000);
    }
  };

  const successLogin = () => {
    dispatch(loginUser({ role: "admin", name: data.username }));
    router.push("/dashboard");
  };

  return (
    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
      <h2 className="text-center pb-12 font-bold text-3xl">LOGIN</h2>
      {/* Email input */}
      <div className="mb-6">
        <input
          type="text"
          name="username"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Username"
          onChange={handleOnChange}
          onKeyDown={(e) => e.key === "Enter" && handleOnLogin()}
        />
      </div>
      {/* Password input */}
      <div className="mb-6">
        <input
          type="password"
          name="password"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Password"
          onChange={handleOnChange}
          onKeyDown={(e) => e.key === "Enter" && handleOnLogin()}
        />
      </div>
      <div
        className={`flex items-center mb-6 ${
          !showFalse ? "justify-end" : "justify-between"
        }`}
      >
        {showFalse && (
          <p className="text-rose-500">Username or password wrong!</p>
        )}
        <a
          href="#!"
          className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
        >
          Forgot password?
        </a>
      </div>
      {/* Submit button */}
      <button
        type="submit"
        onClick={handleOnLogin}
        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Sign in
      </button>
      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p className="text-center font-semibold mx-4 mb-0">OR</p>
      </div>

      <a
        className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
        style={{ backgroundColor: "#55acee" }}
        href="#!"
        role="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        {/* Twitter */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          style={{ fill: "currentColor" }}
          className="w-3.5 h-3.5 mr-2"
        >
          {" "}
          <path d="M12.545,12.151L12.545,12.151c0,1.054,0.855,1.909,1.909,1.909h3.536c-0.607,1.972-2.101,3.467-4.26,3.866 c-3.431,0.635-6.862-1.865-7.19-5.339c-0.34-3.595,2.479-6.62,6.005-6.62c1.002,0,1.946,0.246,2.777,0.679 c0.757,0.395,1.683,0.236,2.286-0.368l0,0c0.954-0.954,0.701-2.563-0.498-3.179c-1.678-0.862-3.631-1.264-5.692-1.038 c-4.583,0.502-8.31,4.226-8.812,8.809C1.945,16.9,6.649,22,12.545,22c6.368,0,8.972-4.515,9.499-8.398 c0.242-1.78-1.182-3.352-2.978-3.354l-4.61-0.006C13.401,10.24,12.545,11.095,12.545,12.151z" />
        </svg>
        Continue with Google
      </a>
    </div>
  );
}
