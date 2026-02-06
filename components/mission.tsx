"use client";

export function Mission() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-serif text-gray-800 mb-10">
          Our Mission
        </h2>

        {/* Content */}
        <div className="text-center space-y-6">
          <p className="text-gray-600 leading-relaxed text-base">
            We form an active community of enthusiasts with regular events, try to resolve open legal
            questions, and educate the public by providing a contact point for media inquiries.
          </p>

          <p className="text-gray-600 leading-relaxed text-base">
            Bitcoin has the potential not only to revolutionize online payments, but also to give
            control over their financial transactions and assets back to individuals, and to serve as an
            asset with exceptionally strong property guarantees. Furthermore, its technology has the
            potential to serve as a platform for countless other services that can benefit from
            decentralized consensus and cryptographically secure tracking of property. As an
            Association, we want to pave the way for Bitcoin to flourish and unfold its full potential.
          </p>
        </div>
      </div>
    </section>
  );
}