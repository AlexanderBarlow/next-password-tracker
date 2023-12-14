import { useRouter } from "next/router";
import { useState } from "react";

const UpdatePassword = () => {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updatePassword = async (event: React.FormEvent) => {
    event.preventDefault();

    if (id) {
      const response = await fetch(`http://localhost:3001/api/passwords/${id}`, {
        method: "PUT", // Assuming 'UPDATE' is 'PUT'
        body: JSON.stringify({ title, username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        
        router.replace("/dashboard");
      } else {
        alert("Failed to update password");
      }
    }
  };

  return (
    <section className="container-fluid">
      <section className="row justify-content-center">
        <section className="col-3 p-5 bg-white border rounded align-self-center">
          <h2>Update Password</h2>
          <p className="text-secondary">
            Add a new password and information about the account it belongs to.
          </p>
          <form
            className="newPasswordForm"
            onSubmit={updatePassword}
            data-id={id as string}
          >
            <div className="mb-3">
              <label className="form-label">Website Name</label>
              <input
                id="title"
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                id="username"
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update Password
            </button>
          </form>
        </section>
      </section>
    </section>
  );
};

export default UpdatePassword;
