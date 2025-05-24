"use client";

import React, { useEffect } from "react";
import { SparklesCore } from "./components/ui/SparklesCore";

export function SparklesPreview() {
  // 🌧️ Rain Effect
  useEffect(() => {
    const canvas = document.getElementById("beamCanvas");
    const ctx = canvas.getContext("2d");
    let w, h;
    let rainDrops = [];

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    class RainDrop {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * -h;
        this.length = 10 + Math.random() * 20;
        this.speed = 4 + Math.random() * 4;
        this.opacity = 0.3 + Math.random() * 0.4;
      }

      update() {
        this.y += this.speed;
        if (this.y > h) this.reset();
      }

      draw() {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(135, 206, 250, ${this.opacity})`; // LightSkyBlue
        ctx.lineWidth = 1.2;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
      }
    }

    for (let i = 0; i < 120; i++) {
      rainDrops.push(new RainDrop());
    }

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      rainDrops.forEach((drop) => {
        drop.update();
        drop.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md relative">
      {/* Title */}
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Bolt-newer
      </h1>

      {/* Subtitle */}
      <h3 className="text-xl md:text-2xl font-medium text-center text-white mt-4 z-20 animate-fade-up">
        A website that lets you create other websites
      </h3>

      <div className="w-[40rem] h-40 relative z-10 mt-4">
        {/* 🌧️ Rain Canvas */}
        <canvas
          id="beamCanvas"
          className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
        />

        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* ✨ Sparkles */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          particleColor="#FFFFFF"
          className="w-full h-full"
        />

        {/* Radial Mask */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}
