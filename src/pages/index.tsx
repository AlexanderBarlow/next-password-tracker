import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface UsernameState {
  value: string;
}

interface PasswordState {
  value: string;
}

const Login: React.FC = () => {
  const router = useRouter();
 const [username, setUserName] = useState<UsernameState>({ value: '' });
  const [password, setPassword] = useState<PasswordState>({ value: '' });

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (username && password) {
    console.log(username.value, password.value);
  try {
    const response = await fetch("http://localhost:3001/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      credentials: 'include',
      body: JSON.stringify({ 
          userName: username.value,
          password: password.value,
         }),
    });

    if (response.ok) {
      const responseData = await response.json();

      // Assuming responseData includes the user and message properties
      const { user, message } = responseData;

      // Redirect to the dashboard
      window.location.href = '/dashboard';
    } else {
      // Handle specific status codes or display a generic message
      if (response.status === 401) {
        alert("Invalid Login Attempt");
      } else {
        alert("Login Failed");
      }
    }
  } catch (error) {
    console.error("Error during login:", error);
    // Handle fetch errors (network issues, server unreachable, etc.)
    alert("An error occurred during login");
  }
}
}


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
                value={username.value}
                onChange={(e) => setUserName({ value: e.target.value })}
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
                value={password.value}
                onChange={(e) => setPassword({ value: e.target.value })}
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
