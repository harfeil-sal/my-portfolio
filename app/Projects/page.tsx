import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopNavigation from '../Components/Navigations/TopNavigation';
import SideNavigation from '../Components/Navigations/SideNavigation';
import Footer from '../Components/Footer/Footer';

export default function Projects() {
  const projects = [
    {
      title: "SRxAffinity",
      desc: "A business analytics and reporting platform that provides near real-time insights from SRx dispensing data for single and multi-site operations. Features customizable dashboards, filtering tools, and tailored reports to monitor workflows, billing, productivity, deliveries, staffing, and overall business performance. Designed to help businesses track trends, detect anomalies, and make data-driven operational decisions.",
      tags: ["React Native", ".NET", "Sybase"],
      image: "/srxaffinity.png",
      active: true,
      type: "Android",
      downloadUrl: "https://github.com/harfeil-sal/my-portfolio/releases/latest/download/SRxAffinity.apk",
      id: "01"
    },
    {
      title: "SRxAssist",
      desc: "A mobile-enabled pharmacy operations platform that provides real-time access to essential information and workflow management across facilities. Seamlessly integrates with the SRx system to streamline pharmacy workflows, improve operational efficiency, and enable responsive service through mobility and instant access to critical data.",
      tags: ["React Native", ".NET", "Sybase"],
      image: "/srxassist.png",
      active: true,
      type: "Android",
      downloadUrl: "https://github.com/harfeil-sal/my-portfolio/releases/latest/download/SRxAssist.apk",
      id: "02"
    },
    {
      title: "SRxLogistics",
      desc: "A mobile pharmacy logistics and inventory management application that uses barcode scanning to track drug supplies and monitor inventory in real time. Designed to improve inventory accuracy, streamline pharmacy logistics, and provide efficient stock monitoring across pharmacy operations.",
      tags: ["React Native", ".NET", "Sybase"],
      image: "/srxlogistics.png",
      active: true,
      type: "Android",
      downloadUrl: "https://github.com/harfeil-sal/my-portfolio/releases/latest/download/SRxLogistics.apk",
      id: "03"
    },
    {
      title: "MyRx",
      desc: "A mobile application for iOS and Android that improves communication between patients, pharmacies, and doctors. Enables convenient prescription refill management while helping pharmacies increase customer loyalty, improve medication adherence, and enhance overall operational efficiency.",
      tags: ["React Native", ".NET", "Sybase"],
      image: "/myrx.png",
      active: true,
      type: "Android",
      downloadUrl: "https://github.com/harfeil-sal/my-portfolio/releases/latest/download/MyRx.apk",
      id: "04"
    },
    {
      title: "(Project) Subdivision Mapping System",
      desc: "A full-stack web application for visualizing and managing residential lots in Deca Homes Minglanilla, Cebu. Features interactive map views, lot status tracking, and an admin interface for managing subdivision data in real time.",
      tags: ["MongoDB", "Express", "React", "Node.js", "TypeScript"],
      image: "/myrx.png",
      active: false,
      type: "None",
      id: "05"
    },
    {
      title: "(Capstone Project) Centralized Library Management System ",
      desc: "A web-based library platform built for Sr. Cecilia's College Inc. that centralizes book cataloging, borrowing records, and inventory tracking. Designed to simplify day-to-day library operations for both librarians and students.",
      tags: ["Django", "React.js", "MySQL"],
      image: "/myrx.png",
      active: false,
      type: "None",
      id: "06"
    },
    // {
    //   title: "Geo-Traffic Engine",
    //   desc: "Real-time geospatial processing engine for urban planning simulations and traffic flow optimization in smart city initiatives.",
    //   tags: ["Python", "WebGL", "K8s"],
    //   image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    //   active: false,
    //   id: "04"
    // },
    // {
    //   title: "Quantum Simulator",
    //   desc: "A high-fidelity simulator for quantum circuit design and error correction algorithms in sub-atomic environments.",
    //   tags: ["Julia", "Wasm", "Three.js"],
    //   image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    //   active: false,
    //   id: "05"
    // },
    // {
    //   title: "OmniStack Cloud",
    //   desc: "Self-healing infrastructure-as-code platform for automated multi-cloud deployment and cost management optimizations.",
    //   tags: ["Terraform", "React", "AWS"],
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    //   active: false,
    //   id: "06"
    // }
  ];

  return (
    <div className="min-h-screen bg-surface font-sans selection:bg-primary/30 text-on-surface">
      {/* 1. Fixed Top Navigation */}
      {/* <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="flex justify-between items-center px-12 py-4 max-w-[1440px] mx-auto">
          <div className="font-mono text-lg font-bold tracking-tighter text-secondary">SOFTWARE ENGINEER</div>
          <div className="flex gap-8 items-center">
            <div className="flex gap-8">
              <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">Home</Link>
              <Link href="/Projects" className="text-primary border-b-2 border-primary pb-1 font-medium">Projects</Link>
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

      <TopNavigation activePage="projects" />

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
            <Link href="/" className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-all rounded-lg">
              <span className="material-symbols-outlined text-[20px]">home</span> Home
            </Link>
            <Link href="/Projects" className="flex items-center gap-4 px-4 py-3 bg-primary-container text-primary border-r-4 border-primary font-medium rounded-l-lg transition-all">
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
        <SideNavigation activePage="projects" />

        {/* 3. Content Area */}
        <main className="flex-1 p-12 lg:p-20">
          <header className="mb-16">
            <h1 className="text-6xl font-bold tracking-tight mb-4">Projects Showcase</h1>
            <div className="w-24 h-1 bg-primary mb-8" />
            <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
              A curated selection of complex system architectures, full-stack implementations, and performance-optimized digital solutions.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group flex flex-col bg-surface-container-low rounded-[32px] border border-outline-variant/30 overflow-hidden hover:border-primary/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-60" />
                  {project.active && (
                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary/90 text-[10px] font-bold text-on-primary tracking-widest uppercase backdrop-blur-sm">
                      Active
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-on-surface group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 rounded bg-surface-bright text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10"> 
                    {/* <button className="flex items-center gap-2 text-xs font-bold text-primary hover:brightness-125 transition-all">
                      <span className="material-symbols-outlined text-sm">open_in_new</span> LIVE DEMO
                    </button>
                    <button className="flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-on-surface transition-all">
                      <span className="material-symbols-outlined text-sm">code</span> SOURCE CODE
                    </button> */}
                    {project.type === "None" ? (
                      <button className="flex items-center gap-2 text-xs font-bold text-primary hover:brightness-125 transition-all">
                    </button>) : (
                      <a href={project.downloadUrl || "#"}
                      target="_blank"
                      download 
                      rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-primary hover:brightness-125 transition-all">
                      <span className="material-symbols-outlined text-sm">{project.type == "Android" ? "download" : "open_in_new"}</span> {project.type == "Android" ? "Download APK" : "View Website"}
                    </a>
                    )}
                  </div> 
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

