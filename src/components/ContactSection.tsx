import {FormEvent, useEffect, useState} from 'react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import {PERSONAL_INFO, SOCIAL_LINKS} from '../data/portfolioData';

interface ContactSectionProps {
  prefilledSubject?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection({prefilledSubject}: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [mailtoPrepared, setMailtoPrepared] = useState<string | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (prefilledSubject) {
      setSubject(prefilledSubject);
    }
  }, [prefilledSubject]);

  const activeSocialLinks = SOCIAL_LINKS.filter((item) => item.url.trim().length > 0);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!subject.trim() || subject.trim().length < 3) {
      nextErrors.subject = 'Please add a short subject for your inquiry.';
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message = 'Please share a few details about your project (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setMailtoPrepared(null);
      return;
    }

    const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject.trim()}`);
    const encodedBody = encodeURIComponent(
      `Hello Fawzia,\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodedSubject}&body=${encodedBody}`;

    setMailtoPrepared(mailtoUrl);
    window.location.href = mailtoUrl;
  };

  const handleCopyMessage = async () => {
    const formatted = `To: ${PERSONAL_INFO.email}\nFrom: ${name.trim()} (${email.trim()})\nSubject: ${subject.trim()}\n\n${message.trim()}`;
    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedSummary(true);
      window.setTimeout(() => setCopiedSummary(false), 2400);
    } catch {
      // Ignore clipboard failure
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-50/75 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Direct Details & Email CTA */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#0F766E]">Get In Touch</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071525] [text-wrap:balance]">
              Let&apos;s Grow Your Business Together!
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Have a project in mind? Let&apos;s discuss how I can help your business grow.
            </p>

            <div className="mt-8 space-y-4">
              <div className="glass-surface flex items-start gap-4 rounded-2xl p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#0D9488]/25 bg-teal-50">
                  <Mail className="h-5 w-5 text-[#0F766E]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-500">Direct Email</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="mt-0.5 block truncate font-display text-base font-semibold text-[#071525] transition-colors hover:text-[#0F766E]"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="glass-surface flex items-start gap-4 rounded-2xl p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#0D9488]/25 bg-teal-50">
                  <MapPin className="h-5 w-5 text-[#0F766E]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Location &amp; Languages</p>
                  <p className="mt-0.5 font-display text-base font-semibold text-[#071525]">
                    {PERSONAL_INFO.location} · {PERSONAL_INFO.languages}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                  'Project Inquiry — Digital Marketing & Design'
                )}`}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-[#0D9488]/35 bg-teal-50 px-5 py-3 text-sm font-semibold text-[#0F766E] transition-colors hover:bg-teal-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email Directly
              </a>
            </div>

            {/* Social Links — Automatically shown once real URLs are configured */}
            {activeSocialLinks.length > 0 && (
              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-xs font-medium text-slate-500">Connect Online</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {activeSocialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-[#071525] transition-colors hover:border-[#0D9488]/50 hover:text-[#0F766E]"
                    >
                      {social.label}
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Validated Contact Form with Mailto Fallback */}
          <div className="glass-surface rounded-2xl p-6 sm:p-8 lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[#071525]"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({...prev, name: undefined}));
                    }}
                    placeholder="Enter your name"
                    aria-invalid={Boolean(errors.name)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#071525] placeholder-slate-400 transition-colors focus:border-[#0D9488] focus:outline-none"
                  />
                  {errors.name && (
                    <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[#071525]"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({...prev, email: undefined}));
                    }}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#071525] placeholder-slate-400 transition-colors focus:border-[#0D9488] focus:outline-none"
                  />
                  {errors.email && (
                    <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-[#071525]"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                    if (errors.subject) setErrors((prev) => ({...prev, subject: undefined}));
                  }}
                  placeholder="Social media campaign, SEO audit, or graphic design"
                  aria-invalid={Boolean(errors.subject)}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#071525] placeholder-slate-400 transition-colors focus:border-[#0D9488] focus:outline-none"
                />
                {errors.subject && (
                  <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[#071525]"
                >
                  Project Details
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({...prev, message: undefined}));
                  }}
                  placeholder="Tell me about your brand, goals, and timeline..."
                  aria-invalid={Boolean(errors.message)}
                  className="mt-2 w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#071525] placeholder-slate-400 transition-colors focus:border-[#0D9488] focus:outline-none"
                />
                {errors.message && (
                  <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <p className="text-xs text-slate-500">
                  Opens your default email app to send directly to {PERSONAL_INFO.email}.
                </p>

                <button
                  type="submit"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#0D9488] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap transition-all duration-150 hover:bg-[#0F766E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </button>
              </div>

              {/* Honest Mailto Confirmation & Copy Fallback */}
              {mailtoPrepared && (
                <div
                  role="status"
                  className="rounded-xl border border-[#0D9488]/30 bg-teal-50/80 p-4 text-sm text-[#071525]"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#0F766E]"
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-[#071525]">
                        Your email draft is ready to send
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">
                        Because this portfolio runs without a server mail relay, your device&apos;s
                        email app was triggered to send to{' '}
                        <span className="font-medium text-[#071525]">{PERSONAL_INFO.email}</span>. If your mail app
                        did not open, copy the formatted message below or click &ldquo;Open Email
                        App&rdquo;.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2.5">
                        <a
                          href={mailtoPrepared}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-[#0D9488] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#0F766E]"
                        >
                          Open Email App
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyMessage}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-[#071525] hover:border-[#0D9488]/60"
                        >
                          {copiedSummary ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-[#0F766E]" aria-hidden="true" />
                              Copied Message
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                              Copy Message
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
