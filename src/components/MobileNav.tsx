import React, { useState, useEffect, useRef } from 'react';

interface NavLink {
  href: string;
  label: string;
  icon: string;
}

const navLinks: NavLink[] = [
  { href: '#about',   label: 'About Me',   icon: 'bi-person-fill' },
  { href: '#skills',  label: 'Skills',     icon: 'bi-code-slash' },
  { href: '#projects',label: 'Projects',   icon: 'bi-grid-fill' },
  { href: '#contact', label: 'Contact Me', icon: 'bi-chat-dots-fill' },
];

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const closeDrawer = () => setIsOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeDrawer();
    setTimeout(() => {
      const el = document.getElementById('main-scroll');
      const target = document.querySelector(href);
      if (el && target) {
        el.scrollTo({ top: (target as HTMLElement).offsetTop, behavior: 'smooth' });
      }
    }, 300);
  };

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (isOpen && drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        closeDrawer();
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* FAB toggle */}
      <button
        className="mobile-fab"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation"
      >
        <i className="bi bi-list text-white text-2xl"></i>
      </button>

      {/* Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 z-[1050] backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`lg:hidden fixed top-0 left-0 h-full w-72 z-[1052] mobile-drawer transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4"
             style={{ borderBottom: '1px solid rgba(99,102,241,0.15)' }}>
          <span className="text-white font-bold text-base tracking-wide">Navigation</span>
          <button
            onClick={closeDrawer}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 px-5 py-5"
             style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="avatar-ring flex-shrink-0" style={{ width: 54, height: 54 }}>
            <img src="../assets/me.jpg" alt="Profile" 
                 className="object-cover border-2 border-[#0a0e1a]"
                 style={{ width: 48, height: 48, borderRadius: '50%', display: 'block' }} />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Sulakshika Gunasekara</p>
            <p className="text-slate-400 text-xs tracking-wide">Full-Stack Developer</p>
          </div>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="nav-link-item"
            >
              <i className={`bi ${link.icon} text-base`}
                 style={{ color: 'rgba(99,102,241,0.7)' }}></i>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* CV Button */}
        <div className="px-6 pt-4">
          <a href="/assets/resume.pdf" className="btn-cv" download>
            <i className="bi bi-download text-sm"></i>
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
