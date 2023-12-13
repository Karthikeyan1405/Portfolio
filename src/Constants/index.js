import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.webp'
import reacticon from '../assets/react.png'
import tailwind from '../assets/talwind.png'
import webdevelopment from '../assets/webdevelopment.png'
import socialmedia from '../assets/socialmedia.png.webp'
import calculator from '../assets/Calculator1.png'
import giticon from '../assets/git.png'
import UI from '../assets/UI Design.png'
import react from '../assets/tech.png'
import todolist from '../assets/todolist.png'

const services = [
    {
        title :"Web Developer",
        icon  : webdevelopment,
    },
    {
        title : "React Developer",
        icon : reacticon,
        
    },
    {
        title : "UI/UX Designer",
        icon  :  UI,
    }
]

const technologies = [
    {
        tech : "HTML 5",
        icon : html,
    },
    {
        tech : "CSS 3",
        icon : css,
    },
    {
        tech : "Tailwind",
        icon : tailwind,
    },
    {
        tech : "JavaScript",
        icon : js,
    },
    {
        tech : "React",
        icon : react,
    },
    {
        tech : "GitHub",
        icon : giticon,
    },
   

]
const projects = [
    {
        title:"To-Do List APP",
        description:
        "Develop a responsive and user-friendly to-do list application using React. The application should allow users to add, edit, delete, and mark tasks as complete.",
        image:todolist,
        source_code_link:"https://github.com/Karthikeyan1405/react_socialMedia_netlify.git",
        source_deploy_link:"https://karthi-socialmedia.netlify.app/"
    },
    {
        title:"Social_Media APP",
        description:
        "Developed a dynamic and responsive social media application using React, JavaScript, and related technologies.Platform for users to connect, share, and interact seamlessly.",
        image:socialmedia,
        source_code_link:"https://github.com/Karthikeyan1405/react_socialMedia_netlify.git",
        source_deploy_link:"https://karthi-socialmedia.netlify.app/"
    },
    {
        title:"Calculator APP",
        description:
        "Developed a dynamic and responsive social media application using React, JavaScript, and related technologies.Platform for users to connect, share, and interact seamlessly.",
        image:calculator,
        source_code_link:"https://github.com/Karthikeyan1405/react_socialMedia_netlify.git",
        source_deploy_link:"https://karthi-socialmedia.netlify.app/"
    },
]
export {services,technologies,projects};