import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Replace with real authentication
    login("mock-token"); // Replace with actual token from API
    window.location.href = "/";
  }

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 400, margin: "4rem auto" }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
          </label>
          <br />
          <label>
            Password:
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" required />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
