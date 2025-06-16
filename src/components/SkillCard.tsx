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
