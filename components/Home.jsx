import { ArrowDown, Figma, Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'
import Spotlight from "./Spotlight"

function Navbar(){
  return(
    <nav className='bg-gray-300/40 flex items-center justify-between rounded-full px-6 py-2 w-4/5 z-10'>
      <h2 className='text-2xl'>John Doe</h2>
      <div className='flex gap-16'>
        <a href='/' className='border-3 border-transparent hover:border-b-3 hover:border-b-purple-900'>Home</a>
        <a href='#about' className='border-3 border-transparent hover:border-b-3 hover:border-b-purple-900'>About</a>
        <a href='#skills' className='border-3 border-transparent hover:border-b-3 hover:border-b-purple-900'>Skills</a>
        <a href='#projecs' className='border-3 border-transparent hover:border-b-3 hover:border-b-purple-900'>Projects</a>
      </div>
      <a href='#contact' className='rounded-full py-2 px-3 bg-black/80'>
        Contact Me
      </a>
    </nav>
  )
}

export default function Home() {
  return (
    <div className='flex flex-col gap-y-16 items-center w-full min-h-screen py-10 bg-black relative overflow-clip font-poppins'>
      <Navbar />
      <div className='grid grid-cols-4 place-items-center min-h-[60vh] w-11/12'>
        <div className='flex flex-col gap-y-12 pl-12'>
          <h1 className='text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-500 font-semibold'>John Doe</h1>
          <h3 className='text-xl'>I'm John Doe, a fullstack web developer <br /> and AI enthusiast.</h3>
        </div>
        <div className='h-full col-span-2 flex flex-col justify-end pb-5 z-10'>
        <div className='bg-radial from-purple-800 via-purple-600 to-purple-400 rounded-full aspect-square size-24 grid place-items-center self-end'>
          <div className=' aspect-square rounded-full h-4/5 grid place-items-center'>
            <div className='aspect-square rounded-full grid place-items-center h-3/4'>
            <a href='/resume.pdf' className='flex' target='_blank'>
              <ArrowDown />
            <p>CV</p>
            </a>
            </div>
          </div>
        </div>
        </div>
        <div className='flex justify-end w-full'>
        <div className='flex flex-col gap-y-6 transition-colors duration-150 z-10'>
          <a href='https://github.com/johndoe' className='text-white hover:text-gray-400'>
            <Github />
          </a>
          <a href='https://instagram.com' className='text-white hover:text-gray-400'>
            <Instagram />
          </a>
          <a href='https://linkedin.com/johndoe' className='text-white hover:text-gray-400'>
            <Linkedin />
          </a>
          <a href='https://figma.com/' className='text-white hover:text-gray-400'>
            <Figma />
          </a>
        </div>
        </div>
      </div>
        <img src='/bubbles.png' className='w-2/5 h-auto aspect-square rounded-full border-l-3 border-l-purple-700/60 object-cover absolute -bottom-20 right-15' />
        <div className={`h-72 -top-10 -right-20 aspect-square rounded-full bg-purple-600/20 blur-2xl border text-transparent absolute`}></div>
        <div className={`h-72 top-10 -right-36 aspect-square rounded-full bg-pink-700/20 blur-2xl border text-transparent absolute`}></div>
    </div>
  )
}

