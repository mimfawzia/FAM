import {Globe2, Layers, Target} from 'lucide-react';
import {PERSONAL_INFO} from '../data/portfolioData';

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-slate-200/80 bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#0F766E]">Introduction · পরিচিতি</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#071525] [text-wrap:balance]">
            About Me
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* English Biography */}
          <div className="glass-surface rounded-2xl p-6 sm:p-8 lg:col-span-7">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <h3 className="font-display text-lg font-semibold text-[#071525]">
                Strategic Marketing Meets Visual Craft
              </h3>
              <span className="text-xs font-medium text-slate-500 whitespace-nowrap">
                English
              </span>
            </div>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                I&apos;m <strong className="font-semibold text-[#071525]">{PERSONAL_INFO.name}</strong>,
                a Digital Marketer and Graphic Designer from Bangladesh with{' '}
                <strong className="font-semibold text-[#071525]">2+ years of hands-on experience</strong>{' '}
                helping brands strengthen their online presence and communicate clearly with their
                audiences.
              </p>
              <p>
                My work bridges two essential pillars of modern brand growth: data-informed{' '}
                <span className="font-medium text-[#071525]">digital marketing</span> (social media strategy, SEO,
                paid Facebook campaigns, and email sequences) and purposeful{' '}
                <span className="font-medium text-[#071525]">graphic design</span> (cohesive social visuals, brand
                creatives, and high-clarity content assets).
              </p>
              <p>
                Whether partnering with international startups, e-commerce stores, or personal
                brands across Fiverr, Upwork, and LinkedIn, I focus on building consistent,
                audience-centered content systems that turn attention into lasting trust.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <Target className="mt-0.5 h-5 w-5 shrink-0 text-[#0D9488]" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#071525]">Social Strategy</p>
                  <p className="mt-0.5 text-xs text-slate-600">
                    Platform-native audience growth
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="mt-0.5 h-5 w-5 shrink-0 text-[#0D9488]" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#071525]">Content &amp; Design</p>
                  <p className="mt-0.5 text-xs text-slate-600">
                    Cohesive creative storytelling
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0D9488]" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#071525]">Brand Presence</p>
                  <p className="mt-0.5 text-xs text-slate-600">
                    Built for global marketplaces
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bengali Introduction */}
          <div className="glass-surface rounded-2xl p-6 sm:p-8 lg:col-span-5">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <h3 className="font-bengali text-lg font-semibold text-[#071525]">
                আমার সম্পর্কে
              </h3>
              <span className="font-bengali text-xs font-medium text-[#0F766E] whitespace-nowrap">
                বাংলা
              </span>
            </div>

            <div className="font-bengali mt-5 space-y-4 text-[15px] leading-[1.85] text-slate-600">
              <p>
                আমি <strong className="font-semibold text-[#071525]">ফাউজিয়া আবিদা মিম</strong>,
                বাংলাদেশের একজন ডিজিটাল মার্কেটার ও গ্রাফিক ডিজাইনার। ডিজিটাল মার্কেটিং এবং
                সৃজনশীল ভিজ্যুয়াল ডিজাইনে আমার <strong className="font-semibold text-[#071525]">২+ বছরের বাস্তব অভিজ্ঞতা</strong>{' '}
                রয়েছে।
              </p>
              <p>
                আমি সোশ্যাল মিডিয়া স্ট্র্যাটেজি, কনটেন্ট ক্রিয়েশন, এসইও, ফেসবুক অ্যাডস এবং
                ব্র্যান্ড-কেন্দ্রিক গ্রাফিক ডিজাইনের সমন্বয়ে ব্যবসাগুলোকে তাদের সঠিক অডিয়েন্সের
                কাছে পৌঁছাতে এবং অনলাইন উপস্থিতি শক্তিশালী করতে সহায়তা করি।
              </p>
              <p>
                প্রতিটি প্রজেক্টে আমার লক্ষ্য হলো পরিচ্ছন্ন ডিজাইন, কৌশলগত পরিকল্পনা এবং
                পেশাদার যোগাযোগের মাধ্যমে ব্র্যান্ডের টেকসই প্রবৃদ্ধি নিশ্চিত করা।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
