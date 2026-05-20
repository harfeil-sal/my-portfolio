'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopNavigation from '../Components/Navigations/TopNavigation';
import SideNavigation from '../Components/Navigations/SideNavigation';

export default function Experience() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const experiences = [
    {
      title: "Jr. Software Engineer",
      company: "SuiteWorks Inc.",
      period: "2025 — PRESENT",
      icon: "dns",
      points: [
        "Developed Android applications for pharmacy management using React Native.",
        "Built Backend Services using .NET and Sybase.",
        "Built Backend Services using Repository Pattern for better code organization and maintainability.",
        "Automated CI/CD pipelines using GitHub Actions.",
        "Integrated Claude platform API Key for graph analysis features.",
        "Integrated Transafe API for payment processing."
      ]
    },
    // {
    //   title: "Full Stack Engineer",
    //   company: "Nexus Digital Systems",
    //   period: "2018 — 2021",
    //   icon: "layers",
    //   points: [
    //     "Developed a high-performance React dashboard consuming real-time WebSockets for crypto data.",
    //     "Optimized PostgreSQL queries reducing database load by 60% during peak user activity."
    //   ]
    // },
    {
      title: "Software Developer (Internship)",
      company: "Ezware Services Corporation",
      period: "2024 — 2025",
      icon: "code",
      points: [
        "Developed backend services for a mobile retailing application using PHP and MySQL.",
        "Ensured data integrity and efficient database design.",
        "Collaborated with the frontend team using Basic for Android (B4A) to deliver a seamless mobile experience.",
        "Gained hands-on experience in debugging, API integration."
      ]
    },
    {
      title: "Web Developer",
      company: "Sr. Cecilia's College Inc.",
      period: "2024 — 2025",
      icon: "code",
      points: [
        "Developed a centralized Library Management System using React.js, Django, and MySQL.",
        "Integrated Arduino devices for barcode scanning and RFID-based library entry monitoring.",
        "Implemented the Dewey Decimal System for book classification and search functionality.",
        "Deployed the application on DigitalOcean using Docker and Coolify, ensuring continuous availability and scalability.",
        "Collaborated with teammates to plan, design, and deploy the system successfully."
      ]
    }
  ];

  const skillGroups = [
    {
      name: "Frontend Core",
      icon: "html",
      color: "text-secondary",
      skills: ["React Js", "Next Js", "React Native", "CSS", "Material UI", "Javascript", "HTML", "Redux", "Context"]
    },
    {
      name: "Backend Core",
      icon: "terminal",
      color: "text-primary",
      skills: [".NET", "Sybase", "PHP", "MySQL", "Django", "Express", "Laravel", "Node.js"],
      highlight: true
    },
    {
      name: "Development Tools",
      icon: "cloud",
      color: "text-on-surface-variant",
      skills: ["Git", "Docker", "Vercel", "Postman", "Expo", "VS Code", "Cursor", "OpenAI", "Claude Platform", "Claude Code", "OpenAI API", "Claude API"]
    }
  ];

  return (
    <div className="min-h-screen bg-surface font-sans selection:bg-primary/30 text-on-surface">
      {/* 1. Responsive Top Navigation */}
      {/* <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="flex justify-between items-center px-6 lg:px-12 py-4 max-w-[1440px] mx-auto">
          <div className="font-mono text-lg font-bold tracking-tighter text-secondary">ARCHITECT.IO</div>
          
          <div className="hidden md:flex gap-8 items-center">
            <div className="flex gap-8">
              <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors text-sm lg:text-base">Home</Link>
              <Link href="/Projects" className="text-on-surface-variant hover:text-primary transition-colors text-sm lg:text-base">Projects</Link>
              <Link href="/Experience" className="text-primary border-b-2 border-primary pb-1 font-medium text-sm lg:text-base">Experience</Link>
              <Link href="/Contact" className="text-on-surface-variant hover:text-primary transition-colors text-sm lg:text-base">Contact</Link>
            </div>
            <div className="flex items-center gap-4 border-l border-outline-variant/30 pl-8 text-on-surface-variant">
               <span className="material-symbols-outlined hover:text-primary cursor-pointer text-sm">code</span>
               <span className="material-symbols-outlined hover:text-primary cursor-pointer text-sm">terminal</span>
               <button className="bg-primary text-on-primary px-5 py-2 rounded-md font-medium hover:brightness-110 transition-all shadow-lg shadow-primary/20 ml-2">
                Resume
              </button>
            </div>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

      </nav> */}

      <TopNavigation activePage="experience" />

      
      {isMobileMenuOpen && (
          <div className="md:hidden bg-surface-container-high border-b border-outline-variant/30 p-6 flex flex-col gap-4">
            <Link href="/" className="text-on-surface-variant">Homes</Link>
            <Link href="/Projects" className="text-on-surface-variant">Projects</Link>
            <Link href="/Experience" className="text-primary font-bold">Experience</Link>
            <Link href="/Contact" className="text-on-surface-variant">Contact</Link>
            <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold">Resume</button>
          </div>
        )}

      <div className="flex flex-col lg:flex-row pt-20 lg:pt-24 max-w-[1440px] mx-auto min-h-screen">
        
        {/* Persistent Sidebar */}
        {/* <aside className="w-80 hidden lg:flex flex-col border-r border-outline-variant/20 sticky top-24 h-[calc(100vh-6rem)] p-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-xl bg-surface-bright overflow-hidden border border-outline-variant ring-4 ring-surface-container-low">
              <Image src="/my_profile_pic.png" alt="Harfeil Salmeron" width={56} height={56} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-on-surface">Jr. Software Engineer</h3>
              <p className="text-[10px] font-mono text-on-surface-variant tracking-wider">v1.0.0-stable</p>
            </div>
          </div>
          
          <nav className="flex flex-col gap-1 mb-auto">
            <Link href="/" className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-all rounded-lg">
              <span className="material-symbols-outlined text-[20px]">home</span> Home
            </Link>
            <Link href="/Projects" className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-all rounded-lg">
              <span className="material-symbols-outlined text-[20px]">reorder</span> Projects
            </Link>
            <Link href="/Experience" className="flex items-center gap-4 px-4 py-3 bg-primary-container text-primary border-r-4 border-primary font-medium rounded-l-lg transition-all">
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

        <SideNavigation activePage="experience" />

        {/* Content Area */}
        <main className="flex-1 p-6 sm:p-12 lg:p-20">
          <header className="mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-on-surface">My Career Path</h1>
            <div className="w-20 lg:w-24 h-1 bg-primary mb-6 lg:mb-8" />
            <p className="text-lg lg:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
              Detailed record of system architectures, complex implementations, and technical milestones achieved across industry-leading platforms.
            </p>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-12">
            
            {/* Timeline */}
            <div className="space-y-12 relative before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-px before:bg-outline-variant/20 sm:before:left-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-12 sm:pl-20">
                  <div className="absolute left-1 sm:left-3.5 top-1.5 w-5 h-5 rounded-full bg-surface border-2 border-outline-variant flex items-center justify-center z-10 group">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="absolute left-1.5 sm:left-4 top-1 w-4 h-4 rounded-full bg-primary/20 animate-ping" />
                  
                  <div className="bg-surface-container-low p-6 lg:p-10 rounded-[24px] lg:rounded-[32px] border border-outline-variant/30 hover:border-primary/40 transition-all duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-on-surface mb-2">{exp.title}</h3>
                        <p className="text-primary font-medium flex items-center gap-2">
                           <span className="material-symbols-outlined text-sm">business</span> {exp.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded bg-surface-bright text-[10px] font-mono text-on-surface-variant uppercase tracking-widest border border-outline-variant/10">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-4">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-4 text-on-surface-variant leading-relaxed">
                          <span className="material-symbols-outlined text-primary text-lg flex-shrink-0">subdirectory_arrow_right</span>
                          <span className="text-sm lg:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Stats & Skills */}
            <div className="space-y-6">
              {skillGroups.map((group, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 lg:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 ${group.highlight ? 'border-l-4 border-l-primary' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`material-symbols-outlined ${group.color}`}>{group.icon}</span>
                    <h4 className="text-[10px] font-mono text-on-surface-variant uppercase tracking-[0.2em]">{group.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span key={skill} className="px-3 py-1.5 rounded-lg bg-surface-bright border border-outline-variant/10 text-xs font-medium text-on-surface-variant hover:text-on-surface transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* <div className="p-8 rounded-[32px] bg-surface-container-lowest border border-outline-variant/30 overflow-hidden relative">
                <h4 className="text-xs font-mono text-secondary mb-6 tracking-widest uppercase">Active Certifications</h4>
                <div className="space-y-4">
                   <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-bright/30 border border-outline-variant/10">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">verified</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">AWS Solutions Architect</p>
                        <p className="text-[10px] text-on-surface-variant uppercase font-mono">Professional — 2023</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-bright/30 border border-outline-variant/10">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-secondary text-xl">verified</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">CKA: Kubernetes Admin</p>
                        <p className="text-[10px] text-on-surface-variant uppercase font-mono">CNCF — 2022</p>
                      </div>
                   </div>
                </div>
              </div> */}
            </div>

          </div>
        </main>
      </div>

      <footer className="border-t border-outline-variant/10 py-10 px-6 lg:px-12 bg-surface-dim">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-on-surface-variant font-mono text-sm text-center md:text-left">© 2024 System Architect. Built with precision.</p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 text-on-surface-variant text-[10px] lg:text-xs font-mono uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-primary transition-colors">Documentation</Link>
            <Link href="#" className="hover:text-primary transition-colors">Status</Link>
            <Link href="#" className="hover:text-primary transition-colors">Source</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}