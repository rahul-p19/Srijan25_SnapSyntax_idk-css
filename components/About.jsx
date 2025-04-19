import React from 'react'
import Image from 'next/image'
import {ArrowRight} from "lucide-react"

function About() {
  return (
    <main className="min-h-screen flex flex-col items-center ">
      <div className='flex flex-row items-center  mt-35 mb-25'>
  <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-100 to-purple-500 bg-clip-text text-transparent">ABOUT US</h1>
    <ArrowRight className="text-purple-500 ml-6 w-20 h-17 animate-bounce" />
  </div>
  <div className="flex flex-col md:flex-row gap-14 items-center justify-center px-6 md:px-16 w-full max-w-6xl">
    <div>
      <Image src="/about.jpg" alt="About Me" width={500} height={500} />
    </div>
    
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-bold">
        We are Team <span className="text-purple-400">idk-css</span>
      </h2>
      <p className="text-lg mt-4">We have developed this website using Next.js</p>
      <p className="text-lg mt-4">Our team is passionate about website development</p>
      <p className="text-lg mt-4">Feel free to reach out to us!</p>

      <button className="bg-purple-800 text-white font-bold py-2 px-6 mt-6 hover:bg-purple-600 transition duration-300 ease-in-out rounded-full">
        Contact Us
      </button>
    </div>
  </div>
</main>

  )
}

export default About
