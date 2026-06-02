'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TopNavigation from '../Components/Navigations/TopNavigation';
import SideNavigation from '../Components/Navigations/SideNavigation';
import Footer from '../Components/Footer/Footer';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit() {
    console.log('[contact] handleSubmit fired', { name, email, message });
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message.');
    }
  }

  const systemNodes = [
    { name: 'GitHub', icon: 'code', href: 'https://github.com/Harfeil' },
    { name: 'LinkedIn', icon: 'account_tree', href: 'https://ph.linkedin.com/in/harfeil-salmeron-959358377' },
    { name: 'Email Me Direct', icon: 'mail', href: 'mailto:harfeil.gequillo.salmeron@gmail.com' },
  ];

  return (
    <div className="min-h-screen bg-surface text-white">

      {/* ================= NAVBAR ================= */}
      <TopNavigation activePage="contact" />

      {isMobileMenuOpen && (
          <div className="md:hidden bg-surface-container-high border-b border-outline-variant/30 p-6 flex flex-col gap-4">
            <Link href="/" className="text-on-surface-variant">Home</Link>
            <Link href="/Projects" className="text-on-surface-variant">Projects</Link>
            <Link href="/Experience" className="text-primary font-bold">Experience</Link>
            <Link href="/Contact" className="text-on-surface-variant">Contact</Link>
            <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold">Resume</button>
          </div>
        )}


      {/* ================= PAGE CONTENT ================= */}
      <div className="flex flex-col lg:flex-row pt-20 lg:pt-24 max-w-[1440px] mx-auto">

        {/* ================= SIDEBAR ================= */}
        <SideNavigation activePage="contact" />

        {/* ================= MAIN ================= */}
        <main className="flex-1 p-6 sm:p-12 lg:py-12 lg:px-20 min-h-[calc(100vh-160px)]">

          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              Initialize Connection.
            </h1>

            <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl leading-relaxed">
              Whether it's a systems architecture challenge, a collaborative
              project, or a technical inquiry, my communication protocols are open.
            </p>
          </header>

          {/* Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-12 items-start">

            {/* Contact Form */}
            <div className="bg-zinc-900 rounded-[32px] border border-zinc-800 overflow-hidden shadow-2xl shadow-black/20">

              <div className="bg-zinc-800/50 px-6 py-4 border-b border-zinc-700 flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/40" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                    <div className="w-3 h-3 rounded-full bg-green-500/40" />
                  </div>

                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">
                      terminal
                    </span>
                    POST /api/v1/message
                  </div>
                </div>

                <div className="text-[10px] font-mono text-blue-400/50">
                  ENC: AES-256
                </div>
              </div>

              <form className="p-8 lg:p-12 space-y-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 pl-1">
                      Name
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={status === 'loading'}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 pl-1">
                      Email
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === 'loading'}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 pl-1">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    required
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={status === 'loading'}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none disabled:opacity-50"
                  />
                </div>

                {/* Success / Error feedback */}
                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-mono">
                    <span className="material-symbols-outlined text-base">check_circle</span>
                    Message transmitted successfully. I&apos;ll reply soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-mono">
                    <span className="material-symbols-outlined text-base">error</span>
                    {errorMsg}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4">

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />

                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      End-to-end encrypted
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full sm:w-auto bg-blue-500 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-blue-500/20 group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Transmitting...' : status === 'success' ? 'Sent!' : 'Send Message'}

                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      {status === 'loading' ? 'hourglass_top' : status === 'success' ? 'check' : 'send'}
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side */}
            <div className="space-y-6">

              {/* Nodes */}
              <div className="p-8 rounded-[32px] bg-zinc-900 border border-zinc-800">

                <h3 className="text-blue-400 font-bold mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    hub
                  </span>
                  System Nodes
                </h3>

                <div className="space-y-3">
                  {systemNodes.map((node) => (
                    <a
                      href={node.href}
                      target={node.href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      key={node.name}
                      className="w-full flex justify-between items-center p-5 rounded-2xl bg-zinc-800 border border-zinc-700 hover:border-blue-500/40 transition-all group"
                    >
                      <div className="flex items-center gap-4">

                        <span className="material-symbols-outlined text-zinc-400 group-hover:text-blue-400 transition-colors">
                          {node.icon}
                        </span>

                        <span className="font-medium text-sm lg:text-base">
                          {node.name}
                        </span>
                      </div>

                      <span className="material-symbols-outlined text-zinc-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all text-lg">
                        arrow_forward
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="p-8 rounded-[32px] bg-zinc-950 border border-zinc-800 relative overflow-hidden">

                <div className="flex items-center gap-2 text-blue-400 font-mono text-[10px] mb-4 tracking-[0.2em] uppercase">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  System Status: Active
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                  Currently accepting requests for high-performance backend
                  architecture and complex UI/UX engineering projects.
                </p>

                <div className="h-32 rounded-2xl overflow-hidden grayscale opacity-50 border border-zinc-700 relative hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
                    className="w-full h-full object-cover"
                    alt="Infrastructure"
                  />

                  <div className="absolute bottom-2 right-4 text-[8px] font-mono text-white/50 tracking-widest uppercase">
                    LOC: San Francisco, CA
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>

      {/* ================= FOOTER ================= */}
        <Footer />
    </div>
  );
}