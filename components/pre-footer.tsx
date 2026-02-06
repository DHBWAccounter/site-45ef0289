"use client";

// Custom Meetup icon since lucide-react doesn't have it
function MeetupIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor">
      <path d="M30.8,33.4c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4 c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4c0.2,0.8,0.6,2,0.1,2.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5 c-1.5-4.6-3.5-11.8-5.2-16.6c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8 c-1-1.4-3.1-4.8-4.1-6.9c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6 c-0.7-3.4-1.2-8-1.1-11.1c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4 C26.9,25.5,28.9,29.5,30.8,33.4z" />
    </svg>
  );
}

// Custom X (Twitter) icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor">
      <path d="M38.2151 43.8252H41.6704L25.7656 20.2546H22.3102L38.2151 43.8252Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H64V64H0V0ZM43.9189 18.5L34.426 29.9327L44.75 45.5H37.1568L30.2042 35.0169L21.4997 45.5H19.25L29.2055 33.5111L19.25 18.5H26.8432L33.4267 28.4268L41.6694 18.5H43.9189Z" />
    </svg>
  );
}

const socialLinks = [
  {
    icon: MeetupIcon,
    href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland",
    label: "Meetup",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 64 64" fill="currentColor">
        <path d="M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z" />
      </svg>
    ),
    href: "https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg",
    label: "YouTube",
  },
  {
    icon: XIcon,
    href: "https://x.com/bitcoin_ch",
    label: "X",
  },
];

export function PreFooter() {
  return (
    <section className="bg-[#3D9991] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-center space-x-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#3D9991] transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
}