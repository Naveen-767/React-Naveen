// import React, { useRef, useEffect, useState } from 'react';
// import { SkillType } from '../types';

// interface SkillCardProps {
//   skill: SkillType;
// }

// const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           obs.disconnect();
//         }
//       },
//       { threshold: 0.2 }
//     );
//     if (cardRef.current) obs.observe(cardRef.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-md
//                   bg-white/80 dark:bg-gray-800/80 backdrop-blur
//                   transition transform duration-500
//                   ${visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
//                   hover:shadow-lg hover:-translate-y-1`}
//     >
//       {/* big icon */}
//       <i className={`${skill.icon} text-5xl text-blue-600 dark:text-blue-400 mb-3`}></i>
//       {/* medium text */}
//       <span className="text-lg font-medium text-gray-800 dark:text-gray-100 tracking-wide">
//         {skill.name}
//       </span>
//     </div>
//   );
// };

// export default SkillCard;
// import React, { useEffect, useRef, useState } from 'react';
// import { SkillType } from '../types';

// interface SkillCardProps {
//   skill: SkillType;
// }

// const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
//   const [visible, setVisible] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);

//   /* fade / scale in when scrolled into view */
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           obs.disconnect();
//         }
//       },
//       { threshold: 0.2 }
//     );
//     if (cardRef.current) obs.observe(cardRef.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       /* wrapper gives us the gradient “border” */
//       className={`
//         relative p-[2px] rounded-2xl bg-animated-gradient
//         transition-transform duration-500
//         ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
//         hover:scale-105
//       `}
//     >
//       {/* inner panel */}
//       <div
//         className={`
//           flex flex-col items-center justify-center
//           bg-white/80 dark:bg-gray-900/80 backdrop-blur
//           rounded-2xl px-6 py-8 shadow-md
//           transition transform duration-500
//           group-hover:-rotate-1
//         `}
//       >
//         {/* LARGE icon with its own hover wiggle */}
//         <i
//           className={`
//             ${skill.icon}
//             text-5xl text-white drop-shadow-md mb-4
//             transition-transform duration-300
//             hover:scale-110 hover:-rotate-6
//           `}
//         />
//         <span className="text-lg font-semibold text-gray-800 dark:text-gray-100 tracking-wide">
//           {skill.name}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default SkillCard;

// import React, { useEffect, useRef, useState } from 'react';
// import { SkillType } from '../types';

// interface SkillCardProps {
//   skill: SkillType;
// }

// const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
//   const [show, setShow] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   /*  Fade / scale in once on scroll  */
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
//         relative overflow-hidden
//         flex flex-col items-center justify-center
//         h-40 w-full sm:h-44
//         rounded-3xl p-6
//         transition-all duration-500
//         ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
//         hover:scale-105
//         group
//         /* glass core */
//         bg-white/10 dark:bg-white/5
//         backdrop-blur-xl
//         border border-white/30 dark:border-white/10
//         shadow-lg shadow-black/20
//       `}
//     >
//       {/* subtle radial highlight */}
//       <div className="pointer-events-none absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-5" />

//       {/* ICON */}
//       <i
//         className={`
//           ${skill.icon}
//           text-5xl mb-3
//           text-white drop-shadow-sm
//           transition-transform duration-300
//           group-hover:-translate-y-1
//         `}
//       />

//       {/* NAME */}
//       <span className="text-base font-semibold text-white tracking-wide select-none">
//         {skill.name}
//       </span>
//     </div>
//   );
// };

// export default SkillCard;


/* SkillCard.tsx (glassmorphism version) */
// import React, { useEffect, useRef, useState } from 'react';
// import { SkillType } from '../types';

// interface SkillCardProps { skill: SkillType; }

// const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
//   const [show, setShow] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) { setShow(true); obs.disconnect(); } },
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
//         bg-white/10 dark:bg-white/5 backdrop-blur-xl
//         border border-white/30 dark:border-white/10
//         shadow-lg shadow-black/20
//       `}
//     >
//       {/* light glare */}
//       <div className="pointer-events-none absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-5" />

//       {/* ICON – coloured */}
//       <i
//         className={`${skill.icon} text-5xl mb-3 drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1`}
//         style={{ color: skill.color }}
//       />

//       {/* LABEL – coloured */}
//       <span
//         className="text-base font-semibold tracking-wide select-none"
//         style={{ color: skill.color }}
//       >
//         {skill.name}
//       </span>
//     </div>
//   );
// };

// export default SkillCard;
import React from 'react';
import { motion } from 'framer-motion';

interface SkillType {
  name: string;
  icon: string;
  color: string;
}

const SkillCard: React.FC<{ skill: SkillType }> = ({ skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.07 }}
      className={`
        relative overflow-hidden flex flex-col items-center justify-center
        h-40 w-full sm:h-44 rounded-3xl p-6 group
        bg-white/10 dark:bg-white/5 backdrop-blur-xl
        border border-white/30 dark:border-white/10
        shadow-lg shadow-black/20
      `}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      <i
        className={`${skill.icon} text-5xl mb-3 drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1`}
        style={{ color: skill.color }}
      />
      <span
        className="text-base font-semibold tracking-wide select-none"
        style={{ color: skill.color }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

export default SkillCard;
