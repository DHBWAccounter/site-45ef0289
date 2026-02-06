"use client";

import Image from "next/image";

export function LogoSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-xs mx-auto px-4">
        <div className="relative aspect-[227/238] w-full max-w-[180px] mx-auto">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486226923132-GES7LLNU167XSPW77W83/image-asset.png"
            alt="Bitcoin Association Switzerland Logo"
            fill
            className="object-contain"
            sizes="180px"
          />
        </div>
      </div>
    </section>
  );
}