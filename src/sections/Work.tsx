// // import React from 'react';
// // import SectionTitle from '../components/SectionTitle';
// // import ProjectCard from '../components/ProjectCard';
// // import { projects } from '../data';

// // const Work: React.FC = () => {
// //   return (
// //     <section id="work" className="py-20 bg-gray-50 dark:bg-gray-900">
// //       <div className="container mx-auto px-6">
// //         <SectionTitle title="My Work" />
        
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {projects.map((project, index) => (
// //             <ProjectCard key={index} project={project} />
// //           ))}
// //         </div>
        
// //         <div className="mt-12 text-center">
// //           <a 
// //             href="#contact" 
// //             className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
// //           >
// //             Want to work together? Contact me!
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Work;

// import React from 'react';
// import SectionTitle from '../components/SectionTitle';
// import ProjectCard from '../components/ProjectCard';
// import { projects } from '../data';
// import { motion } from 'framer-motion';

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
// };

// const Work: React.FC = () => {
//   return (
//     <section id="work" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <SectionTitle title="My Work" />
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {projects.map((project, index) => (
//             <ProjectCard key={index} project={project} idx={index} />
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           viewport={{ once: true }}
//           className="mt-12 text-center"
//         >
//           <a 
//             href="#contact" 
//             className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
//           >
//             Want to work together? Contact me!
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Work;


import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const Work: React.FC = () => (
  <section id="work" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-6">
      {/* ...SectionTitle animated as before... */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default Work;
