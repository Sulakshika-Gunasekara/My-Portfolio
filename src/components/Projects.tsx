import React, { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: 'Bicycle Sharing System',
    description:
      'Full-featured bike rental platform with real-time docking station availability, integrated payment processing, subscription plans, and an admin panel for inventory and station management.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
  },
  {
    title: 'E-Commerce Website',
    description:
      'Shopping platform enabling users to browse products, manage a cart, and submit feedback — delivering a seamless end-to-end shopping experience.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
  {
    title: 'Film Ticket Booking System',
    description:
      'Online ticket booking system allowing users to browse movies, select showtimes, and purchase tickets with a convenient, user-friendly interface.',
    technologies: ['Java', 'MySQL'],
  },
  {
    title: 'Learning Management System',
    description:
      'MERN-stack LMS with course creation, student enrollment, and progress tracking. Admin panel handles user and content management for structured learning.',
    technologies: ['Node JS', 'Express JS', 'MongoDB', 'React'],
  },
  {
    title: 'Boarding Place Finder App',
    description:
      'Mobile app for finding boarding places based on location and preferences, providing location-based search and an intuitive experience.',
    technologies: ['React Native', 'Firebase'],
  },
  {
    title: 'Smart Vehicle Parking System',
    description:
      'IoT-enabled parking system for real-time spot finding and reservation, combining mobile app, web dashboard, and Arduino hardware integration.',
    technologies: ['React Native', 'Firebase', 'React', 'Arduino'],
  },
  {
    title: 'Task Management App',
    description:
      'MERN-stack productivity app for creating, updating, and tracking tasks with categorization, deadlines, and progress monitoring.',
    technologies: ['Node JS', 'Express JS', 'MongoDB', 'React'],
  },
  {
    title: 'Hardware Management System',
    description:
      'Desktop application (Hardware Manager 1.0) for hardware inventory management with billing, invoice generation, and a real-time analytics dashboard.',
    technologies: ['C#', '.NET Framework', 'SSMS'],
  },
];

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-8 lg:px-16 py-24"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="section-title text-center">Projects</h2>
        <div className="section-divider"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="project-card"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Number tag */}
                <span className="project-number mb-2">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Title */}
                <h3 className="text-white font-bold text-base leading-snug mb-3"
                    style={{ letterSpacing: '-0.2px' }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-5">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover glow dot */}
                {hoveredIndex === i && (
                  <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
