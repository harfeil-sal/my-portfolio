"use client";
import { useState, useRef, useEffect } from "react";

type Message = { id: string; role: "user" | "assistant"; content: string; timestamp: Date; };
const suggestedPrompts = ["What are your core skills?","Tell me about your projects","Are you open to remote work?","What stack do you use?"];

export default function ChatbotWidget() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ id: "0", role: "assistant", content: "Hello! I'm Harfeil's AI assistant. Ask me anything about his skills, experience, or availability.", timestamp: new Date() }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isTyping]);
  useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 300); }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now().toString(), role: "user", content: text, timestamp: new Date() }]);
    setInput(""); setIsTyping(true);
    await new Promise((r) => setTimeout(r, 1200 + Math.random() * 800));
    const lower = text.toLowerCase();
    let reply = "Great question! Feel free to explore the Projects and Experience sections, or reach out via the Contact form.";
    if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack")) reply = "My go-to stack: Next.js + TypeScript, Node.js / Laravel, MySQL / MongoDB, and Tailwind CSS. Also React Native for mobile.";
    else if (lower.includes("project") || lower.includes("work") || lower.includes("built")) reply = "Recent highlights: SRxAffinity (pharmacy analytics), Subdivision Mapping app, and CLM System for Sr. Cecilia's College!";
    else if (lower.includes("remote") || lower.includes("available") || lower.includes("hire")) reply = "Yes — available for remote roles. Based in Cebu, PH (UTC+8) but I adapt to client time zones.";
    else if (lower.includes("experience") || lower.includes("background")) reply = "Full-stack dev — React, Next.js, Node.js, React Native, MySQL, MongoDB, Docker, and cloud deployments.";
    setIsTyping(false);
    setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), role: "assistant", content: reply, timestamp: new Date() }]);
  };

  const formatTime = (d: Date) => d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  if (!mounted) return null;

  return (
    <>
      <style>{`
        @keyframes chatBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        .cb-dot { animation: chatBounce 0.9s ease-in-out infinite; }
      `}</style>

      <button onClick={() => setIsOpen(v => !v)} aria-label="Toggle chat"
        style={{ position:"fixed", bottom:28, right:28, zIndex:99999, width:56, height:56, borderRadius:"50%", background:"#3b82f6", color:"white", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 0 4px rgba(59,130,246,0.15),0 8px 32px rgba(59,130,246,0.4)", transform:isOpen?"rotate(45deg)":"rotate(0deg)", transition:"transform 0.3s ease" }}>
        {isOpen
          ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>}
      </button>

      <div style={{ position:"fixed", bottom:100, right:28, zIndex:99998, width:380, maxWidth:"calc(100vw - 56px)", display:"flex", flexDirection:"column", borderRadius:16, overflow:"hidden", border:"1px solid rgba(59,130,246,0.2)", boxShadow:"0 32px 80px rgba(0,0,0,0.7)", background:"#0d1117", transformOrigin:"bottom right", transform:isOpen?"scale(1)":"scale(0.92)", opacity:isOpen?1:0, pointerEvents:isOpen?"auto":"none", transition:"transform 0.25s ease,opacity 0.25s ease" }}>
        
        <div style={{ background:"#080d14", borderBottom:"1px solid rgba(59,130,246,0.12)", padding:"14px 16px", display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ position:"relative", width:38, height:38, borderRadius:"50%", background:"#0d1117", border:"1px solid rgba(59,130,246,0.3)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <span style={{ color:"#3b82f6", fontFamily:"monospace", fontWeight:700, fontSize:12 }}>HS</span>
            <span style={{ position:"absolute", bottom:1, right:1, width:9, height:9, background:"#22c55e", borderRadius:"50%", border:"2px solid #080d14" }}/>
          </div>
          <div style={{ flex:1 }}>
            <div style={{ color:"#f1f5f9", fontFamily:"monospace", fontWeight:600, fontSize:13 }}>Harfeil's Assistant</div>
            <div style={{ color:"#3b82f6", fontFamily:"monospace", fontSize:10, marginTop:4, textTransform:"uppercase", letterSpacing:"0.08em" }}>● online · v1.0.0-stable</div>
          </div>
          <span style={{ fontSize:9, fontFamily:"monospace", color:"#475569", border:"1px solid #1e3a5f", borderRadius:4, padding:"2px 6px", background:"#0d1117" }}>AI</span>
        </div>

        <div style={{ height:320, overflowY:"auto", padding:16, display:"flex", flexDirection:"column", gap:14 }}>
          {messages.map(msg => (
            <div key={msg.id} style={{ display:"flex", gap:8, flexDirection:msg.role==="user"?"row-reverse":"row", alignItems:"flex-start" }}>
              <div style={{ width:26, height:26, borderRadius:"50%", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", marginTop:2, background:msg.role==="assistant"?"#0d1117":"#1d4ed8", border:msg.role==="assistant"?"1px solid rgba(59,130,246,0.3)":"none", color:msg.role==="assistant"?"#3b82f6":"white" }}>
                {msg.role==="assistant"
                  ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                  : <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>}
              </div>
              <div style={{ maxWidth:"76%", display:"flex", flexDirection:"column", gap:3, alignItems:msg.role==="user"?"flex-end":"flex-start" }}>
                <div style={{ padding:"9px 13px", fontSize:13, lineHeight:1.65, borderRadius:14, background:msg.role==="assistant"?"#111827":"#1d4ed8", border:msg.role==="assistant"?"1px solid rgba(30,58,95,0.6)":"none", color:msg.role==="assistant"?"#cbd5e1":"white", borderTopLeftRadius:msg.role==="assistant"?3:14, borderTopRightRadius:msg.role==="user"?3:14 }}>{msg.content}</div>
                <span style={{ fontSize:9, color:"#334155", fontFamily:"monospace" }}>{formatTime(msg.timestamp)}</span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div style={{ display:"flex", gap:8 }}>
              <div style={{ width:26, height:26, borderRadius:"50%", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", background:"#0d1117", border:"1px solid rgba(59,130,246,0.3)", color:"#3b82f6" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
              </div>
              <div style={{ padding:"10px 14px", borderRadius:14, borderTopLeftRadius:3, background:"#111827", border:"1px solid rgba(30,58,95,0.6)", display:"flex", gap:5, alignItems:"center" }}>
                {[0,1,2].map(i => <span key={i} className="cb-dot" style={{ width:6, height:6, borderRadius:"50%", background:"#3b82f6", display:"block", animationDelay:`${i*180}ms` }}/>)}
              </div>
            </div>
          )}
          <div ref={messagesEndRef}/>
        </div>

        {messages.length === 1 && (
          <div style={{ padding:"4px 16px 12px", display:"flex", flexWrap:"wrap" as const, gap:6 }}>
            {suggestedPrompts.map(p => (
              <button key={p} onClick={() => sendMessage(p)}
                style={{ fontSize:10, fontFamily:"monospace", color:"#60a5fa", border:"1px solid rgba(30,58,95,0.8)", background:"rgba(30,58,95,0.15)", borderRadius:999, padding:"4px 10px", cursor:"pointer" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="#3b82f6"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(30,58,95,0.8)"; }}
              >{p}</button>
            ))}
          </div>
        )}

        <div style={{ height:1, background:"rgba(59,130,246,0.1)" }}/>

        <div style={{ background:"#080d14", padding:"12px 16px", display:"flex", gap:8 }}>
          <div style={{ flex:1, display:"flex", alignItems:"center", gap:8, background:"#0d1117", border:"1px solid rgba(30,58,95,0.8)", borderRadius:10, padding:"8px 12px" }}>
            <span style={{ color:"#1e3a5f", fontFamily:"monospace", fontSize:11, userSelect:"none", flexShrink:0 }}>&gt;_</span>
            <input ref={inputRef} value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMessage(input);} }}
              placeholder="Type a message..."
              style={{ flex:1, background:"transparent", color:"#e2e8f0", fontSize:13, fontFamily:"monospace", border:"none", outline:"none", caretColor:"#3b82f6" }}/>
          </div>
          <button onClick={() => sendMessage(input)} disabled={!input.trim()||isTyping}
            style={{ width:38, height:38, borderRadius:10, border:"none", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", cursor:input.trim()&&!isTyping?"pointer":"not-allowed", background:input.trim()&&!isTyping?"#3b82f6":"rgba(30,58,95,0.3)", color:input.trim()&&!isTyping?"white":"#334155", transition:"all 0.2s" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>

        <div style={{ background:"#080d14", padding:"5px 16px 8px", display:"flex", justifyContent:"space-between" }}>
          <span style={{ fontSize:9, fontFamily:"monospace", color:"#1e3a5f", textTransform:"uppercase", letterSpacing:"0.12em" }}>Harfeil · Portfolio AI</span>
          <span style={{ fontSize:9, fontFamily:"monospace", color:"#1e3a5f" }}>v1.0.0</span>
        </div>
      </div>
    </>
  );
}