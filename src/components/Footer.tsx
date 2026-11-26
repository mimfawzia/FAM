import {ExternalLink, Mail} from 'lucide-react';
import {PERSONAL_INFO, SOCIAL_LINKS} from '../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const activeSocialLinks = SOCIAL_LINKS.filter((item) => item.url.trim().length > 0);

  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-[#071525]">
            {PERSONAL_INFO.name}
          </p>
          <p className="mt-1 text-sm text-slate-600">{PERSONAL_INFO.title}</p>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[#0F766E] transition-colors hover:text-[#0D9488]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {PERSONAL_INFO.email}
          </a>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          {activeSocialLinks.length > 0 && (
            <div className="flex flex-wrap items-center gap-4">
              {activeSocialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 transition-colors hover:text-[#0F766E]"
                >
                  {social.label}
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          )}

          <p className="text-xs text-slate-500 tabular-nums">
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
