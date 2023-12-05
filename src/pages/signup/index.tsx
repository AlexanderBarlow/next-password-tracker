import React, { useState } from 'react';
import Link from 'next/link';

interface UsernameState {
  value: string;
}

interface PasswordState {
  value: string;
}

export default function SignupForm() {
  const [userName, setUserName] = useState<UsernameState>({ value: '' });
  const [password, setPassword] = useState<PasswordState>({ value: '' });

  const handleSignup = async () => {
    console.log(userName.value);
    console.log(password.value);
    
    
    try {
      const response: Response = await fetch('http://localhost:3001/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: userName.value,
          password: password.value,
        }),
      });

      if (response.ok) {
        // Signup successful, handle the response as needed
        console.log(await response.json());
      } else {
        // Signup failed, handle the error response
        const errorData: unknown = await response.json();
        console.error('Signup failed:', errorData);
      }
    } catch (error: unknown) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <section className="container-fluid">
      <section className="row justify-content-center">
        <section className="col-3 align-self-center rounded border bg-white p-5">
          <h2>Signup</h2>
          <form className="signUpForm">
            <div className="mb-3">
              <label className="form-label" htmlFor="userName">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                value={userName.value}
                onChange={(e) => setUserName({ value: e.target.value })}
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
                value={password.value}
                onChange={(e) => setPassword({ value: e.target.value })}
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
              Already have an account? Click here to{' '}
              <Link href="/">Log In.</Link>
            </p>
          </form>
        </section>
      </section>
    </section>
  );
}
