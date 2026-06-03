import Image from 'next/image';
import Link from 'next/link';

export default function SideNavigation({activePage}: {activePage: string}) {
    return (
        <aside className="w-80 hidden lg:flex flex-col border-r border-outline-variant/20 sticky top-24 h-[calc(100vh-6rem)] p-8">
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
              <h3 className="font-bold text-on-surface">Jr. Software Developer</h3>
              <p className="text-[10px] font-mono text-on-surface-variant tracking-wider">v1.9.0-stable</p>
            </div>
          </div>
          
          <nav className="flex flex-col gap-1 mb-auto">
            <Link href="/" className={`flex items-center gap-4 px-4 py-3 ${activePage === 'home' ? 'bg-primary-container text-primary border-r-4 border-primary' : 'text-on-surface-variant'} font-medium rounded-l-lg transition-all`}>
              <span className="material-symbols-outlined text-[20px]">home</span> Home
            </Link>
            <Link href="/AboutMe" className={`flex items-center gap-4 px-4 py-3 ${activePage === 'aboutMe' ? 'bg-primary-container text-primary border-r-4 border-primary' : 'text-on-surface-variant'} font-medium rounded-l-lg transition-all`}>
              <span className="material-symbols-outlined text-[20px]">person</span> About Me
            </Link>
            <Link href="/Projects" className={`flex items-center gap-4 px-4 py-3 ${activePage === 'projects' ? 'bg-primary-container text-primary border-r-4 border-primary' : 'text-on-surface-variant'} hover:bg-surface-container-low transition-all rounded-lg`}>
              <span className="material-symbols-outlined text-[20px]">reorder</span> Projects
            </Link>
            <Link href="/Experience" className={`flex items-center gap-4 px-4 py-3 ${activePage === 'experience' ? 'bg-primary-container text-primary border-r-4 border-primary' : 'text-on-surface-variant'} hover:bg-surface-container-low transition-all rounded-lg`}>
              <span className="material-symbols-outlined text-[20px]">work</span> Experience
            </Link>
            <Link href="/Contact" className={`flex items-center gap-4 px-4 py-3 ${activePage === 'contact' ? 'bg-primary-container text-primary border-r-4 border-primary' : 'text-on-surface-variant'} hover:bg-surface-container-low transition-all rounded-lg`}>
              <span className="material-symbols-outlined text-[20px]">mail</span> Contact
            </Link>
          </nav>

          <div className="space-y-4 pt-8 border-t border-outline-variant/10">
            <a href="/Contact" className="w-full py-4 bg-primary text-on-primary font-bold hover:brightness-110 transition-all rounded-xl shadow-lg shadow-primary/10 block text-center">
              Hire Me
            </a>
            <div className="flex justify-center gap-6 text-on-surface-variant">
               <span className="material-symbols-outlined hover:text-primary cursor-pointer">javascript</span>
               <span className="material-symbols-outlined hover:text-primary cursor-pointer">terminal</span>
            </div>
          </div>
        </aside>
    )
}