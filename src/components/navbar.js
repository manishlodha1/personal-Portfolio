import Link from "next/link";

export default function Navbar() {
    const links = ['Home', 'Experience', 'Skills', 'Contact'];
  
    return (
      <nav className="bg-slate-900 text-white py-4 px-6 flex justify-between items-center fixed w-full z-50 shadow-md">
        <h1 className="text-xl font-bold">Portfolio.</h1>
        <ul className="flex space-x-6 text-sm">
          {links.map(link => (
            <li key={link}>
              <a href={`/#${link.toLowerCase()}`} className="hover:text-cyan-400">{link}</a>
            </li>
          ))}
          <li>
            <Link href="/projects" className="hover:text-cyan-400">Projects</Link>
          </li>
        </ul>
      </nav>
    );
  }
  