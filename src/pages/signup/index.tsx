import React, { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";

interface UsernameState {
  value: string;
}

interface PasswordState {
  value: string;
}

export default function SignupForm() {
  const [userName, setUserName] = useState<UsernameState>({ value: "" });
  const [password, setPassword] = useState<PasswordState>({ value: "" });
  const router = useRouter();

  const sessionToken = Cookies.get("sessionToken");

  if (sessionToken) {
    // Decode the JWT token (no verification)
    const decodedToken = jwt.decode(sessionToken) as jwt.JwtPayload;

    if (decodedToken?.logged_in) {
      router.push("/dashboard");
    }
  }

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response: Response = await fetch(
        "http://localhost:3001/api/users/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            userName: userName.value,
            password: password.value,
          }),
        }
      );

      if (response.ok) {
        // Signup successful, handle the response as needed
        window.location.href = "/dashboard";
      } else {
        // Signup failed, handle the error response
        const errorData: unknown = await response.json();
        console.error("Signup failed:", errorData);
      }
    } catch (error: unknown) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <section className="vh-100 container-fluid d-flex align-items-center justify-content-center darkColor pb-5">
      <section className="col-md-3 rounded blue p-5 border border-dark">
        <h2 className="text-center darkGreen font-weight-bold">Signup Form</h2>
        <form className="signUpForm" onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label oliveGreen" htmlFor="userName">
              Username
            </label>
            <input
              type="text"
              className="form-control darkColor border border-dark yellow"
              id="userName"
              value={userName.value}
              onChange={(e) => setUserName({ value: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label oliveGreen">
              Password
            </label>
            <input
              type="password"
              className="form-control darkColor border border-dark yellow"
              id="password"
              value={password.value}
              onChange={(e) => setPassword({ value: e.target.value })}
            />
            </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              id="signup"
              className="d-flex align-items-center btn"
            >
              <h1 className="bold text-slate-400 yellow">Sign Up</h1>
            </button>
          </div>
          <p className="mb-0 pt-3 text-center darkGreen">
            Already have an account? Click here to{" "}
            <Link href="/" className="yellow">
              Log In.
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
}
