import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
 import "../index.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login clicked", form);


    try {
      const res =
        await API.post(
          "/auth/login",
          form
        );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          res.data.user
        )
      );

      alert(
        "Login Successful"
      );

       navigate("/");
      // window.location.href = "/";
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-logo">
          🎵 MoodTunes
        </h2>

        <h1>Login</h1>

        <form
          onSubmit={
            handleSubmit
          }
        >
          <input
            className="auth-input"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={
              handleChange
            }
          />

          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Password"
            value={
              form.password
            }
            onChange={
              handleChange
            }
          />

          <button
            type="submit"
            className="auth-btn"
            onClick={() => console.log("Button clicked")}
          >
            Login
          </button>
        </form>

        <p className="auth-text">
          Don't have an account?{" "}
          <Link
            className="auth-link"
            to="/signup"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;