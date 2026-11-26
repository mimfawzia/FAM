/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useState} from 'react';
import {AboutSection} from './components/AboutSection';
import {ContactSection} from './components/ContactSection';
import {Footer} from './components/Footer';
import {HeroSection} from './components/HeroSection';
import {Navbar} from './components/Navbar';
import {PortfolioSection} from './components/PortfolioSection';
import {ProcessSection} from './components/ProcessSection';
import {ServicesSection} from './components/ServicesSection';
import {SkillsSection} from './components/SkillsSection';
import {TestimonialsSection} from './components/TestimonialsSection';
import {WhyChooseMeSection} from './components/WhyChooseMeSection';

export default function App() {
  const [prefilledSubject, setPrefilledSubject] = useState<string | undefined>(undefined);

  const handleInquireProject = (projectSubject: string) => {
    setPrefilledSubject(projectSubject);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <div className="min-h-screen bg-[#071525] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <PortfolioSection onInquireProject={handleInquireProject} />
        <ProcessSection />
        <WhyChooseMeSection />
        <TestimonialsSection />
        <ContactSection prefilledSubject={prefilledSubject} />
      </main>
      <Footer />
    </div>
  );
}
