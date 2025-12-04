// src/lib/auth.ts
const API = process.env.NEXT_PUBLIC_API_URL;

if (!API) {
  console.error("❌ NEXT_PUBLIC_API_URL is missing");
}

export async function register(data: { name: string; email: string; password: string }) {
  const res = await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: data.name,
      email: data.email,
      password: data.password,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Registration failed");
  }

  return res.json();
}

export async function login(email: string, password: string) {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Login failed");
  }

  return res.json(); // returns { token: string }
}

export async function getProfile(token: string) {
  const res = await fetch(`${API}/auth/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }

  return res.json();
}
