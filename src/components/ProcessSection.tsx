import {WORKING_PROCESS} from '../data/portfolioData';

export function ProcessSection() {
  return (
    <section
      id="experience"
      className="border-b border-white/[0.06] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#00D6C5]">
              2+ Years Experience · কাজের প্রক্রিয়া
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              My Working Process
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#B7C5D3]">
            A structured five-step workflow shaped over two years of digital marketing and
            graphic design practice—available in English and Bengali.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <ol className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
          {WORKING_PROCESS.map((step, index) => (
            <li
              key={step.number}
              className="glass-surface glass-surface-hover relative flex flex-col justify-between rounded-2xl p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-2xl font-bold text-[#00D6C5] tabular-nums">
                    {step.number}
                  </span>
                  {index < WORKING_PROCESS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden lg:inline-block h-px flex-1 bg-gradient-to-r from-[#00D6C5]/40 to-transparent ml-3"
                    />
                  )}
                </div>

                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {step.titleEn}
                </h3>
                <p className="font-bengali mt-1 text-sm font-medium text-[#00D6C5]">
                  {step.titleBn}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-[#B7C5D3]">
                  {step.descriptionEn}
                </p>
              </div>

              <p className="font-bengali mt-4 border-t border-white/[0.08] pt-3 text-xs leading-relaxed text-[#B7C5D3]/85">
                {step.descriptionBn}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
