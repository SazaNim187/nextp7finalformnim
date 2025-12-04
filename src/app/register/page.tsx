"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/lib/auth";

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterPage() {  // ✅ Must be a function component
  const router = useRouter();
  const [data, setData] = useState<RegisterData>({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  async function handleRegister() {
    try {
      await register(data);
      router.push("/login");
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Registration failed");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Register</h1>

      <input
        type="text"
        placeholder="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        className="border p-2 rounded w-64"
      />
      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        className="border p-2 rounded w-64"
      />
      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
        className="border p-2 rounded w-64"
      />
      <button
        onClick={handleRegister}
        className="border px-6 py-2 rounded bg-green-500 text-white"
      >
        Register
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
