"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    image: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg",
    title: "ABOUT",
    description: "Find out about our organization and mission.",
    link: "/about-1",
    linkText: "Learn More",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg",
    title: "JOIN US",
    description: "You can become a contributor to our cause, or participate yourself.",
    link: "/meetups-events",
    linkText: "Find Out How",
  },
];

export function FeatureCards() {
  return (
    <section className="pb-16 md:pb-20 lg:pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="relative aspect-[3/2] mb-6 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-sans font-medium tracking-widest text-primary mb-3 uppercase">
                <Link href={feature.link} className="hover:opacity-80 transition-opacity">
                  {feature.title}
                </Link>
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Link */}
              <Link
                href={feature.link}
                className="inline-flex items-center text-primary text-sm hover:text-[#2d7a73] transition-colors link-arrow"
              >
                {feature.linkText}
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}