import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = document.getElementById('main-scroll');
    if (!el) return;
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const progress = scrollHeight > clientHeight
        ? (scrollTop / (scrollHeight - clientHeight)) * 100
        : 0;
      setScrollProgress(progress);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Animated background */}
      <div className="portfolio-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Layout wrapper */}
      <div className="relative z-10 flex min-h-screen">

        {/* Desktop Sidebar */}
        <Sidebar />

        {/* Mobile Nav */}
        <MobileNav />

        {/* Main content */}
        <main
          id="main-scroll"
          className="flex-1 lg:ml-[280px] h-screen overflow-y-auto"
        >
          {/* Mobile profile header */}
          <div className="lg:hidden flex flex-col items-center pt-20 pb-6 px-6">
            <div className="avatar-ring mb-3" style={{ width: 106, height: 106, flexShrink: 0 }}>
              <img
                src="/assets/me.jpg"
                alt="Profile"
                className="object-cover border-2 border-[#0a0e1a]"
                style={{ width: 100, height: 100, borderRadius: '50%', display: 'block' }}
              />
            </div>
            <p className="font-bold text-lg text-white font-mono tracking-wide">
              Sulakshika Gunasekara
            </p>
            <p className="text-slate-400 text-sm mt-1">Full-Stack Developer</p>
          </div>

          <About />
          <Skills />
          <Projects />
          <Contact />

          {/* Footer */}
          <footer className="text-center py-8 text-slate-500 text-sm border-t border-white/5">
            © {new Date().getFullYear()} Sulakshika Sandamini Gunasekara. All rights reserved.
          </footer>
        </main>
      </div>
    </>
  );
};

export default App;
