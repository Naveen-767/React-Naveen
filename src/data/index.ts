import {  ProjectType, SocialLinkType } from '../types';
import suji from '../images/suji.jpg';
import webbious from '../images/webbious.jpg';
import calculater from '../images/calculater.jpg'



export const projects: ProjectType[] = [
  { 
    title: 'Project 1', 
    image: webbious, 
    link: 'https://webbious.com/' 
  },
  { 
    title: 'Project 2', 
    image:suji,  
    link: 'https://suji-ui.firebaseapp.com/' 
  },
  { 
    title: 'Calculater App', 
    image: calculater, 
    link: 'https://naveen-767.github.io/Calculator-Naveen/' 
  },
  // { 
  //   title: 'Project 4', 
  //   image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  //   link: '#' 
  // },
  // { 
  //   title: 'Project 5', 
  //   image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  //   link: '#' 
  // },
  // { 
  //   title: 'Project 6', 
  //   image: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  //   link: '#' 
  // },
];

export const socialLinks: SocialLinkType[] = [
  { 
    platform: 'LinkedIn', 
    icon: 'bx bxl-linkedin', 
    link: 'https://www.linkedin.com/in/naveen-raj-910a14218/',
    hoverColor: 'hover:text-blue-600'
  },
  { 
    platform: 'Instagram', 
    icon: 'bx bxl-instagram', 
    link: 'https://www.instagram.com/naveenraj767/',
    hoverColor: 'hover:text-pink-600'
  },
  { 
    platform: 'GitHub', 
    icon: 'bx bxl-github', 
    link: 'https://github.com/naveen-767',
    hoverColor: 'hover:text-gray-800 dark:hover:text-white'
  },
  { 
    platform: 'Facebook', 
    icon: 'bx bxl-facebook', 
    link: 'https://www.facebook.com/profile.php?id=100009760741593',
    hoverColor: 'hover:text-blue-700'
  },
  { 
    platform: 'WhatsApp', 
    icon: 'bx bxl-whatsapp', 
    link: 'https://wa.me/8072908442',
    hoverColor: 'hover:text-green-500'
  },
];


