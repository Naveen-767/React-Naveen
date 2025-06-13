export interface SkillType {
  name: string;
  icon: string;     // e.g. 'bx bxl-react'
  color: string;    // NEW – brand hex code
}
export const skills: SkillType[] = [
  { name: 'HTML5',      icon: 'bx bxl-html5',      color: '#E34F26' },
  { name: 'CSS3',       icon: 'bx bxl-css3',       color: '#1572B6' },
  { name: 'JavaScript', icon: 'bx bxl-javascript', color: '#F7DF1E' },
  { name: 'React.js',   icon: 'bx bxl-react',      color: '#61DAFB' },
  { name: 'GitHub',     icon: 'bx bxl-github',     color: '#181717' },
  { name: 'Sass',       icon: 'bx bxl-sass',       color: '#CC6699' },
  { name: 'Bootstrap',  icon: 'bx bxl-bootstrap',  color: '#7952B3' },
  { name: 'Tailwind',   icon: 'bx bxl-tailwind-css', color: '#06B6D4' },
  { name: 'UX / UI',    icon: 'bx bxs-paint',      color: '#FF5722' },
  { name: 'Figma',      icon: 'bx bxl-figma',      color: '#F24E1E' },
  { name: 'MySQL',      icon: 'bx bxs-data',       color: '#00758F' },
];
