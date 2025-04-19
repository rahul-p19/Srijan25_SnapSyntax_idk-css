import React from 'react'

function Skills({skills}) {
  const half = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, half);
  const rightSkills = skills.slice(half);
  return (

    <div className="bg-black text-white min-h-screen p-4 font-mono flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center">MY SKILLS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl ">
        {[leftSkills, rightSkills].map((chunk, idx) => (
          <table key={idx} className="w-full border-separate border-spacing-y-2  mx-auto">
            <thead>
              <tr>
                <th className="text-left text-lg">Tech</th>
                <th className="text-left text-lg">Stars</th>
              </tr>
            </thead>
            <tbody>
              {chunk.map((skill, index) => (
                <tr key={index}>
                  <td className="py-1">{skill.tech}</td>
                  <td className="py-1">
                    <StarRating count={skill.rating} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
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
