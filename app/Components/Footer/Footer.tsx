import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-outline-variant/10 py-10 px-12 bg-surface-dim">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-on-surface-variant font-mono text-sm">© 2026 Software Developer. Built with precision.</p>
          <div className="flex gap-10 text-on-surface-variant text-xs font-mono uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-primary transition-colors">Documentation</Link>
            <Link href="#" className="hover:text-primary transition-colors">Status</Link>
            <Link href="#" className="hover:text-primary transition-colors">Source</Link>
          </div>
        </div>
      </footer>
    )
}