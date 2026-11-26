import {MessageSquareQuote} from 'lucide-react';
import {TESTIMONIAL_SLOTS} from '../data/portfolioData';

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-b border-white/[0.06] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#00D6C5]">Client Feedback</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Testimonials
            </h2>
          </div>

          <p className="text-sm font-medium text-[#00D6C5]">
            Testimonials Coming Soon
          </p>
        </div>

        {/* Clear Notice Banner */}
        <div className="mt-8 rounded-2xl border border-[#00D6C5]/25 bg-[#102238]/60 p-5 sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-base font-semibold text-white">
                Testimonials Coming Soon
              </h3>
              <p className="mt-1 text-sm text-[#B7C5D3]">
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
              className="flex flex-col justify-between rounded-2xl border border-dashed border-white/15 bg-[#102238]/35 p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-[#B7C5D3]">
                  <span>{slot.slotLabel}</span>
                  <span>{slot.marketplace}</span>
                </div>

                <div className="mt-5 flex items-center gap-3 text-[#00D6C5]/75">
                  <MessageSquareQuote className="h-6 w-6 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-medium text-[#B7C5D3]">
                    Awaiting verified client review
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#B7C5D3]/80">{slot.note}</p>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <p className="text-xs font-medium text-white/60">Client Name · Company / Role</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
