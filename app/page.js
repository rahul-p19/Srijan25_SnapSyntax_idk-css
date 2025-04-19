import React from 'react'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Project'

import Contact from '@/components/Contact'
function Page() {
  const skills = [
    { tech: "test1 ", rating: 2 },
    { tech: "test2", rating: 5 },
    { tech: "test3", rating: 1 },
    { tech: "test4", rating: 4 },
    { tech: "test5", rating: 3 },
    { tech: "test6", rating: 1 }
  ]
  const projects = [
    {
      imgLink: "https://www.rahulpandey.tech/_next/image?url=%2Fprojects%2Fquiz-question.jpg&w=640&q=75",
      title: "INFINITIEEE",
      link: "https://example.com/1",
    },
    {
      imgLink: "https://static-server-huz1.vercel.app/images/mockIpl.jpg",
      title: "MOCKIPL",
      link: "https://example.com/2",
    },
    {
      imgLink: "https://swapnaneel-ray.vercel.app/images/portfolio/workforce.png",
      title: "WORKFORCE",
      link: "https://example.com/3",
    },
  ];
  return (
    <div className='flex flex-col w-full'>
      <Home />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects}></Projects>
      <Contact />
    </div>
  )
}

export default Page
