'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TopNavigation({activePage}: {activePage: string}) {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="flex justify-between items-center px-12 py-4 max-w-[1440px] mx-auto">
          <div className="font-mono text-lg font-bold tracking-tighter text-secondary">SOFTWARE ENGINEER</div>
          <div className="flex gap-8 items-center">
            <div className="flex gap-8">
              <Link href="/" className={` font-medium ${activePage === 'home' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`}>Home</Link>
              <Link href="/AboutMe" className={`text-on-surface-variant hover:text-primary transition-colors ${activePage === 'aboutMe' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`}>About Me</Link>
              <Link href="/Projects" className={`text-on-surface-variant hover:text-primary transition-colors ${activePage === 'projects' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`}>Projects</Link>
              <Link href="/Experience" className={`text-on-surface-variant hover:text-primary transition-colors ${activePage === 'experience' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`}>Experience</Link>
              <Link href="/Contact" className={`text-on-surface-variant hover:text-primary transition-colors ${activePage === 'contact' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`}>Contact</Link>
            </div>
            <div className="flex items-center gap-4 border-l border-outline-variant/30 pl-8 text-on-surface-variant">
               <span className="material-symbols-outlined hover:text-primary cursor-pointer text-sm">code</span>
               <span className="material-symbols-outlined hover:text-primary cursor-pointer text-sm">terminal</span>
               <a href="/Resume" className="bg-primary text-on-primary px-5 py-2 rounded-md font-medium hover:brightness-110 transition-all shadow-lg shadow-primary/20 ml-2 block text-center">
                Resume
              </a>

              <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface-container-high border-b border-outline-variant/30 p-6 flex flex-col gap-4">
            <Link href="/" className="text-on-surface-variant">Home</Link>
            <Link href="/AboutMe" className="text-on-surface-variant">About Me</Link>
            <Link href="/Projects" className="text-on-surface-variant">Projects</Link>
            <Link href="/Experience" className="text-primary font-bold">Experience</Link>
            <Link href="/Contact" className="text-on-surface-variant">Contact</Link>
            <a href="/Resume" className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold block text-center">Resume</a>
          </div>
        )}

      </nav>
    )
}