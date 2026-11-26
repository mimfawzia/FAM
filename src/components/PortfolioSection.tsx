import {useEffect, useState} from 'react';
import {ArrowUpRight, Layers, X} from 'lucide-react';
import {
  CONCEPT_PROJECTS,
  ConceptProject,
  PROJECT_FILTERS,
  ProjectCategory,
} from '../data/portfolioData';

interface PortfolioSectionProps {
  onInquireProject: (projectTitle: string) => void;
}

export function PortfolioSection({onInquireProject}: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeProject, setActiveProject] = useState<ConceptProject | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredProjects =
    selectedCategory === 'All'
      ? CONCEPT_PROJECTS
      : CONCEPT_PROJECTS.filter(
          (project) =>
            project.category === selectedCategory ||
            project.secondaryCategories.includes(selectedCategory)
        );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const markImageFailed = (id: string) => {
    setFailedImages((prev) => ({...prev, [id]: true}));
  };

  return (
    <section
      id="portfolio"
      className="border-b border-white/[0.06] bg-[#102238]/25 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#00D6C5]">
              Selected Concept Showcase · Self-Initiated Work
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Portfolio &amp; Concept Projects
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#B7C5D3]">
              Illustrative concept projects demonstrating visual craft, campaign structuring, and
              SEO planning. Each piece is self-initiated rather than fabricated client work.
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter portfolio projects by category"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/[0.08] bg-[#071525]/80 p-1.5"
          >
            {PROJECT_FILTERS.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D6C5] ${
                    isSelected
                      ? 'bg-[#00D6C5] text-[#071525] font-semibold'
                      : 'text-[#B7C5D3] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-surface glass-surface-hover group flex flex-col overflow-hidden rounded-2xl"
            >
              {/* Project Visual Frame with Fallback Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#071525]">
                {failedImages[project.id] ? (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#102238] to-[#071525] p-6 text-center">
                    <Layers className="h-8 w-8 text-[#00D6C5]/70" aria-hidden="true" />
                    <p className="mt-3 font-display text-sm font-semibold text-white">
                      {project.title}
                    </p>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    referrerPolicy="no-referrer"
                    onError={() => markImageFailed(project.id)}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                )}
              </div>

              {/* Project Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  {/* Unboxed Typographic Metadata */}
                  <div className="flex items-center gap-2 text-xs font-medium text-[#00D6C5]">
                    <span>{project.category}</span>
                    <span className="text-white/30" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-[#B7C5D3]">Concept Project</span>
                  </div>

                  <h3 className="mt-2 font-display text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#B7C5D3]">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#071525]/60 px-4 py-2 text-sm font-medium text-white whitespace-nowrap transition-colors duration-150 hover:border-[#00D6C5]/50 hover:bg-[#00D6C5]/10 hover:text-[#00D6C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D6C5]"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Accessible Project Detail Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#040c16]/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0b1c30] p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-[#00D6C5]">
                  {activeProject.category}
                  <span className="mx-2 text-white/30" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-[#B7C5D3]">Self-Initiated Concept</span>
                </p>
                <h3
                  id="modal-project-title"
                  className="mt-1.5 font-display text-2xl font-bold text-white"
                >
                  {activeProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#102238] text-[#B7C5D3] transition-colors hover:border-[#00D6C5]/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D6C5]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-[#071525]">
              {failedImages[activeProject.id] ? (
                <div className="flex h-full w-full items-center justify-center text-sm text-[#B7C5D3]">
                  {activeProject.title}
                </div>
              ) : (
                <img
                  src={activeProject.image}
                  alt={activeProject.imageAlt}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#B7C5D3]">
              {activeProject.shortDescription}
            </p>

            <p className="mt-3 text-xs italic text-[#B7C5D3]/80">{activeProject.conceptNote}</p>

            <div className="mt-6 grid grid-cols-1 gap-6 border-t border-white/[0.08] pt-6 sm:grid-cols-2">
              <div>
                <h4 className="font-display text-sm font-semibold text-white">
                  Concept Objectives
                </h4>
                <ul className="mt-2.5 space-y-2 text-sm text-[#B7C5D3]">
                  {activeProject.objectives.map((item) => (
                    <li key={item} className="leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-white">
                  Included Deliverables
                </h4>
                <ul className="mt-2.5 space-y-2 text-sm text-[#B7C5D3]">
                  {activeProject.deliverables.map((item) => (
                    <li key={item} className="leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-end gap-3 border-t border-white/[0.08] pt-5">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="inline-flex min-h-[42px] items-center justify-center rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-[#B7C5D3] transition-colors hover:text-white"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeProject.title;
                  setActiveProject(null);
                  onInquireProject(`Inquiry regarding ${title}`);
                }}
                className="inline-flex min-h-[42px] items-center justify-center rounded-xl bg-[#00D6C5] px-5 py-2 text-sm font-semibold text-[#071525] transition-colors hover:bg-[#1de6d6]"
              >
                Request Similar Work
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
