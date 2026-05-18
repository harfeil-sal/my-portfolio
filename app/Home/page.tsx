import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopNavigation from '../Components/Navigations/TopNavigation';
import SideNavigation from '../Components/Navigations/SideNavigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-surface font-sans selection:bg-primary/30 text-on-surface">
      {/* 1. Fixed Top Navigation */}
      {/* <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="flex justify-between items-center px-12 py-4 max-w-[1440px] mx-auto">
          <div className="font-mono text-lg font-bold tracking-tighter text-secondary">SOFTWARE ENGINEER</div>
          <div className="flex gap-8 items-center">
            <div className="flex gap-8">
              <Link href="/" className="text-primary border-b-2 border-primary pb-1 font-medium">Home</Link>
              <Link href="/Projects" className="text-on-surface-variant hover:text-primary transition-colors">Projects</Link>
              <Link href="/Experience" className="text-on-surface-variant hover:text-primary transition-colors">Experience</Link>
              <Link href="/Contact" className="text-on-surface-variant hover:text-primary transition-colors">Contact</Link>
            </div>
            <div className="flex items-center gap-4 border-l border-outline-variant/30 pl-8 text-on-surface-variant">
               <span className="material-symbols-outlined hover:text-primary cursor-pointer text-sm">code</span>
               <span className="material-symbols-outlined hover:text-primary cursor-pointer text-sm">terminal</span>
               <button className="bg-primary text-on-primary px-5 py-2 rounded-md font-medium hover:brightness-110 transition-all shadow-lg shadow-primary/20 ml-2">
                Resume
              </button>
            </div>
          </div>
        </div>
      </nav> */}
      <TopNavigation activePage="home" />

      {/* 2. Main Layout Shell */}
      <div className="flex pt-24 max-w-[1440px] mx-auto min-h-screen">
        
        {/* Persistent Sidebar */}
        {/* <aside className="w-80 hidden lg:flex flex-col border-r border-outline-variant/20 sticky top-24 h-[calc(100vh-6rem)] p-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-xl bg-surface-bright overflow-hidden border border-outline-variant ring-4 ring-surface-container-low">
              <Image
                src="/my_profile_pic.png"
                alt="Harfeil Salmeron"
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-on-surface">Jr. Software Engineer</h3>
              <p className="text-[10px] font-mono text-on-surface-variant tracking-wider">v1.0.0-stable</p>
            </div>
          </div>
          
          <nav className="flex flex-col gap-1 mb-auto">
            <Link href="/" className="flex items-center gap-4 px-4 py-3 bg-primary-container text-primary border-r-4 border-primary font-medium rounded-l-lg transition-all">
              <span className="material-symbols-outlined text-[20px]">home</span> Home
            </Link>
            <Link href="/Projects" className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-all rounded-lg">
              <span className="material-symbols-outlined text-[20px]">reorder</span> Projects
            </Link>
            <Link href="/Experience" className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-all rounded-lg">
              <span className="material-symbols-outlined text-[20px]">work</span> Experience
            </Link>
            <Link href="/Contact" className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-all rounded-lg">
              <span className="material-symbols-outlined text-[20px]">mail</span> Contact
            </Link>
          </nav>

          <div className="space-y-4 pt-8 border-t border-outline-variant/10">
            <button className="w-full py-4 bg-primary text-on-primary font-bold hover:brightness-110 transition-all rounded-xl shadow-lg shadow-primary/10">
              Hire Me
            </button>
            <div className="flex justify-center gap-6 text-on-surface-variant">
               <span className="material-symbols-outlined hover:text-primary cursor-pointer">javascript</span>
               <span className="material-symbols-outlined hover:text-primary cursor-pointer">terminal</span>
            </div>
          </div>
        </aside> */}

        <SideNavigation activePage="home" />

        {/* 3. Content Area */}
        <main className="flex-1 p-12 lg:p-20">
          <header className="mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-bright/50 border border-outline-variant/30 text-[10px] font-mono text-secondary mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> Available for new opportunities
            </div>
            <h1 className="text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Hi, I'm <span className="text-secondary">Harfeil Salmeron.</span> I <br />
              create resilient, reliable, and scalable <span className="text-primary italic">software solutions.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Junior Full-Stack Engineer specializing in high-performance distributed systems, cloud-native architecture, and crafting fluid user experiences with technical precision.
            </p>
            <div className="flex gap-4 mt-10">
              <Link href="/Projects" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:brightness-110 transition-all shadow-xl shadow-primary/20">
                View Projects <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <button className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:bg-surface-container-high transition-all">
                <span className="material-symbols-outlined text-on-surface-variant">terminal</span>
              </button>
              <button className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:bg-surface-container-high transition-all">
                <span className="material-symbols-outlined text-on-surface-variant">download</span>
              </button>
            </div>
          </header>

          <section className="space-y-12">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold">Core Infrastructure</h2>
              <div className="flex-1 h-px bg-outline-variant/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Frontend Development', icon: 'code', tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'Javascript', 'HTML', 'CSS', 'React Native'], id: '01' },
                { title: 'Backend Development', icon: 'database', tags: ['Node.js', '.NET', 'Django', 'Express', 'Laravel', 'PHP', 'MySQL', 'Sybase', 'MongoDB'], id: '02' },
                { title: 'Development Tools', icon: 'build', tags: ['Github', 'Git', 'Docker', 'Vercel', 'Material UI', 'Redis', 'Figma', 'MS Office', 'Bootstrap', 'VS Code', 'Claude Code', 'Cursor', 'OpenAI', 'Claude Platform', 'Postman', 'Expo'], id: '03' }
              ].map((skill) => (
                <div key={skill.id} className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all group">
                  <div className="flex justify-between items-start mb-8">
                    <span className="material-symbols-outlined text-secondary text-3xl">{skill.icon}</span>
                    <span className="text-[10px] font-mono text-on-surface-variant">{skill.id}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 rounded bg-surface-bright text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <footer className="border-t border-outline-variant/10 py-10 px-12 bg-surface-dim">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-on-surface-variant font-mono text-sm">© 2025 System Architect. Built with precision.</p>
          <div className="flex gap-10 text-on-surface-variant text-xs font-mono uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-primary transition-colors">Documentation</Link>
            <Link href="#" className="hover:text-primary transition-colors">Status</Link>
            <Link href="#" className="hover:text-primary transition-colors">Source</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}