import { useState } from "react";
import {Link, useNavigate,} from "react-router-dom";
import API from "../services/api";
import "../index.css";

function Signup() {
  const navigate =
    useNavigate();

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange = (
    e
  ) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        await API.post(
          "/auth/register",
          form
        );

        alert(
          "Registration Successful"
        );

        navigate("/login");
      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "Signup Failed"
        );
      }
    };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-logo">
          🎵 MoodTunes
        </h2>

        <h1>
          Create Account
        </h1>

        <form
          onSubmit={
            handleSubmit
          }
        >
          <input
            className="auth-input"
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={
              handleChange
            }
          />

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
          >
            Sign Up
          </button>
        </form>

        <p className="auth-text">
          Already have an
          account?{" "}
          <Link
            className="auth-link"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;