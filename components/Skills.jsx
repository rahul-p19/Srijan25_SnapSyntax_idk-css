import React from 'react'

function Skills({skills}) {
  const half = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, half);
  const rightSkills = skills.slice(half);
  return (
    <div id="skills" className="w-full font-poppins p-0 m-0">
    <div>
    <div className="bg-black text-purple-400 min-h-screen p-4">
    <h2 className="text-6xl font-bold mb-24 text-center">MY SKILLS</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center w-full text-xl">
    {[leftSkills, rightSkills].map((chunk, idx) => (
      <table key={idx} className="w-full border-separate border-spacing-y-2 grid place-items-center">
      <thead>
      <tr className='flex gap-22 w-full'>
      <th className="text-left text-2xl">Tech</th>
      <th className="text-left text-2xl">Stars</th>
      </tr>
      </thead>
      <tbody>
      {chunk.map((skill, index) => (
        <tr key={index} className='flex gap-20 ml-8 w-full'>
        <td className="py-1">{skill.tech}</td>
        <td className="py-1"><StarRating count={skill.rating}></StarRating></td>
        </tr>
      ))}
      </tbody>
      </table>
    ))}
    </div>
    </div>
    </div>

  )
};

const StarRating = ({ count }) => {
  const maxStars = 5;
  const safeCount = Math.max(0, Math.min(count, maxStars)); // Clamp between 0 and 5

  return (
    <div className="flex space-x-1 text-yellow-400 text-xl">
    {Array.from({ length: maxStars }, (_, i) =>
      i < safeCount ? (
        <span key={i} className="text-purple-700">★</span> // filled star
      ) : (
        <span key={i} className="text-purple-100">☆</span> // unfilled star
      )
    )}
    </div>
  );
};

export default Skills;
