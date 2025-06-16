import { motion, type Variants } from 'framer-motion'; // Add `Variants` import
import type { FC } from 'react';
import { ProjectType } from '../types';

interface ProjectCardProps {
  project: ProjectType;
}

// ✅ Type cardVariants as Variants to satisfy TypeScript
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // cubic‑bezier ≈ easeOut
    },
  },
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => (
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    variants={cardVariants}
    initial="hidden"             // Add this
    whileInView="show"          // And this
    viewport={{ once: true, amount: 0.2 }} // Optional scroll animation trigger
    whileHover={{ scale: 1.03 }}
    className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
  >
    <div className="relative group h-48 sm:h-64 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center
                      bg-blue-600/0 group-hover:bg-blue-600/30 transition-all duration-300">
        <div className="text-white opacity-0 group-hover:opacity-100
                        translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center">
          <span className="text-lg font-medium">{project.title}</span>
          <div className="mt-2 flex justify-center">
            <span className="px-4 py-2 rounded-full bg-white text-blue-600 text-sm font-medium">
              View&nbsp;Project
            </span>
          </div>
        </div>
      </div>
    </div>
  </motion.a>
);

export default ProjectCard;
