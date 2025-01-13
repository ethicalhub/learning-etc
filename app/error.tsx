"use client";

import Link from "next/link";

export default function Error({ error }: { error: Error; reset: () => void }) {
  return (
    <div
      className="container flex h-screen flex-col items-center justify-center text-center"
      role="alert"
      aria-labelledby="error-title"
      aria-describedby="error-description"
    >
      <h1 id="error-title" className="text-4xl font-bold text-error">
        Something went wrong!
      </h1>
      <p id="error-description" className="mt-2 text-dark">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <div className="mt-4 flex flex-col gap-4">
        <Link href="/notes-etc" aria-label="Go to the homepage">
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
}
