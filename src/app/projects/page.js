// src/app/projects/page.js
import Navbar from '@/components/navbar';
import ProjectCard from '../../components/projectCard';
import { projects } from '../../data/project';

export default function ProjectsPage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gray-900 px-6 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
    </>
  );
}