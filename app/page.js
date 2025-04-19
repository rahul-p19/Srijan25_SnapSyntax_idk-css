import React from 'react'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'

function Page() {
  const skills = [
    { tech: "test1 ", rating: 2 },
    { tech: "test2", rating: 5 },
    { tech: "test3", rating: 1 },
    { tech: "test4", rating: 4 },
    { tech: "test5", rating: 3 },
    { tech: "test6", rating: 1 }
  ]
  return (
    <div className='flex flex-col w-full'>
      <Home />
      <About />
      <Skills skills={skills} />
    </div>
  )
}

export default Page
