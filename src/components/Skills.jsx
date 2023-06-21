import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Bootstrap from '../assets/bootstrap.png'
import Java from '../assets/java.png'
import Mern from '../assets/mern.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/*container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#ee3756] '>Proficiencies</p>
                <p className='py-4'>These are the principle technologies that I use.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={HTML} alt="HTML Icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={CSS} alt="CSS Icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={JavaScript} alt="JavaScript Icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={ReactImg} alt="React Icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mern-img mx-auto pt-4' src={Mern} alt="MERN stack image" />
                    <p className='my-4'>MERN stack</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Tailwind} alt="Tailwind Icon" />
                    <p className='my-4'>Tailwind</p> 
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Java} alt="Java Icon" />
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={GitHub} alt="GitHub Icon" />
                    <p className='my-4'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills