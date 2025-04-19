import React from 'react'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
function Page() {
  return (
    <div className='flex flex-col w-full'>
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}

export default Page