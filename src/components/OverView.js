 import React from 'react'
 import Tilt from 'react-parallax-tilt'
 import { Styles } from '../utils/Style'
 import { services,technologies} from '../Constants/index'
 import './style.css'
 
 const OverView = () => {
   return (
     <div className='mt-[-50px]'>
        <div className='flex-row items-center pl-5 justify-center pt-3 ' id='Overview'>
            <span className={Styles.sectionHeadText}> Introduction </span>
            <hr className='w-[35%]'/>
            <div className={Styles.sectionText}>
                I'm skilled Web Developer with experience in JavaScript and expertise in frameworks like React.js.I'm a quick learner and collaborate,scalable and user-friendly solutions that <br /> solve real-world problems.Let's work together to bring your ideas to life.
            </div>
        </div> 
        <div className='flex flex-wrap justify-center'>
            {
                services.map((service)=>(
                 <div>
                    <li
                    key={service.icon} className='list-none' >
                    </li>
                    <Tilt
                    className='parallax-effect-glare-scale'
                    perspective={500}
                    glareColor='fed7aa'
                    glareEnable={true}
                    glareMaxOpacity={0.50}
                    sale={1.02}
                    gyroscope={true} 
                    >
                    <div className='p-3 m-3 flex flex-col justify-evenly items-center'>
                        <img className='h-[100px] w-[100px]' src={service.icon} alt={service.title} />
                        <div className='m-5 text-violet-500'>
                            {service.title}
                        </div>
                    </div>
                    </Tilt>   
                 </div>

                ))
            }

        </div>
        <div className='flex flex-wrap justifty-center items-center bg-white'>
            {
                technologies.map((technology)=>(
                    <div
                    key = {technology.tech}
                    className='m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px] border-violet-400 hover:shadow-orange-300'>
                    <img  className='p-2' src={technology.icon} alt={technology.tech} />
                      <div className='text-violet-600 flex justify-center'>
                        {technology.tech}
                      </div>
                    </div>
                ))
            }

        </div>

     </div>
   )
 }
 
 export default OverView