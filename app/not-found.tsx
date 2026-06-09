import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center bg-surface">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4 font-serif">404</h1>
        <h2 className="text-2xl font-bold text-primary mb-2 font-serif">
          Page Not Found
        </h2>
        <p className="text-secondary mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-bold transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
