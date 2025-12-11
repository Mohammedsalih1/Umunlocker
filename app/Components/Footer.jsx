"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-main text-white py-3 shadow-lg z-50">
      <div className="flex justify-around items-center text-center">

        {/* Home */}
        <Link href="/" className="flex flex-col items-center gap-1 hover:text-gray-300 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5m4 0h5a1 1 0 001-1V10" />
          </svg>
          <span className="text-xs">Home</span>
        </Link>

        {/* Hardware */}
        <Link href="/hardware" className="flex flex-col items-center gap-1 hover:text-gray-300 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 5h16a1 1 0 0 1 1 1v10H3V6a1 1 0 0 1 1-1zm-2 13h20v2H2v-2z" />
          </svg>

          <span className="text-xs">Hardware</span>
        </Link>

        {/* Share */}
        <Link href="/share"
          className="flex flex-col items-center gap-1 hover:text-gray-300 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M7 10l5-5m0 0l5 5m-5-5v12" />
          </svg>
          <span className="text-xs">Share</span>
        </Link>

        {/* Contact (WhatsApp) */}
        <a
          href="https://wa.me/23676057518"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 hover:text-gray-300 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.56 0 .3 5.26.3 11.74c0 2.07.54 4.1 1.57 5.92L0 24l6.51-1.7a12.03 12.03 0 0 0 5.53 1.36h.01c6.49 0 11.75-5.26 11.75-11.74 0-3.14-1.22-6.1-3.28-8.14zM12.05 21.6a9.85 9.85 0 0 1-4.98-1.36l-.36-.21-3.86 1.01 1.03-3.76-.24-.38a9.8 9.8 0 0 1-1.53-5.17c0-5.43 4.42-9.85 9.94-9.85 2.65 0 5.14 1.03 7.02 2.9a9.78 9.78 0 0 1 2.92 6.94c0 5.43-4.42 9.86-9.94 9.86zm5.49-7.37c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.23-.66.08-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.14.3-.36.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.64-.94-2.25-.25-.6-.5-.52-.68-.53-.18-.01-.38-.01-.58-.01a1.12 1.12 0 0 0-.82.38c-.28.3-1.08 1.06-1.08 2.58 0 1.52 1.1 2.99 1.26 3.2.16.21 2.16 3.44 5.32 4.81.74.32 1.32.5 1.77.64.74.23 1.4.2 1.92.12.59-.09 1.79-.73 2.04-1.44.25-.71.25-1.33.18-1.46-.07-.13-.27-.2-.57-.35z" />
          </svg>
          <span className="text-xs">Contact</span>
        </a>

      </div>
    </footer>
  );
}
1