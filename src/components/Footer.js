import React from 'react'
import { GrLinkedinOption } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className='w-[screen] bg-black'>
            <div className='flex flex-row p-2 flex-wrap justify-around'>
                <a 
                href="//"
                className='text-lg flex flex-row text-violet-300'>
                    <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                        <GrLinkedinOption className="text-white"/>
                    </div>
                    <span className='text-white ml-1 mt-[0.1rem]'>Karthikeyan Munichamy</span>
                </a>
                <a 
                href="//"
                className='text-lg flex flex-row text-violet-300'>
                    <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                        <GrMail className="text-white"/>
                    </div>
                    <span className='text-white ml-1 mt-[0.1rem]'>karthikn1405@gmail.com</span>
                </a>
                <a 
                href="//"
                target='blank'
                className='text-lg flex flex-row text-violet-300'>
                    <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                        <FaMobileAlt className="text-white"/>
                    </div>
                    <span className='text-white ml-1 mt-[0.1rem]'>+918489276881</span>
                </a>


            </div>
            

        </div>
    </div>
  )
}

export default Footer