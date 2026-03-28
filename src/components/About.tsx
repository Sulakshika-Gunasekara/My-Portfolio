import React from 'react';

const highlights = [
  { icon: 'bi-mortarboard-fill', label: 'BSc. Computer Science' },
  { icon: 'bi-globe2', label: 'Full-Stack Developer' },
  { icon: 'bi-palette-fill', label: 'UI/UX Enthusiast' },
  { icon: 'bi-cpu-fill', label: 'ML Explorer' },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-8 lg:px-16 py-24"
    >
      <div className="max-w-3xl mx-auto w-full animate-fade-in-up">

        {/* Greeting tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
             style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', color: '#a5b4fc' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Open to Opportunities
        </div>

        <h1 className="section-title text-5xl lg:text-6xl mb-2">
          About Me
        </h1>
        <div className="section-divider" style={{ margin: '0 0 2rem' }}></div>

        {/* Highlight chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {highlights.map((h) => (
            <span key={h.label} className="highlight-chip">
              <i className={`bi ${h.icon}`}></i>
              {h.label}
            </span>
          ))}
        </div>

        {/* Bio card */}
        <div className="about-card p-8 space-y-4">
          <p className="text-slate-300 text-base leading-relaxed">
            Hello! I'm{' '}
            <span className="font-bold text-white">Sulakshika Sandamini Gunasekara</span> — a 4th year
            undergraduate at the <span className="text-indigo-300">University of Kelaniya</span> pursuing
            a <span className="text-indigo-300">BSc.(Hons) in Electronics and Computer Science</span>,
            specializing in Computer Science.
          </p>
          <p className="text-slate-300 text-base leading-relaxed">
            I'm passionate about <span className="text-cyan-300">web development</span>,{' '}
            <span className="text-cyan-300">machine learning</span>, and{' '}
            <span className="text-cyan-300">UI/UX design</span>. I love exploring new frameworks,
            creating digital artworks, and building products that make a difference.
          </p>
          <p className="text-slate-300 text-base leading-relaxed">
            I specialize in <span className="text-pink-300">full-stack development</span> with hands-on
            experience across the entire stack — from crafting pixel-perfect frontends to architecting
            scalable backend systems. I'm eager to collaborate with like-minded innovators and contribute
            to impactful, real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
