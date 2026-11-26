import {useState} from 'react';
import {SKILLS, SkillItem} from '../data/portfolioData';

type DisciplineFilter = 'All' | SkillItem['discipline'];

const DISCIPLINES: DisciplineFilter[] = [
  'All',
  'Digital Marketing',
  'Paid & Organic Growth',
  'Creative & Content',
];

export function SkillsSection() {
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineFilter>('All');

  const visibleSkills =
    activeDiscipline === 'All'
      ? SKILLS
      : SKILLS.filter((skill) => skill.discipline === activeDiscipline);

  return (
    <section
      id="skills"
      className="border-b border-slate-200/80 bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#0F766E]">Capabilities</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071525] [text-wrap:balance]">
              Skills &amp; Expertise
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
              Core disciplines applied across brand campaigns, social channels, search visibility,
              and visual communication.
            </p>
          </div>

          {/* Interactive Discipline Segmented Filter */}
          <div
            role="tablist"
            aria-label="Filter skills by discipline"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100/80 p-1.5"
          >
            {DISCIPLINES.map((discipline) => {
              const isActive = activeDiscipline === discipline;
              return (
                <button
                  key={discipline}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveDiscipline(discipline)}
                  className={`rounded-lg px-3 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] ${
                    isActive
                      ? 'bg-[#0D9488] text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-[#071525]'
                  }`}
                >
                  {discipline}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSkills.map((skill) => (
            <div
              key={skill.id}
              className="glass-surface glass-surface-hover rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-[#0F766E]">{skill.discipline}</p>
                  <h3 className="mt-1 font-display text-base font-semibold text-[#071525]">
                    {skill.name}
                  </h3>
                </div>
              </div>

              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{skill.focus}</p>

              {/* Visual emphasis bar (5 discrete blocks — no invented percentages) */}
              <div
                className="mt-4 flex items-center gap-1.5"
                aria-label={`${skill.name} active practice area`}
              >
                {Array.from({length: 5}).map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      idx < skill.levelBars ? 'bg-[#0D9488]' : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
