"use client";

import { useEffect, useState } from "react";
import { getProfile } from "@/lib/auth";

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please login.");
      setLoading(false);
      return;
    }

    async function fetchProfile() {
      try {
        // Assert token is string (TypeScript safe now)
        const profileData = await getProfile(token as string);
        setProfile(profileData);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Welcome! fimperial");
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-green-500">Welcome! Fimperial</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}
