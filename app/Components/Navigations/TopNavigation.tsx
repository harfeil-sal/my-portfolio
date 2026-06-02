'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TopNavigation({activePage}: {activePage: string}) {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 w-full z-50">
          {/* Top bar */}
          <nav className="bg-surface/70 backdrop-blur-xl border-b border-white/10">
            <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-[1440px] mx-auto">
              <div className="font-mono text-lg font-bold tracking-tighter text-secondary">SOFTWARE ENGINEER</div>

              {/* Desktop nav */}
              <div className="hidden md:flex gap-8 items-center">
                <div className="flex gap-8">
                  <Link href="/" className={`font-medium hover:text-primary transition-colors ${activePage === 'home' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`}>Home</Link>
                  <Link href="/AboutMe" className={`hover:text-primary transition-colors ${activePage === 'aboutMe' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`}>About Me</Link>
                  <Link href="/Projects" className={`hover:text-primary transition-colors ${activePage === 'projects' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`}>Projects</Link>
                  <Link href="/Experience" className={`hover:text-primary transition-colors ${activePage === 'experience' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`}>Experience</Link>
                  <Link href="/Contact" className={`hover:text-primary transition-colors ${activePage === 'contact' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`}>Contact</Link>
                </div>
                <div className="flex items-center gap-4 border-l border-white/10 pl-8 text-on-surface-variant">
                  <span className="material-symbols-outlined hover:text-primary cursor-pointer text-sm">code</span>
                  <span className="material-symbols-outlined hover:text-primary cursor-pointer text-sm">terminal</span>
                  <a href="/Resume" className="bg-primary text-on-primary px-5 py-2 rounded-md font-medium hover:brightness-110 transition-all shadow-lg shadow-primary/20 ml-2 block text-center">
                    Resume
                  </a>
                </div>
              </div>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile dropdown — outside the blurred nav so backdrop-filter doesn't interfere */}
          {isMobileMenuOpen && (
            <div style={{ backgroundColor: '#1c253d' }} className="border-b border-white/10 px-6 py-5 flex flex-col gap-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`py-2 font-medium transition-colors ${activePage === 'home' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>Home</Link>
              <Link href="/AboutMe" onClick={() => setIsMobileMenuOpen(false)} className={`py-2 transition-colors ${activePage === 'aboutMe' ? 'text-primary font-medium' : 'text-on-surface-variant hover:text-primary'}`}>About Me</Link>
              <Link href="/Projects" onClick={() => setIsMobileMenuOpen(false)} className={`py-2 transition-colors ${activePage === 'projects' ? 'text-primary font-medium' : 'text-on-surface-variant hover:text-primary'}`}>Projects</Link>
              <Link href="/Experience" onClick={() => setIsMobileMenuOpen(false)} className={`py-2 transition-colors ${activePage === 'experience' ? 'text-primary font-medium' : 'text-on-surface-variant hover:text-primary'}`}>Experience</Link>
              <Link href="/Contact" onClick={() => setIsMobileMenuOpen(false)} className={`py-2 transition-colors ${activePage === 'contact' ? 'text-primary font-medium' : 'text-on-surface-variant hover:text-primary'}`}>Contact</Link>
              <a href="/Resume" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold block text-center mt-2">Resume</a>
            </div>
          )}
        </div>
    )
}