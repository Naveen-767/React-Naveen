
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGithub,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiFigma,
  SiMysql,
  SiTypescript,
  SiStreamlit,
  SiThreedotjs,
  SiVite,
  SiNextdotjs,

  SiVercel,
  SiFirebase,
  SiNetlify,
} from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';

export interface SkillType {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
  color: string;
}
export const skills: SkillType[] = [
  // --- existing skills ---
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },

  // --- styling ---
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Sass', icon: SiSass, color: '#CC6699' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'UI / UX', icon: MdDesignServices, color: '#FF5722' },

  // --- backend / database ---
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'MySQL', icon: SiMysql, color: '#00758F' },

  // --- deployment / tools ---
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },

  // --- others ---
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#000000' },
  { name: 'Streamlit', icon: SiStreamlit, color: '#FF4B4B' },
];
