import React from "react";
import { Meteors } from "./components/ui/Meteors";

export function MeteorsDemo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-full max-w-xl">
        {/* Gradient background */}
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />

        {/* Main content box */}
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          {/* Icon */}
          <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            Meteors because they&apos;re cool
          </h1>

          {/* Description */}
          <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
          </p>

          {/* Button */}
          <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
            Explore
          </button>

          {/* Meteor Animation */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
