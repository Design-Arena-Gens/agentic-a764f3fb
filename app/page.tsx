"use client";

import { useEffect, useMemo, useState } from "react";

const SLIDE_INTERVAL_MS = 7000;

interface FeaturePoint {
  id: string;
  title: string;
  description: string;
  Icon: () => JSX.Element;
}

interface OnboardingSlide {
  id: string;
  appName: string;
  headline: string;
  body: string;
  featurePoints: FeaturePoint[];
  gradientStops: [string, string, string];
}

const DiversityIcon = () => (
  <svg
    viewBox="0 0 48 48"
    aria-hidden="true"
    className="h-10 w-10 text-primary"
    role="img"
  >
    <path
      fill="currentColor"
      d="M24 4a9.5 9.5 0 1 0 9.5 9.5A9.5 9.5 0 0 0 24 4Zm-16.5 34A7.5 7.5 0 0 1 15 30.5h18A7.5 7.5 0 0 1 40.5 38a5 5 0 0 1-5 5h-23a5 5 0 0 1-5-5Z"
      opacity="0.18"
    />
    <path
      fill="currentColor"
      d="M14.75 16.5a7.25 7.25 0 1 1 7.25-7.25 7.25 7.25 0 0 1-7.25 7.25Zm18.5 0a7.25 7.25 0 1 1 7.25-7.25 7.25 7.25 0 0 1-7.25 7.25ZM8 41.5a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v.5H8Zm16 0a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v.5H24Z"
    />
  </svg>
);

const SyncIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="h-10 w-10 text-primary">
    <path
      fill="currentColor"
      d="M39.6 14.4A18 18 0 0 0 9.36 9.36l-3-3a1.5 1.5 0 0 0-2.56 1.06v11a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.06-2.56l-3.58-3.58a12 12 0 0 1 17 16.84l4.24 4.24A18 18 0 0 0 39.6 14.4Z"
      opacity="0.18"
    />
    <path
      fill="currentColor"
      d="m45.2 29.14-11-11a1.5 1.5 0 0 0-2.56 1.06v11a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.06-2.56ZM18.34 42.3 14.1 38.06A18 18 0 0 0 39.6 14.4l-4.24-4.24a12 12 0 0 1-17 16.84l3.58 3.58A1.5 1.5 0 0 1 20.88 32h-11A1.5 1.5 0 0 1 8.38 30.5v-11a1.5 1.5 0 0 1 2.56-1.06l2.94 2.94a18 18 0 0 0 28.9 20Z"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="h-10 w-10 text-primary">
    <path
      fill="currentColor"
      d="M24 4 8 10v12c0 12.52 7.26 23.94 16 28 8.74-4.06 16-15.48 16-28V10Z"
      opacity="0.18"
    />
    <path
      fill="currentColor"
      d="m24 2.5-18 7V22c0 13.77 8.12 26.44 18 30 9.88-3.56 18-16.23 18-30V9.5Zm0 5.33 13 5.05v9.17c0 11.26-6.25 21.78-13 25.72-6.75-3.94-13-14.46-13-25.72v-9.17Z"
    />
    <path
      fill="currentColor"
      d="M32.5 18.38 21.25 29.63l-5.75-5.76L13 26.37l8.25 8.25L35 20.87Z"
    />
  </svg>
);

const slides: OnboardingSlide[] = [
  {
    id: "connect",
    appName: "LinkSphere",
    headline: "Welcome to LinkSphere",
    body: "Build meaningful connections with people and communities that inspire you, no matter where you are.",
    gradientStops: ["#e0f2fe", "#bfdbfe", "#e8f1ff"],
    featurePoints: [
      {
        id: "diverse",
        title: "Celebrate Diversity",
        description: "Personalized spaces that adapt to every culture and community.",
        Icon: DiversityIcon,
      },
      {
        id: "sync",
        title: "Sync Everywhere",
        description: "Instant updates across iOS, Android, and the web—always in harmony.",
        Icon: SyncIcon,
      },
      {
        id: "secure",
        title: "Stay Protected",
        description: "Enterprise-grade encryption to keep every conversation private.",
        Icon: ShieldIcon,
      },
    ],
  },
  {
    id: "collaborate",
    appName: "LinkSphere",
    headline: "Welcome to LinkSphere",
    body: "Coordinate projects, share updates, and collaborate seamlessly with your entire network.",
    gradientStops: ["#f5f3ff", "#dbeafe", "#fef3c7"],
    featurePoints: [
      {
        id: "flow",
        title: "Workflow Magic",
        description: "Smart automation keeps your teams aligned and engaged.",
        Icon: SyncIcon,
      },
      {
        id: "inclusive",
        title: "Inclusive Spaces",
        description: "Host multilingual meetups with real-time translation.",
        Icon: DiversityIcon,
      },
      {
        id: "secure2",
        title: "Managed Access",
        description: "Granular controls let you decide who sees what, when.",
        Icon: ShieldIcon,
      },
    ],
  },
  {
    id: "spark",
    appName: "LinkSphere",
    headline: "Welcome to LinkSphere",
    body: "Discover new perspectives and elevate your digital presence with curated experiences.",
    gradientStops: ["#fffbeb", "#dbeafe", "#ede9fe"],
    featurePoints: [
      {
        id: "discover",
        title: "Smart Discovery",
        description: "AI-powered suggestions surface the communities that fit you best.",
        Icon: SyncIcon,
      },
      {
        id: "connect",
        title: "Connect Instantly",
        description: "Launch video rooms and live events directly from your feed.",
        Icon: DiversityIcon,
      },
      {
        id: "privacy",
        title: "Privacy First",
        description: "Adaptive privacy profiles safeguard how you show up online.",
        Icon: ShieldIcon,
      },
    ],
  },
];

function useAutoplay(length: number, delay: number) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, delay);
    return () => clearInterval(timer);
  }, [length, delay]);
  return [index, setIndex] as const;
}

function Illustration() {
  return (
    <figure
      className="relative flex h-full w-full max-w-xl flex-col items-center justify-center"
      role="img"
      aria-label="Illustration of diverse individuals connecting through digital devices"
    >
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary/20 via-primary/5 to-white blur-3xl" />
      <svg
        viewBox="0 0 520 520"
        className="relative h-full w-full"
        focusable="false"
      >
        <defs>
          <linearGradient id="avatar-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <circle cx="260" cy="260" r="220" fill="#eff6ff" />
        <circle cx="130" cy="220" r="78" fill="url(#avatar-gradient)" />
        <circle cx="390" cy="190" r="64" fill="#a855f7" opacity="0.85" />
        <circle cx="350" cy="340" r="88" fill="#38bdf8" opacity="0.82" />
        <circle cx="200" cy="360" r="70" fill="#f59e0b" opacity="0.8" />
        <g stroke="#0f172a" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M130 220c24-6 48 0 60 30" fill="none" />
          <path d="M390 190c-22 8-44 24-44 56" fill="none" />
          <path d="M350 340c-36-12-64 0-78 44" fill="none" />
          <path d="M200 360c34-6 52 8 66 42" fill="none" />
        </g>
        <g fill="#fff" stroke="#0f172a" strokeWidth="6" strokeLinejoin="round">
          <rect x="166" y="132" width="120" height="80" rx="16" />
          <rect x="266" y="292" width="140" height="94" rx="18" />
          <rect x="96" y="312" width="108" height="72" rx="18" />
        </g>
        <g fill="#0f172a">
          <circle cx="190" cy="170" r="8" />
          <circle cx="220" cy="170" r="8" />
          <path d="M196 194c8 10 26 10 34 0" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </g>
        <g fill="#0f172a">
          <circle cx="306" cy="330" r="8" />
          <circle cx="336" cy="330" r="8" />
          <path d="M310 354c8 10 26 10 34 0" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </g>
        <g fill="#0f172a">
          <circle cx="120" cy="348" r="8" />
          <circle cx="150" cy="348" r="8" />
          <path d="M124 372c8 10 26 10 34 0" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </g>
        <g stroke="#60a5fa" strokeWidth="8" strokeLinecap="round">
          <path d="M226 172 304 306" />
          <path d="M208 198 152 316" />
          <path d="M320 326 162 330" />
        </g>
        <g fill="#60a5fa">
          <circle cx="304" cy="306" r="16" opacity="0.7" />
          <circle cx="152" cy="316" r="16" opacity="0.7" />
          <circle cx="206" cy="196" r="14" opacity="0.7" />
        </g>
      </svg>
      <figcaption className="sr-only">
        Circular illustration showing diverse avatars connected by glowing digital links.
      </figcaption>
    </figure>
  );
}

export default function Page() {
  const [activeSlide, setActiveSlide] = useAutoplay(slides.length, SLIDE_INTERVAL_MS);
  const active = useMemo(() => slides[activeSlide], [activeSlide]);

  return (
    <main className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-background via-white to-[#dbeafe] p-6">
      <div className="flex w-full max-w-5xl flex-col gap-8 rounded-3xl bg-surface/90 p-6 shadow-elevated ring-1 ring-white/60 backdrop-blur-xl md:flex-row md:p-10">
        <section className="flex flex-1 flex-col justify-between rounded-2xl bg-gradient-to-br p-6 text-white md:p-10"
          style={{ backgroundImage: `linear-gradient(135deg, rgba(96,165,250,0.95), rgba(30,64,175,0.9))` }}
        >
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
              {active.appName}
            </p>
            <h1 className="text-[26px] font-extrabold leading-tight md:text-4xl">
              {active.headline}
            </h1>
            <p className="text-base font-medium text-white/90 md:text-lg">
              {active.body}
            </p>
          </div>
          <div className="mt-10 hidden h-full max-h-[420px] md:block">
            <Illustration />
          </div>
        </section>
        <section className="flex flex-1 flex-col justify-between gap-8">
          <div className="flex flex-col gap-6">
            <div
              className="relative h-[320px] overflow-hidden rounded-3xl p-6 transition-colors duration-700 ease-out sm:h-[360px]"
              style={{
                backgroundImage: `linear-gradient(135deg, ${active.gradientStops.join(", ")})`,
              }}
            >
              <div
                className="flex h-full w-full transform-gpu transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {slides.map((slide) => {
                  const PrimaryIcon = slide.featurePoints[0].Icon;
                  return (
                    <div key={slide.id} className="flex min-w-full flex-col justify-between gap-6">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-white/70 p-3 text-primary shadow-lg">
                          <PrimaryIcon />
                        </span>
                        <h2 className="text-xl font-semibold text-textPrimary">
                          Designed for every connection
                        </h2>
                      </div>
                      <p className="text-sm text-textSecondary md:text-base">
                        {slide.body}
                      </p>
                      <div className="flex flex-1 items-center justify-center md:hidden">
                        <Illustration />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <ul className="grid gap-4">
              {active.featurePoints.map(({ id, Icon, title, description }) => (
                <li key={id} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md focus-within:-translate-y-0.5">
                  <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon />
                  </span>
                  <div className="flex flex-col">
                    <p className="text-base font-semibold text-textPrimary md:text-lg">{title}</p>
                    <p className="text-sm text-textSecondary md:text-base">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <button
              type="button"
              className="h-14 rounded-full bg-primary text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
            >
              Get Started
            </button>
            <div className="flex items-center justify-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-3 w-8 rounded-full transition-all duration-500 ${
                    index === activeSlide
                      ? "bg-primary shadow-md"
                      : "bg-slate-200 hover:bg-primary/60"
                  }`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
