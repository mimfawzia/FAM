import {
  Facebook,
  FileText,
  Instagram,
  LayoutGrid,
  Mail,
  Palette,
  Search,
  Share2,
  Sparkles,
  Target,
  Youtube,
} from 'lucide-react';
import {SERVICES, ServiceItem} from '../data/portfolioData';

function ServiceIcon({name}: {name: ServiceItem['iconName']}) {
  const cls = 'h-5 w-5 text-[#00D6C5]';
  switch (name) {
    case 'Share2':
      return <Share2 className={cls} aria-hidden="true" />;
    case 'Instagram':
      return <Instagram className={cls} aria-hidden="true" />;
    case 'Facebook':
      return <Facebook className={cls} aria-hidden="true" />;
    case 'Search':
      return <Search className={cls} aria-hidden="true" />;
    case 'Target':
      return <Target className={cls} aria-hidden="true" />;
    case 'Youtube':
      return <Youtube className={cls} aria-hidden="true" />;
    case 'FileText':
      return <FileText className={cls} aria-hidden="true" />;
    case 'Mail':
      return <Mail className={cls} aria-hidden="true" />;
    case 'Palette':
      return <Palette className={cls} aria-hidden="true" />;
    case 'LayoutGrid':
      return <LayoutGrid className={cls} aria-hidden="true" />;
    case 'Sparkles':
      return <Sparkles className={cls} aria-hidden="true" />;
  }
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-b border-white/[0.06] bg-[#102238]/25 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#00D6C5]">What I Offer</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Digital Marketing &amp; Creative Services
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#B7C5D3]">
            Focused execution across organic social growth, search optimization, paid media, and
            brand-aligned visual design.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="glass-surface glass-surface-hover group flex flex-col justify-between rounded-2xl p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00D6C5]/25 bg-[#00D6C5]/10 transition-colors duration-200 group-hover:border-[#00D6C5]/50 group-hover:bg-[#00D6C5]/15">
                    <ServiceIcon name={service.iconName} />
                  </div>
                  <span className="font-display text-xs font-semibold tracking-wider text-[#B7C5D3]/70 tabular-nums">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-white transition-colors duration-150 group-hover:text-[#00D6C5]">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#B7C5D3]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
