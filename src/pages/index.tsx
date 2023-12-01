// pages/login.tsx

import React from "react";

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    const username = (document.getElementById("username") as HTMLInputElement)
      ?.value;
    const password = (document.getElementById("password") as HTMLInputElement)
      ?.value;
    // Perform actions with username and password
  };

  return (
    <section className="container-fluid">
      <section className="row justify-content-center">
        <section className="col-3 align-self-center rounded border bg-white p-5">
          <h2>Login</h2>
          <form className="loginForm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-danger" id="login">
              Log In
            </button>
            <p className="text-secondary mb-0 pt-3">
              Don't have an account? Click here to{" "}
              <a href="/signup">Sign Up.</a>
            </p>
          </form>
        </section>
      </section>
    </section>
  );
};

export default Login;
