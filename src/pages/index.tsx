import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Login: React.FC = () => {
  const router = useRouter();
  const username = ''
  const password = ''

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username && password) {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
      ) ;

      if (response.ok) {
        // Login successful, redirect to /dashboard
        router.push("/dashboard");
      } else {
        // Handle login error
        alert("Invalid Login Attempt");
      }
    }
  };

  return (
    <section className="container-fluid">
      <section className="row justify-content-center">
        <section className="col-3 align-self-center rounded border bg-white p-5">
          <h2>Login</h2>
          <form className="loginForm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-danger" id="login">
              Log In
            </button>
            <p className="text-secondary mb-0 pt-3">
              Don't have an account? Click here to{" "}
              <Link href="/signup">Sign Up.</Link>
            </p>
          </form>
        </section>
      </section>
    </section>
  );
};

export default Login;
