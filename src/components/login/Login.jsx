import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Password:", password);

    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    axios
      .post(
        "http://localhost:8080/workintech/ecommerce/v1/api/login",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        history.push("/");
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };

  return (
    <section className="flex justify-center py-10">
      <div>
        <Link className="hover:underline" to="/login">
          {" "}
          Login
        </Link>
        /
        <Link className="hover:underline" to="/register">
          Register
        </Link>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="py-5 rounded-l-md bg-bgInput pl-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              className="py-5 rounded-l-md bg-bgInput pl-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="font-bold text-primary text-sm tracking-wider border-2	border-primary px-14 py-4 mt-6 hover:opacity-60 self-center"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};