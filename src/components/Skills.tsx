import React from 'react';

interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  dotColor: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    icon: 'bi-code-slash',
    color: 'rgba(99,102,241,0.15)',
    dotColor: '#a5b4fc',
    skills: ['HTML', 'JavaScript', 'CSS', 'PHP', 'Java', 'C#'],
  },
  {
    category: 'Frameworks',
    icon: 'bi-layers-fill',
    color: 'rgba(6,182,212,0.12)',
    dotColor: '#67e8f9',
    skills: ['Spring Boot', 'React Native', 'NodeJS'],
  },
  {
    category: 'Database',
    icon: 'bi-server',
    color: 'rgba(236,72,153,0.12)',
    dotColor: '#f9a8d4',
    skills: ['MySQL', 'MongoDB', 'Firebase'],
  },
  {
    category: 'Tools',
    icon: 'bi-tools',
    color: 'rgba(245,158,11,0.12)',
    dotColor: '#fcd34d',
    skills: ['Git', 'GitHub'],
  },
  {
    category: 'Design',
    icon: 'bi-palette-fill',
    color: 'rgba(167,139,250,0.12)',
    dotColor: '#c4b5fd',
    skills: ['Figma', 'Blender'],
  },
  {
    category: 'Cloud',
    icon: 'bi-cloud-fill',
    color: 'rgba(52,211,153,0.12)',
    dotColor: '#6ee7b7',
    skills: ['AWS'],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center px-8 lg:px-16 py-24"
    >
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="section-title text-center">Skills</h2>
        <div className="section-divider"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="skill-category-card p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: group.color, border: `1px solid ${group.dotColor}30` }}
                >
                  <i className={`bi ${group.icon} text-base`} style={{ color: group.dotColor }}></i>
                </div>
                <h3 className="text-white font-semibold text-sm tracking-wide">
                  {group.category}
                </h3>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    <span
                      className="skill-dot"
                      style={{ background: group.dotColor }}
                    ></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
