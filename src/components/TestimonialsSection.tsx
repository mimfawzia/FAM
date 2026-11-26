import {MessageSquareQuote} from 'lucide-react';
import {TESTIMONIAL_SLOTS} from '../data/portfolioData';

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-b border-slate-200/80 bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#0F766E]">Client Feedback</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071525] [text-wrap:balance]">
              Testimonials
            </h2>
          </div>

          <p className="text-sm font-medium text-[#0F766E]">
            Testimonials Coming Soon
          </p>
        </div>

        {/* Clear Notice Banner */}
        <div className="mt-8 rounded-2xl border border-[#0D9488]/25 bg-teal-50/70 p-5 sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-base font-semibold text-[#071525]">
                Testimonials Coming Soon
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Verified client reviews from Fiverr, Upwork, and LinkedIn collaborations will be
                published in these slots once received. No reviews are fabricated here.
              </p>
            </div>
          </div>
        </div>

        {/* Editable Placeholder Slots */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIAL_SLOTS.map((slot) => (
            <div
              key={slot.id}
              className="flex flex-col justify-between rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                  <span>{slot.slotLabel}</span>
                  <span>{slot.marketplace}</span>
                </div>

                <div className="mt-5 flex items-center gap-3 text-[#0D9488]">
                  <MessageSquareQuote className="h-6 w-6 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-medium text-slate-600">
                    Awaiting verified client review
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">{slot.note}</p>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-4">
                <p className="text-xs font-medium text-slate-400">Client Name · Company / Role</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
