import React from 'react'
import Resume from '../assets/Resume-React.pdf'
import {Styles} from '../utils/Style'
import { TiArrowDownOutline } from "react-icons/ti";
import profile from '../assets/profile3.png'


const About = () => {
    return (
        <div className='flex flex-wrap justify-center items-center p-10 'id='Home'>

            <div className='flex-1 py-4'>
                <span className={Styles.heroHeadText}>Hello,<br />I'm <span className='text-orange-600'>KARTHIKEYAN MUNICHAMY</span></span>
                <br />
                <span className={Styles.heroSubText}>I am a REACT Developer &  Web Designer </span>         
                <br />
                <div className='w-[14rem] mt-4'>
                    <a 
                    href={Resume}
                    download= "Resume"
                    target = 'blank'
                    rel='noreferrer'
                    >
                     <div className='p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 shadow-lg hover:shadow-pink-500'><TiArrowDownOutline className='text-lg mr-3 mt-1 '/>
Resume
                        </div>   
                    </a>
                </div>
            </div>
            <div className='flex flex-wrap'>
                <img src={profile} alt="profile" className=' mt-[-20px] mr-[50px]  p-4'/>

            </div>

        </div>
    )
    }

export default About