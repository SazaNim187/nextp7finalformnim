"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Hardcoded test user
const TEST_USER = {
  email: "fimperial",
  password: "fimperial",
  username: "fimperial",
  token: "fimperial", // dummy JWT
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    // Check credentials against hardcoded user
    if (email === TEST_USER.email && password === TEST_USER.password) {
      localStorage.setItem("token", TEST_USER.token);
      localStorage.setItem("username", TEST_USER.username);
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <button
        onClick={handleLogin}
        className="border px-6 py-2 rounded bg-yellow-900 text-white"
      >
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
