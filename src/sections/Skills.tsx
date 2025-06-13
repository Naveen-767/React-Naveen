// import React from 'react';
// import SectionTitle from '../components/SectionTitle';
// import SkillBar from '../components/SkillBar';
// import { skills } from '../data';

// const Skills: React.FC = () => {
//   // Split skills into two columns
//   const midPoint = Math.ceil(skills.length / 2);
//   const leftColumnSkills = skills.slice(0, midPoint);
//   const rightColumnSkills = skills.slice(midPoint);

//   return (
//     <section id="skills" className="py-20 bg-white dark:bg-gray-800">
//       <div className="container mx-auto px-6">
//         <SectionTitle title="Skills" />
        
//         <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-8">
//           Professional Skills
//         </h3>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
//           <div className="space-y-4">
//             {leftColumnSkills.map((skill, index) => (
//               <SkillBar key={index} skill={skill} />
//             ))}
//           </div>
          
//           <div className="space-y-4">
//             {rightColumnSkills.map((skill, index) => (
//               <SkillBar key={index} skill={skill} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/types';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTitle title="Skills" />

        <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-10">
          Professional Skills
        </h3>

        {/* 5 × 4 grid on desktop, collapses neatly on smaller screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.slice(0, 20).map((skill, idx) => (
            <SkillCard key={idx} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



// // Skills.tsx
// import React, { useEffect, useRef, useState } from 'react';

// /* ------------------------------------------------------------------ */
// /* 1.  Type and data (brand colours + BoxIcons class names)            */
// /* ------------------------------------------------------------------ */
// type Skill = {
//   name: string;
//   icon: string;   // BoxIcons class (e.g. "bx bxl-react")
//   color: string;  // Brand hex
// };

// const skills: Skill[] = [
//   { name: 'HTML5',      icon: 'bx bxl-html5',         color: '#E34F26' },
//   { name: 'CSS3',       icon: 'bx bxl-css3',          color: '#1572B6' },
//   { name: 'JavaScript', icon: 'bx bxl-javascript',    color: '#F7DF1E' },
//   { name: 'React.js',   icon: 'bx bxl-react',         color: '#61DAFB' },
//   { name: 'GitHub',     icon: 'bx bxl-github',        color: '#181717' },
//   { name: 'Sass',       icon: 'bx bxl-sass',          color: '#CC6699' },
//   { name: 'Bootstrap',  icon: 'bx bxl-bootstrap',     color: '#7952B3' },
//   { name: 'Tailwind',   icon: 'bx bxl-tailwind-css',  color: '#06B6D4' },
//   { name: 'UX / UI',    icon: 'bx bxs-paint',         color: '#FF5722' },
//   { name: 'Figma',      icon: 'bx bxl-figma',         color: '#F24E1E' },
//   { name: 'MySQL',      icon: 'bx bxs-data',          color: '#00758F' },
// ];

// /* ------------------------------------------------------------------ */
// /* 2.  Single‑file SkillCard component (glass‑morphism)                */
// /* ------------------------------------------------------------------ */
// const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
//   const [show, setShow] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   // fade / scale in when the card first scrolls into view
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShow(true);
//           obs.disconnect();
//         }
//       },
//       { threshold: 0.25 }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`
//         relative overflow-hidden flex flex-col items-center justify-center
//         h-40 w-full sm:h-44 rounded-3xl p-6
//         transition-all duration-500
//         ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
//         hover:scale-105 group
//         /* glassmorphism core */
//         bg-white/10 dark:bg-white/5 backdrop-blur-xl
//         border border-white/30 dark:border-white/10
//         shadow-lg shadow-black/20
//       `}
//     >
//       {/* soft glare on hover */}
//       <div className="pointer-events-none absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-5" />

//       {/* brand‑coloured icon */}
//       <i
//         className={`${skill.icon} text-5xl mb-3 drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1`}
//         style={{ color: skill.color }}
//       />

//       {/* brand‑coloured label */}
//       <span
//         className="text-base font-semibold tracking-wide select-none"
//         style={{ color: skill.color }}
//       >
//         {skill.name}
//       </span>
//     </div>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* 3.  The page/section component                                      */
// /* ------------------------------------------------------------------ */
// const Skills: React.FC = () => {
//   return (
//     <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
//       <div className="container mx-auto px-6">
//         {/* simple heading (no external SectionTitle) */}
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 text-gray-800 dark:text-white">
//           Skills
//         </h2>
//         <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
//           Professional expertise &amp; toolset
//         </p>

//         {/* responsive grid: 2 ➜ 3 ➜ 5 columns */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//           {skills.map((skill) => (
//             <SkillCard key={skill.name} skill={skill} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
