import React from 'react'

function Spotlight({size, top = 0, right = 50}) {
  return (
    <div className={`h-72 top-0 -right-10 aspect-square rounded-full bg-purple-600/20 blur-2xl border text-transparent absolute`}></div>
  )
}

export default Spotlight