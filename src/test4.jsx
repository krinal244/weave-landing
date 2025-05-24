"use client";
import React, { useRef, useState } from "react";
import { ContainerScroll } from "./components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative min-h-screen overflow-visible">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <div className="relative rounded-2xl overflow-visible">
          <video
            ref={videoRef}
            src="/oreo.mp4"
            muted={isMuted}
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          />
          <button
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute bottom-3 right-3 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-60 hover:bg-opacity-80 transition"
            title={isMuted ? "Sound On" : "Sound Off"}
          >
            {isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5L16 12M16 12L9 19M16 12H21M3 9v6a2 2 0 002 2h3l4 4V5L8 7H5a2 2 0 00-2 2z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5L16 12M16 12L9 19M16 12H21M21 12c0-1.105-.895-2-2-2v4c1.105 0 2-0.895 2-2zM5 9v6a2 2 0 002 2h3l4 4V5L10 7H7a2 2 0 00-2 2z"
                />
              </svg>
            )}
          </button>
        </div>
      </ContainerScroll>
    </div>
  );
}
