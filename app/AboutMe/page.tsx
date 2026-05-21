'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SideNavigation from '../Components/Navigations/SideNavigation';
import TopNavigation from '../Components/Navigations/TopNavigation';
import Footer from '../Components/Footer/Footer';

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const specCards = [
    { 
      label: 'Experience', 
      title: '~2 Years Full-Stack', 
      subtext: 'React · Node.js · Laravel · Django · Expo · React Native', 
      icon: 'work',
      ref: 'EXP_REF_01'
    },
    { 
      label: 'Work Environment', 
      title: 'Remote / Philippines', 
      subtext: 'PST+16 (UTC+8) · Flexible', 
      icon: 'public',
      ref: 'ENV_REF_02'
    },
    { 
      label: 'Availability', 
      title: 'Open Now', 
      subtext: 'Full-time · Freelance · Contract', 
      icon: 'calendar_today',
      ref: 'AVL_REF_03'
    }
  ];

  return (
    <div className="min-h-screen bg-surface font-sans selection:bg-primary/30 text-on-surface">
      {/* 1. Responsive Top Navigation */}
       <TopNavigation activePage="aboutMe" />

      <div className="flex flex-col lg:flex-row pt-20 lg:pt-24 max-w-[1440px] mx-auto min-h-screen">
        
        {/* Persistent Sidebar */}
        <SideNavigation activePage="aboutMe" />

        {/* Content Area */}
        <main className="flex-1 p-6 sm:p-12 lg:p-20">
          <header className="mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-bright/50 border border-outline-variant/30 text-[10px] font-mono text-secondary mb-6 uppercase tracking-widest">
              Identity Matrix
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-on-surface">Core Identity / Bio</h1>
            <p className="text-lg lg:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
            Building full-stack products that are fast, maintainable, and built to
            grow. I care about clean architecture, real performance, and writing
            code that the next developer will actually thank me for.
            </p>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 mb-20">
            
            {/* Biography Terminal */}
            <div className="bg-surface-container-low rounded-[32px] border border-outline-variant/30 overflow-hidden shadow-2xl shadow-black/20">
              <div className="bg-surface-bright/50 px-6 py-4 border-b border-outline-variant/20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/30" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                    <div className="w-3 h-3 rounded-full bg-green-500/30" />
                  </div>
                  <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">bash — architect-bio.sh</div>
                </div>
              </div>
              
              <div className="p-8 lg:p-10 font-mono text-sm leading-relaxed space-y-6 overflow-x-auto">
                <div className="text-on-surface-variant"># Initialization...</div>
                <div className="flex gap-3">
                  <span className="text-primary">$</span>
                  <span className="text-on-surface">cat profile.txt</span>
                </div>
                <div className="text-on-surface-variant max-w-xl">
                With around 2 years of hands-on experience in full-stack engineering,
                I've grown from building simple CRUD apps to architecting distributed
                systems and cloud-native solutions. My curiosity for how data flows
                across the stack led me deep into both frontend frameworks and backend
                infrastructure.
                </div>
                <div className="text-on-surface-variant max-w-xl">
                Today, I focus on building high-performance platforms that are clean
                on the surface and solid underneath. I believe good code is not just
                functional — it's maintainable, scalable, and built to last.
                </div>
                <div className="flex gap-3">
                  <span className="text-primary">$</span>
                  <span className="text-on-surface">grep "expertise" capabilities.json</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { label: 'React / Next.js / Expo', icon: 'web' },
                        { label: 'Node.js / Laravel / Django', icon: 'dns' },
                        { label: 'Low Latency APIs', icon: 'bolt' },
                        { label: 'Distributed Systems', icon: 'hub' },
                    ].map((item) => (
                        <div
                        key={item.label}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container border border-outline-variant/20 hover:border-primary/50 hover:bg-surface-container-high transition-all group"
                        >
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                            {item.icon}
                        </span>
                        <span className="text-[11px] font-mono text-secondary group-hover:text-primary transition-colors uppercase tracking-wider">
                            {item.label}
                        </span>
                        </div>
                    ))}
                </div>
                <div className="flex gap-3">
                   <span className="text-primary w-2 h-5 bg-primary animate-pulse" />
                </div>
              </div>
            </div>

            {/* Philosophy Code Editor */}
            <div className="bg-surface-container-low rounded-[32px] border border-outline-variant/30 overflow-hidden shadow-2xl shadow-black/20">
              <div className="bg-surface-bright/50 px-6 py-4 border-b border-outline-variant/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm text-on-surface-variant">description</span>
                  <span className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">Philosophy.ts</span>
                </div>
                <div className="text-[10px] font-mono text-on-surface-variant">UTF-8</div>
              </div>
              
              <div className="p-8 lg:p-10 font-mono text-sm leading-relaxed overflow-x-auto">
                <pre className="text-on-surface-variant">
                {`interface PersonalValues {
    ownership: boolean;
    curiosity: boolean;
    craftsmanship: boolean;
}


const HarfeilManifesto: PersonalValues = {
ownership: true,      // I see things through
curiosity: true, // Always learning and building
craftsmanship: true   // Details matter
};

function build(problem: Problem): Solution {
    return problem.solveWith(precision);
}`}
                </pre>
                <div className="mt-8 pt-6 border-t border-outline-variant/10">
                   <div className="flex items-center gap-3 text-primary">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      <span className="text-[10px] uppercase tracking-widest">System Check: Optimal</span>
                   </div>
                   <div className="mt-3 w-full h-1 bg-surface-bright rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                   </div>
                </div>
              </div>
            </div>

          </div>

          {/* System Specs Section */}
          <section className="space-y-8 lg:space-y-12">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-on-surface">System Specs & Availability</h2>
              <div className="flex-1 h-px bg-outline-variant/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {specCards.map((spec) => (
                <div key={spec.ref} className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all group">
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-4 rounded-2xl bg-surface-bright/30 border border-outline-variant/10 text-on-surface-variant group-hover:text-primary transition-colors">
                       <span className="material-symbols-outlined text-2xl">{spec.icon}</span>
                    </div>
                    <span className="text-[8px] font-mono text-on-surface-variant tracking-[0.2em] uppercase">{spec.ref}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">{spec.label}</p>
                    <h3 className="text-xl font-bold">{spec.title}</h3>
                    <p className="text-sm text-on-surface-variant">{spec.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <Footer />

    </div>
  );
}