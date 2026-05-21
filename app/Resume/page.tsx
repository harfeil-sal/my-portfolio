'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TopNavigation from '../Components/Navigations/TopNavigation';
import SideNavigation from '../Components/Navigations/SideNavigation';
import Footer from '../Components/Footer/Footer';

export default function ResumeViewer() {

  // Replace with your actual resume PDF link
  const resumeUrl = "https://drive.google.com/file/d/16Yr7SafX2KKzkb9ivDWM_L8dXRCFucXd/preview";

//   const metadata = [
//     { label: 'Version', value: '2.4.0-stable' },
//     { label: 'File Size', value: '412.8 KB' },
//     { label: 'Last Updated', value: 'Oct 12, 2023' },
//     { label: 'Encryption', value: 'AES-256 Valid', color: 'text-primary' }
//   ];

  const tags = ["React", "Rust", "K8s", "GCP", "AWS"];

  return (
    <div className="min-h-screen bg-surface font-sans selection:bg-primary/30 text-on-surface">
      {/* 1. Responsive Top Navigation */}
      <TopNavigation activePage="resume" />

      <div className="flex flex-col lg:flex-row pt-20 lg:pt-24 max-w-[1440px] mx-auto min-h-screen">
        
        {/* Persistent Sidebar */}
        <SideNavigation activePage="resume" />

        {/* Content Area */}
        <main className="flex-1 p-6 sm:p-12 lg:px-20 lg:py-12">
          <header className="mb-12">
            <div className="flex items-center gap-2 text-on-surface-variant font-mono text-[10px] mb-4 uppercase tracking-[0.3em]">
               SYSTEM / CORE / ASSETS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-on-surface">
              My <span className="text-secondary italic">Resume</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-12 items-start">
            
            {/* Document Terminal */}
            <div className="bg-surface-container-low rounded-[32px] border border-outline-variant/30 overflow-hidden shadow-2xl shadow-black/20 flex flex-col h-[800px]">
              <div className="bg-surface-bright/50 px-6 py-4 border-b border-outline-variant/20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/30" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                    <div className="w-3 h-3 rounded-full bg-green-500/30" />
                  </div>
                  <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                    resume_v2.4_final.pdf
                  </div>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant">
                   <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">search</span>
                   <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">zoom_in</span>
                   <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">fullscreen</span>
                </div>
              </div>
              
              <div className="flex-1 relative bg-surface-container-lowest/50 p-8 flex items-center justify-center">
                 {/* Embed PDF here. Using iframe for demonstration. */}
                 <iframe 
                    src="https://drive.google.com/file/d/16Yr7SafX2KKzkb9ivDWM_L8dXRCFucXd/preview"
                    className="w-full h-full border border-outline-variant/20 rounded-xl"
                    title="Resume Document"
                    allow="autoplay"
                />
                 
                 {/* Empty State / Loading Overlay if URL is missing */}
                 {!resumeUrl && (
                    <div className="text-center space-y-6 max-w-xs">
                       <span className="material-symbols-outlined text-6xl text-outline-variant animate-pulse">description</span>
                       <h3 className="text-xl font-bold">Document Renderer</h3>
                       <p className="text-sm text-on-surface-variant leading-relaxed">
                          The secure PDF stream is being initiated. Please wait for systemic verification...
                       </p>
                       <div className="w-full h-1 bg-surface-bright rounded-full overflow-hidden">
                          <div className="h-full bg-primary animate-progress-indeterminate w-1/3" />
                       </div>
                    </div>
                 )}
              </div>
            </div>

            {/* Sidebar Actions & Metadata */}
            <div className="space-y-6">
              <div className="p-8 rounded-[32px] bg-surface-container-low border border-outline-variant/30">
                <h3 className="text-secondary font-bold mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">publish</span> Deploy Asset
                </h3>
                <div className="space-y-4">
                  <a 
                    href={resumeUrl} 
                    download 
                    className="w-full bg-primary text-on-primary px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-xl shadow-primary/20 group"
                  >
                    <span className="material-symbols-outlined">download</span> Download PDF
                  </a>
                  <button className="w-full bg-surface-bright/30 border border-outline-variant/10 text-on-surface px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-surface-bright/50 transition-all">
                    <span className="material-symbols-outlined">print</span> Print Resume
                  </button>
                </div>
                <p className="mt-6 text-[10px] text-center text-on-surface-variant font-mono uppercase tracking-widest">
                  Standard A4 Format Optimized
                </p>
              </div>
              
              <div className="h-32 rounded-[32px] overflow-hidden grayscale opacity-30 border border-outline-variant/20 relative group hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover" 
                  alt="Infrastructure" 
                />
                <div className="absolute bottom-4 left-6 text-[8px] font-mono text-primary tracking-widest uppercase bg-surface/80 px-2 py-1 rounded">ARCHITECT CORE ENABLED</div>
              </div>
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}