// // export interface SkillType {
// //   name: string;
// //   icon: string;
// //   color: string;
// // }

// // export const skills: SkillType[] = [
// //   { name: 'HTML5', icon: 'bx bxl-html5', color: '#E34F26' },
// //   { name: 'CSS3', icon: 'bx bxl-css3', color: '#1572B6' },
// //   { name: 'JavaScript', icon: 'bx bxl-javascript', color: '#F7DF1E' },
// //   { name: 'React.js', icon: 'bx bxl-react', color: '#61DAFB' },
// //   { name: 'GitHub', icon: 'bx bxl-github', color: '#181717' },
// //   { name: 'Sass', icon: 'bx bxl-sass', color: '#CC6699' },
// //   { name: 'Bootstrap', icon: 'bx bxl-bootstrap', color: '#7952B3' },
// //   { name: 'Tailwind', icon: 'bx bxl-tailwind-css', color: '#06B6D4' },
// //   { name: 'UX / UI', icon: 'bx bxs-paint', color: '#FF5722' },
// //   { name: 'Figma', icon: 'bx bxl-figma', color: '#F24E1E' },
// //   { name: 'MySQL', icon: 'bx bxs-data', color: '#00758F' },
// //   { name: 'TypeScript', icon: 'bx bxl-typescript', color: '#3178C6' },
// //   { name: 'Streamlit', icon: 'bx bxl-python', color: '#FF4B4B' },
// //   { name: 'Three.js', icon: 'bx bx-cube', color: '#000000' },
// //   { name: 'Vite', icon: 'bx bxs-bolt', color: '#646CFF' },
// //   { name: 'Next.js', icon: 'bxl bx-next-js', color: '#000000' }

// // ];
// // // 







// import React from 'react';
// import {
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiReact,
//   SiGithub,
//   SiSass,
//   SiBootstrap,
//   SiTailwindcss,
//   SiFigma,
//   SiMysql,
//   SiTypescript,
//   SiStreamlit,
//   SiThreedotjs,
//   SiVite,
//   SiNextdotjs,
// } from 'react-icons/si';
// import { MdDesignServices } from 'react-icons/md';

// export interface SkillType {
//   name: string;
//   icon: React.ReactNode;
//   color: string;
// }

// export const skills: SkillType[] = [
//   { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
//   { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
//   { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
//   { name: 'React.js', icon: <SiReact />, color: '#61DAFB' },
//   { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
//   { name: 'Sass', icon: <SiSass />, color: '#CC6699' },
//   { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
//   { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
//   { name: 'UI / UX', icon: <MdDesignServices />, color: '#FF5722' },
//   { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
//   { name: 'MySQL', icon: <SiMysql />, color: '#00758F' },
//   { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
//   { name: 'Streamlit', icon: <SiStreamlit />, color: '#FF4B4B' },
//   { name: 'Three.js', icon: <SiThreedotjs />, color: '#000000' },
//   { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
//   { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
// ];



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
