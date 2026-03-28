import React from 'react';

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

const Sidebar: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById('main-scroll');
    const target = document.querySelector(href);
    if (el && target) {
      el.scrollTo({ top: (target as HTMLElement).offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[280px] z-[1000] flex-col sidebar-glass">
      {/* Profile area */}
      <div className="flex flex-col items-center pt-10 pb-8 px-6 border-b border-white/5">
        {/* Spinning gradient ring around avatar */}
        <div className="avatar-ring mb-4" style={{ width: 116, height: 116, flexShrink: 0 }}>
          <img
            src="/assets/me.jpg"
            alt="Profile Picture"
            className="object-cover border-[3px] border-[#0a0e1a]"
            style={{ width: 110, height: 110, borderRadius: '50%', display: 'block' }}
          />
        </div>
        <h2 className="sidebar-name text-lg font-bold text-center leading-tight">
          Sulakshika Gunasekara
        </h2>
        <p className="text-slate-400 text-xs mt-1 tracking-widest uppercase">
          Full-Stack Developer
        </p>

        {/* Social quick-links */}
        <div className="flex gap-3 mt-4">
          {[
            { href: 'https://github.com/Sulakshika-Gunasekara', icon: 'bi-github' },
            { href: 'https://www.linkedin.com/in/sulakshika-gunasekara-2a0454283/', icon: 'bi-linkedin' },
            { href: 'mailto:sulakshikagunasekara2001@gmail.com', icon: 'bi-envelope-fill' },
          ].map((s) => (
            <a
              key={s.icon}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400
                         hover:text-white transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <i className={`bi ${s.icon} text-base`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 px-4 py-6 flex-grow">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="nav-link-item"
          >
            <i className={`bi ${link.icon} text-base`}
               style={{ color: 'rgba(99,102,241,0.7)' }}></i>
            <span>{link.label}</span>
          </a>
        ))}
      </nav>

      {/* CV Button */}
      <div className="px-6 pb-8">
        <a
          href="/assets/resume.pdf"
          className="btn-cv"
          download
        >
          <i className="bi bi-download text-sm"></i>
          Download CV
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
