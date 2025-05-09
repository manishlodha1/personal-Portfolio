'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

export default function Intro() {
  return (
    <section id='home' className="bg-gradient-to-br from-slate-900 to-black text-white relative min-h-screen flex flex-col md:flex-row justify-center items-center px-10 pt-24">
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-lg">Hello, It's Me</h2>
        <h1 className="text-4xl font-bold">Manish</h1>
        <h3 className="text-2xl">
          And I'm a{' '}
          <span className="text-cyan-400">
            <Typewriter
              words={['Frontend Developer', 'Freelancer', 'Web Developer']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <p className="text-sm text-gray-300">
          I'm a passionate web developer with hands-on experience in building modern, responsive websites. I’ve worked as a frontend development and currently freelance for small businesses and personal brands. My focus is on clean design, user-friendly interfaces, and bringing ideas to life on the web.
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/manishlodha1" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} className="hover:text-gray-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/manish-lodha-492791220/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className="hover:text-blue-400 transition" />
          </a>
          <a href="https://www.instagram.com/freelancewithmanish/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className="hover:text-pink-400 transition" />
          </a>
        </div>
        {/* <button className="mt-6 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md">More About Me</button> */}
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-pink-500">
          <img
            src=""
            alt="profile"
            className="w-60 h-60 rounded-full object-cover border-4 border-slate-900"
          />
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-sm text-gray-400">
        <a href="#latestWork" className="flex flex-col items-center hover:text-white transition">
          <span>Scroll Down</span>
          <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
