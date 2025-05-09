'use client';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFigma } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-gray-800 dark:text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Git', icon: <FaGit className="text-red-500" /> },
  { name: 'Vue', icon: <SiFigma className="text-pink-500" /> },
];

export default function SkillSection() {
  return (
    <section id='skills' className="py-16 px-6 bg-gradient-to-br from-slate-900 to-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-2 animate-bounce-slow">{skill.icon}</div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
