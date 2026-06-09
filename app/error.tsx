"use client";

import React from "react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex-1 flex items-center justify-center bg-surface">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold text-primary mb-2 font-serif">
          Something went wrong
        </h2>
        <p className="text-secondary mb-8">
          We encountered an unexpected error. Please try again.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-accent text-white px-6 py-3 rounded-lg font-bold transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="bg-surface-card border border-theme text-primary px-6 py-3 rounded-lg font-bold transition-colors hover:text-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </main>
  );
}
