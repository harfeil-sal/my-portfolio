"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopNavigation from '../Components/Navigations/TopNavigation';
import SideNavigation from '../Components/Navigations/SideNavigation';
import Footer from '../Components/Footer/Footer';

const featuredProjects = [
  {
    id: '01',
    title: 'SRxAffinity',
    description:
      'Business analytics platform delivering near real-time insights from pharmacy dispensing data. Features customizable dashboards and tailored reports to monitor billing, productivity, staffing, and operational trends across single and multi-site operations.',
    tags: ['React Native', '.NET', 'Sybase'],
    demo: 'https://github.com/harfeil-sal/my-portfolio/releases/latest/download/app-release.zip',
    github: '#',
    status: 'Live',
  },
  {
    id: '02',
    title: 'Subdivision Mapping',
    description:
      'Full-stack web app for visualizing and managing residential lots in Deca Homes Minglanilla, Cebu. Built with the MERN stack and TypeScript, featuring interactive map views, lot status tracking, and a real-time admin interface.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript'],
    demo: '#',
    github: '#',
    status: '',
  },
  {
    id: '03',
    title: 'CLM System',
    description:
      'Centralized Library Management System built for Sr. Cecilia\'s College Inc. Integrated Arduino barcode scanning and RFID-based entry monitoring, implemented the Dewey Decimal System for book classification, and deployed on DigitalOcean via Docker and Coolify.',
    tags: ['Django', 'React.js', 'MySQL', 'Docker'],
    demo: '#',
    github: '#',
    status: '',
  },
];

const skills = [
  {
    id: '01',
    title: 'Frontend Development',
    icon: 'code',
    tags: [
      { name: 'React.js', level: 4 },
      { name: 'Next.js', level: 4 },
      { name: 'TypeScript', level: 4 },
      { name: 'Tailwind CSS', level: 4 },
      { name: 'JavaScript', level: 4 },
      { name: 'React Native', level: 4 },
      { name: 'Vue.js', level: 3 },
      { name: 'HTML', level: 4 },
      { name: 'CSS', level: 4 },
    ],
  },
  {
    id: '02',
    title: 'Backend Development',
    icon: 'database',
    tags: [
      { name: 'Node.js', level: 4 },
      { name: 'Laravel', level: 4 },
      { name: '.NET', level: 4 },
      { name: 'Express', level: 4 },
      { name: 'MySQL', level: 4 },
      { name: 'MongoDB', level: 3 },
      { name: 'Django', level: 3 },
      { name: 'PHP', level: 4 },
      { name: 'Sybase', level: 3 },
    ],
  },
  {
    id: '03',
    title: 'Development Tools',
    icon: 'build',
    tags: [
      { name: 'Git / GitHub', level: 4 },
      { name: 'Docker', level: 3 },
      { name: 'Figma', level: 4 },
      { name: 'Postman', level: 5 },
      { name: 'VS Code', level: 5 },
      { name: 'Vercel', level: 4 },
      { name: 'Expo', level: 4 },
      { name: 'Redis', level: 3 },
      { name: 'Claude Code', level: 4 },
      { name: 'Arduino', level: 3 },
      { name: 'ChatGTP', level: 4 },
    ],
  },
  {
    id: '04',
    title: 'No Code / Low Code Development',
    icon: 'settings',
    tags: [
      { name: 'Bubble', level: 3 },
      { name: 'Airtable', level: 3 },
      { name: 'Glide', level: 3 },
      { name: 'Retool', level: 3 }
    ],
  },
];

// Dot rating component
const RatingDots = ({ level }: { level: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <span
        key={i}
        className={`w-1 h-1 rounded-full ${
          i <= level ? 'bg-primary' : 'bg-outline-variant/30'
        }`}
      />
    ))}
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-surface font-sans selection:bg-primary/30 text-on-surface">
      <TopNavigation activePage="home" />

      {/* 2. Main Layout Shell */}
      <div className="flex pt-24 max-w-[1440px] mx-auto min-h-screen">
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
            Based in Cebu, PH. I build full-stack web and mobile applications
            with a focus on performance and maintainability. Currently open to
            remote roles and interesting collaborations.
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


          {/* Core Infrastructure */}
          <section className="space-y-12 mb-20">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold">Core Infrastructure</h2>
              <div className="flex-1 h-px bg-outline-variant/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all group"
                >
                  <div className="flex justify-between items-start mb-8">
                    <span className="material-symbols-outlined text-secondary text-3xl">
                      {skill.icon}
                    </span>
                    <span className="text-[10px] font-mono text-on-surface-variant">{skill.id}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-6">{skill.title}</h3>
                  <div className="flex flex-col gap-3">
                    {skill.tags.map((tag) => (
                      <div key={tag.name} className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-on-surface-variant uppercase tracking-wider">
                          {tag.name}
                        </span>
                        <RatingDots level={tag.level} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Featured Projects ── */}
          <section className="space-y-12">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <div className="flex-1 h-px bg-outline-variant/10 w-20" />
              </div>
              <Link
                href="/Projects"
                className="flex items-center gap-1 text-xs font-mono text-primary uppercase tracking-widest hover:brightness-125 transition-all"
              >
                View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all group"
                >
                  {/* Header row */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-mono text-on-surface-variant">{project.id}</span>
                    {project.status == "Live" ? (
                      <span
                      className={`px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-widest border ${
                        project.status === 'Live'
                          ? 'border-secondary/40 text-secondary bg-secondary/10'
                          : 'border-primary/40 text-primary bg-primary/10'
                      }`}
                    >
                      {project.status}
                    </span>
                    ) : ""}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded bg-surface-bright text-[10px] font-mono text-on-surface-variant uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
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
