import React from 'react';

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href: string;
  external: boolean;
  gradient: string;
}

const contactItems: ContactItem[] = [
  {
    icon: 'bi-telephone-fill',
    label: 'Phone',
    value: '+94 703 508 617',
    href: 'tel:+94703508617',
    external: false,
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(99,102,241,0.1))',
  },
  {
    icon: 'bi-envelope-fill',
    label: 'Email',
    value: 'sulakshikagunasekara2001@gmail.com',
    href: 'mailto:sulakshikagunasekara2001@gmail.com',
    external: false,
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.25), rgba(99,102,241,0.1))',
  },
  {
    icon: 'bi-linkedin',
    label: 'LinkedIn',
    value: 'sulakshika-gunasekara-2a0454283',
    href: 'https://www.linkedin.com/in/sulakshika-gunasekara-2a0454283/',
    external: true,
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.25), rgba(99,102,241,0.1))',
  },
  {
    icon: 'bi-github',
    label: 'GitHub',
    value: 'Sulakshika-Gunasekara',
    href: 'https://github.com/Sulakshika-Gunasekara',
    external: true,
    gradient: 'linear-gradient(135deg, rgba(167,139,250,0.25), rgba(99,102,241,0.1))',
  },
];

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center px-8 lg:px-16 py-24"
    >
      <div className="max-w-xl mx-auto w-full">
        <h2 className="section-title text-center">Contact Me</h2>
        <div className="section-divider"></div>

        {/* Subtitle */}
        <p className="text-slate-400 text-center text-sm mb-10 leading-relaxed">
          Got a project, opportunity, or just want to say hi?<br />
          I'd love to hear from you.
        </p>

        <div className="flex flex-col gap-3">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className="contact-card group"
            >
              {/* Icon */}
              <div
                className="contact-icon-wrap"
                style={{ background: item.gradient }}
              >
                <i className={`bi ${item.icon} text-xl text-white`}></i>
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-0.5 font-medium">
                  {item.label}
                </p>
                <p className="text-slate-200 text-sm font-medium truncate group-hover:text-white transition-colors">
                  {item.value}
                </p>
              </div>

              {/* Arrow */}
              <i className="bi bi-arrow-up-right text-slate-600 group-hover:text-indigo-400 transition-all duration-200 flex-shrink-0 text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
            </a>
          ))}
        </div>

        {/* CTA note */}
        <p className="text-center mt-10 text-slate-600 text-xs">
          Usually responds within 24 hours ✦
        </p>
      </div>
    </section>
  );
};

export default Contact;
