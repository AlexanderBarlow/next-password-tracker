import React, { useState } from 'react';
import { useRouter } from 'next/router';


const NewPassword: React.FC = () => {
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/dashboard/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          title,
          username,
          password,
        }),
      });

      if (response.ok) {
        // Handle successful response
        console.log('Password added successfully');
        alert('Password added successfully');
        router.push('/dashboard')
      } else {
        // Handle error response
        console.error('Failed to add password:', await response.json());
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  return (
    <section className="container-fluid">
      <section className="row justify-content-center">
        <section className="col-3 p-5 bg-white border rounded align-self-center">
          <h2>New Password</h2>
          <p className="text-secondary">Add a new password and information about the account it belongs to.</p>
          <form className="newPasswordForm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Website Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary" id="addPass">
              Add Password
            </button>
          </form>
        </section>
      </section>
    </section>
  );
};

export default NewPassword;
