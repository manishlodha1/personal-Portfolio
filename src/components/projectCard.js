// src/components/ProjectCard.js
import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col md:flex-row bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden mb-8">
      {/* Left side - iframe preview */}
      <div className="w-full p-4 md:w-1/2 h-64 md:h-auto">
        <img
          src={project.image}
          title={project.title}
          className="w-full h-full border-0"
        />
      </div>

      {/* Right side - text content */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-purple-400 mb-2">{project.title}</h2>
        <ul className="mt-4 space-y-2 text-left text-gray-700 dark:text-gray-300 list-disc list-inside">
          {project.description.map((point, idx) => (
            <li className="text-gray-300 mb-3 list-none" key={idx}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="bg-gray-700 text-sm px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        {/* <div className='flex space-x-2 w-full'> */}
          <Link href={project.github} target="_blank" className="text-blue-400 hover:underline mb-6">
            View on GitHub →
          </Link>
          {/* <button className="text-blue-400 hover:underline">
            Live Demo →
          </button> */}
        {/* </div> */}

      </div>
    </div>
  );
}
