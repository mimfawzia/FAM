import {
  Award,
  Compass,
  Lightbulb,
  MessageSquare,
  TrendingUp,
  Users,
} from 'lucide-react';
import {WHY_CHOOSE_ME, WhyChooseItem} from '../data/portfolioData';

function WhyIcon({name}: {name: WhyChooseItem['iconName']}) {
  const cls = 'h-5 w-5 text-[#0F766E]';
  switch (name) {
    case 'Lightbulb':
      return <Lightbulb className={cls} aria-hidden="true" />;
    case 'Compass':
      return <Compass className={cls} aria-hidden="true" />;
    case 'Users':
      return <Users className={cls} aria-hidden="true" />;
    case 'MessageSquare':
      return <MessageSquare className={cls} aria-hidden="true" />;
    case 'Award':
      return <Award className={cls} aria-hidden="true" />;
    case 'TrendingUp':
      return <TrendingUp className={cls} aria-hidden="true" />;
  }
}

export function WhyChooseMeSection() {
  return (
    <section
      id="why-choose-me"
      className="border-b border-slate-200/80 bg-slate-50/75 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#0F766E]">Collaboration Standards</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071525] [text-wrap:balance]">
            Why Choose Me
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Built for reliable remote collaboration with international founders, agencies, and
            growing digital brands.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_ME.map((item) => (
            <div
              key={item.id}
              className="glass-surface glass-surface-hover rounded-2xl p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0D9488]/25 bg-teal-50">
                <WhyIcon name={item.iconName} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-[#071525]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
