import React from 'react'
import { Styles } from '../utils/Style'
import contact from '../assets/profile.jpg'

const Contact = () => {
  return (
    <div>
        <div className='flex-row items-center pl-5 justify-center pt-3' id='Contact'>
            <span className={Styles.sectionHeadText}>Contact</span>
            <hr className='w-[35%]'/>
        </div>
        <div className='mt-5'>
            <div className='flex flex-wrap flex-row justify-around'>
                <div className='lg:w-[40%]'>
                    <form className='m-5 flex flex-col gap-3'>
                        <label className='flex flex-col gap-3'>
                            <span className='text-violet-700 font-medium mb-2'>Your Name</span>
                            <input 
                              type="text" 
                              name="name"
                              placeholder="Whats your good name?"
                              className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium'/> 
                        </label>
                        <label className='flex flex-col gap-3'>
                            <span className='text-violet-700 font-medium mb-2'>Your Email</span>
                            <input 
                              type="text" 
                              name="email"
                              placeholder="Whats your web address?"
                              className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium'/> 
                        </label>
                        <label className='flex flex-col gap-3'>
                            <span className='text-violet-700 font-medium mb-2'>Your Message</span>
                            <textarea
                              type="text" 
                              row = {5}
                              placeholder="Whats you want to say?"
                              className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium'/>
                        </label>
                        <button
                        type='sumbit'
                        className='bg-slate-100 hover:shadow-orange-300 py-3 px-8 mb-4 m-4 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary'> Sumbit</button>
                    </form>

                </div>
                <div className='lg:w-[30%]'>
                    <img src={contact} alt="any" />

                </div>

            </div>

        </div>
    </div>
  )
}

export default Contact