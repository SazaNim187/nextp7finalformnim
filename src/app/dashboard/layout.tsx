import { ReactNode } from "react";
import Link from "next/link";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-orange-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl bg-orange-900 font-bold">Dashboard</h1>
        <nav className="space-x-4">
          <Link href="/dashboard" className="hover:underline">
            Home
          </Link>
          <Link href="/" className="hover:underline">
            Logout
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 p-6">
        {children}<h1><b>THIS IS MY MINIMAL DASHBOARD T_T</b></h1>
      </main>

      {/* Optional Footer */}
      <footer className="bg-yellow-900 font-bold text-white text-center p-4">
        &copy; {new Date().getFullYear()} My Domain Expansion
      </footer>
    </div>
  );
}
