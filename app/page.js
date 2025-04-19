import React from 'react'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'

function Page() {
  return (
    <div className='flex flex-col w-full'>
      <Home />
      <About />
      <Skills />
    </div>
  )
}

export default Page