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
