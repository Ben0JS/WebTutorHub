import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    // For demo purposes, storing user info in localStorage (not secure for real apps)
    localStorage.setItem("user", username);
    localStorage.setItem("password", password);  // Storing password is not recommended in production
    window.location.href = "/"; // redirect
  }

  return (
    <div className="col-12 col-md-6 col-lg-4 mx-auto align-items-center p-4 m-5" >
      <h1 className="mb-4">Login</h1>
      <div className="">
        <div className="mb-3 form-group">
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>
      <div className="d-flex justify-content-center col-12">
      <button className="btn btn-primary px-5" onClick={handleLogin}>
        Login
      </button>
      </div>
      </div>
    </div>
  );
}
