"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w"
          alt="Swiss mountains at sunset with Bitcoin"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide leading-relaxed drop-shadow-lg uppercase">
            A BRIGHT NEW DAWN FOR DIGITAL TRANSFERS, SOUND MONEY AND PERSONAL FREEDOM.
          </h1>
        </div>
      </div>
    </section>
  );
}