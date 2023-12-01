import { useState } from "react";

const SignupForm: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          password,
        }),
      });

      if (response.ok) {
        // Signup successful, handle the response as needed
      } else {
        // Signup failed, handle the error response
        const errorData = await response.json();
        console.error("Signup failed:", errorData.error);
      }
    } catch (error: any) {
      console.error("Signup failed:", error.message);
    }
  };

  return (
    <section className="container-fluid">
      <section className="row justify-content-center">
        <section className="col-3 align-self-center rounded border bg-white p-5">
          <h2>Signup</h2>
          <form className="signUpForm" o>
            <div className="mb-3">
              <label className="form-label" htmlFor="userName">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={handleSignup}
              className="btn btn-danger"
            >
              Sign Up
            </button>
            <p className="text-secondary mb-0 pt-3">
              Already have an account? Click here to{" "}
              <a href="/">Log In.</a>
            </p>
          </form>
        </section>
      </section>
    </section>
  );
};

export default SignupForm;
