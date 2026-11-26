import {ChangeEvent, useEffect, useRef, useState} from 'react';
import {ArrowRight, Check, Copy, ImagePlus, Mail, RotateCcw} from 'lucide-react';
import {PERSONAL_INFO} from '../data/portfolioData';

const STORAGE_KEY = 'fam_uploaded_portrait_v1';

export function HeroSection() {
  const [portraitUrl, setPortraitUrl] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPortraitUrl(saved);
      }
    } catch {
      // Ignore storage access errors in restricted environments
    }
  }, []);

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select a valid image file (JPG, PNG, or WebP).');
      return;
    }

    if (file.size > 4 * 1024 * 1024) {
      setUploadError('Please choose an image smaller than 4 MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : null;
      if (result) {
        setPortraitUrl(result);
        try {
          localStorage.setItem(STORAGE_KEY, result);
        } catch {
          // Photo remains active in current session even if localStorage quota is full
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetPhoto = () => {
    setPortraitUrl(null);
    setUploadError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback: focus mailto link
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/70 pt-10 pb-14 sm:pt-14 sm:pb-20"
    >
      {/* Subtle Light Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[440px] w-[440px] rounded-full bg-[#00D6C5]/[0.08] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-32 h-[360px] w-[360px] rounded-full bg-slate-200/50 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Core Typographic Hierarchy & CTAs */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-sm font-medium tracking-wide text-[#0F766E]">
              {PERSONAL_INFO.title}
              <span className="mx-2 text-slate-300" aria-hidden="true">
                ·
              </span>
              <span className="text-slate-600">{PERSONAL_INFO.location}</span>
            </p>

            <h1 className="mt-4 font-display text-[clamp(2.25rem,4.2vw,3.6rem)] font-bold leading-[1.1] tracking-tight text-[#071525] [text-wrap:balance]">
              Hello, I&apos;m{' '}
              <span className="bg-gradient-to-r from-[#071525] via-[#0F766E] to-[#0D9488] bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            <p className="mt-4 font-display text-xl sm:text-2xl font-medium leading-snug text-slate-800 [text-wrap:balance] max-w-2xl">
              {PERSONAL_INFO.headline}
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              {PERSONAL_INFO.intro}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#0D9488] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#0F766E] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Hire Me
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#071525] whitespace-nowrap shrink-0 transition-all duration-150 hover:border-[#0D9488]/60 hover:text-[#0F766E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
              >
                View My Portfolio
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Portrait Container (Real Uploaded Photo Slot — Zero AI Face) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="glass-surface relative flex flex-1 min-h-[380px] sm:min-h-[430px] flex-col overflow-hidden rounded-2xl p-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="sr-only"
                id="hero-portrait-upload"
                aria-label="Upload your portrait photo"
              />

              {portraitUrl ? (
                <div className="relative flex-1 overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={portraitUrl}
                    alt={`${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071525]/80 via-[#071525]/30 to-transparent"
                  />
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-white">
                      {PERSONAL_INFO.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-white/90 px-2.5 py-1.5 text-xs font-medium text-[#071525] backdrop-blur-md transition-colors hover:bg-white"
                      >
                        <ImagePlus className="h-3.5 w-3.5 text-[#0F766E]" aria-hidden="true" />
                        Replace
                      </button>
                      <button
                        type="button"
                        onClick={handleResetPhoto}
                        aria-label="Remove portrait photo"
                        className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/90 p-1.5 text-slate-700 backdrop-blur-md transition-colors hover:bg-white hover:text-[#071525]"
                      >
                        <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative flex flex-1 flex-col items-center justify-between rounded-xl border border-dashed border-slate-300 bg-gradient-to-b from-slate-50 to-white p-6 text-center">
                  <div className="flex w-full items-center justify-between text-xs text-slate-500">
                    <span>Portrait Frame</span>
                    <span>{PERSONAL_INFO.location}</span>
                  </div>

                  <div className="my-6 flex flex-col items-center">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#0D9488]/30 bg-teal-50/70 shadow-sm">
                      <span className="font-display text-3xl font-bold tracking-tight text-[#0F766E]">
                        {PERSONAL_INFO.monogram}
                      </span>
                    </div>
                    <p className="mt-5 font-display text-lg font-semibold text-[#071525]">
                      {PERSONAL_INFO.name}
                    </p>
                    <p className="mt-1 max-w-[26ch] text-xs leading-relaxed text-slate-600">
                      Add your real profile photo here—never replaced with an AI avatar.
                    </p>
                  </div>

                  <div className="w-full">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-xl border border-[#0D9488]/35 bg-teal-50 px-4 py-2.5 text-sm font-medium text-[#0F766E] transition-colors hover:bg-teal-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                    >
                      <ImagePlus className="h-4 w-4" aria-hidden="true" />
                      Upload Profile Photo
                    </button>
                    {uploadError && (
                      <p role="alert" className="mt-2 text-xs text-rose-600">
                        {uploadError}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full-Width Key Information Strip Below Hero Split */}
        <div className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-500">Experience</span>
            <span className="mt-1 font-display text-lg font-semibold text-[#071525] tabular-nums">
              {PERSONAL_INFO.experience}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-500">Location</span>
            <span className="mt-1 font-display text-lg font-semibold text-[#071525]">
              {PERSONAL_INFO.location}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-500">Languages</span>
            <span className="mt-1 font-display text-lg font-semibold text-[#071525]">
              {PERSONAL_INFO.languages}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-500">Email</span>
            <div className="mt-1 flex items-center gap-2 min-w-0">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 truncate text-sm sm:text-base font-semibold text-[#0F766E] transition-colors hover:text-[#0D9488]"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                title="Copy email address"
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-[#0D9488]/50 hover:text-[#0F766E]"
              >
                {copiedEmail ? (
                  <Check className="h-3.5 w-3.5 text-[#0F766E]" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
