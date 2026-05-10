"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function CampsitesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Campsites Error Boundary:", error);
  }, [error]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-surface-light">
      <div className="max-w-xl text-center">
        <h1 className="font-serif text-4xl text-forest-black mb-4">
          Campsites could not load
        </h1>
        <p className="mt-4 text-text-dark/80 text-lg leading-relaxed">
          Something went wrong while loading the campsites. Our team is already looking into it. Please try again or reach out to us on WhatsApp for immediate help.
        </p>
        
        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-xl text-sm font-mono text-left overflow-auto max-h-40">
            {error.message}
          </div>
        )}

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-8 py-4 bg-jungle-green text-white rounded-full font-medium hover:bg-forest-black transition-colors"
          >
            Try Again
          </button>
          <a
            href="https://wa.me/254711529659?text=Hello%20Sucre%20Bushworks,%20I%20need%20help%20with%20campsites."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border-2 border-campfire-gold text-forest-black rounded-full font-medium hover:bg-campfire-gold/10 transition-colors"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
