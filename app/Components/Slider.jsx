"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageSlider({ images = [] }) {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden mt-6">

      {/* Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute px-4 inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${i}`}
            fill
            className="object-cover md:object-none"
          />
        </div>
      ))}

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
      >
        ›
      </button>
    </div>
  );
}
