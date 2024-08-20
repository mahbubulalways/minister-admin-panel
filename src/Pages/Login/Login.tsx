import { useState } from "react";
import logo from "../../../public/Minister_logo.png";
import { useLoginUserMutation } from "../../redux/services/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "animate.css";
const Login = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [rememberMe, setRememberMe] = useState(false);
  const [login] = useLoginUserMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    try {
      const result = await login(userData);

      if (result?.data?.data?.data?.role != "admin") {
        alert("You are not authorize");
        return;
      }
      if (result?.data?.success) {
        navigate("/");
        localStorage.setItem("token", result?.data?.data?.token);
      }
      if (!result?.data?.success) {
        alert("Something went wrong");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (error: any) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-[600px] p-8 shadow-lg rounded"
      >
        <img src={logo} alt="" className="mx-auto" />
        <h2 className="text-3xl font-semibold text-center text-gray-600 mb-6">
          Admin Login
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none border-2 w-full border-gray-300 focus:ring-2 focus:ring-blue-500 shadow px-3 py-2 rounded"
            placeholder="Enter your email"
            required
            defaultValue={""}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            defaultValue={""}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none border-2 w-full border-gray-300 focus:ring-2 focus:ring-blue-500 shadow px-3 py-2 rounded"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            Remember Me
          </label>
          <a href="#" className="text-blue-500 hover:underline text-sm">
            Forgot Password?
          </a>
        </div>{" "}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-2 rounded shadow"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
