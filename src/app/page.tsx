import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-yellow-200">
      <h1 className="text-9x9 font-bold border-2 border-black bg-yellow-950  text-yellow-200 p-4">
        Yokoso! Watashi no Soul Society ^_-
      </h1>
      <h1 className="text-2xl font-bold border-2 border-black text-yellow-200 bg-yellow-950 p-4">
        Hu Tao Daisuki ❤️
      </h1>
      

      {/* Navigation Links */}
      <Link
        href="/login"
        className="text-lg border-2 border-orange-500 px-6 py-2 rounded hover:bg-yellow-500 hover:text-white transition"
      >
        Login😊
      </Link>

      <Link
        href="/register"
        className="text-lg border-2 border-yellow-500 px-6 py-2 rounded hover:bg-orange-500 hover:text-white transition"
      >
        Register😉
      </Link>

      
      
    </div>
  );
}
