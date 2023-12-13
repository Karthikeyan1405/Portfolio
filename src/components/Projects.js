import React from 'react'
import { Styles } from '../utils/Style'
import { projects } from '../Constants/index'
import Tilt from 'react-parallax-tilt'
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
         <div className='flex-row items-center pl-5 justify-center pt-3' id='Project'>
            <span className={Styles.sectionHeadText}> Projects </span>
            <hr className='w-[35%]'/>
            <div className={Styles.sectionText}>
               Following projects showcase my skills and experience through real-world example of my work.
               Each project is briefly described with links to code repositories and live demos in it. <br />
               It reflects my ability to solve complex problems,work with different technologies and manage projects effectively.
            </div>
        </div> 
        <div className='flex flex-wrap p-8 justify-evenly items-center'>
            {
                projects.map((project)=>(
                    <Tilt 
                    key={project.title}
                    className='w-[300px] h-[500px] flex flex-col justify-evenly shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl border-2 border-violet-900'>
                        <div>
                            <div className='flex flex-col justify-center items-center mb-3'>
                                <div className='flex flex-row justify-center items-center'>
                                <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex  justify-center items-center'>
                                    <a 
                                    href={project.source_deploy_link}
                                    target='blank'>
                                        <SiNetlify className='text-3xl font-bold text-violet-600'/>
                                    </a>
                                </div>
                                <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center'>
                                    <a 
                                    href={project.source_code_link}
                                    target='blank'>
                                        <FaGithub className='text-3xl font-bold text-violet-600'/>
                                    </a>
                                </div>
                                </div>

                                <img src={project.image} alt={project.title} className='h-[200px] w-[200px] self-center border-2 border-pink-200 rounded-2xl m-2 p-2' />
                                <div className='text-2xl text-violet-600 font-extrabold'>
                                    {project.title}
                                </div>
                                <div className='text-center'>
                                    <span className='text-orange-500'>
                                        {project.description}
                                    </span>
                                </div>
                            </div>

                        </div>

                    </Tilt>
                ))
            }
        </div>
       
    </div>
  )
}

export default Projects