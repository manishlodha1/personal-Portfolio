'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

const experiences = [
  {
    title: "Frontend Developer",
    company: "ePaylater",
    duration: "Oct 2024 - Apr 2025",
    description: [
      "Implementation the Supplier Module, a dedicated interface for third-party vendors.",
      "Built and integrated core functionalities such as Add Supplier, Invite Supplier, Quick Payment Module, and Repayment Management for enhanced supplier interactions.",
      "Developed and integrated bank document authorization and Glib features in the Partner Dashboard, automating processes and improving internal workflows.",
      "Contributed to seller onboarding by implementing API integrations in the Merchant Dashboard."
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Coding Ninjas",
    duration: "Aug 2022 - Dec 2022",
    description: [
      "Facilitating the learning of HTML,CSS,Javascript,NodeJS,MonogoDB and ExpressJS for a cohort of 450+ students, resulting in demonstrable improvements in their understanding and performance.",
      "Hosted sessions with students to clear their doubts and solve their issues."
    ]
  },
  // Add more experience objects if needed
];

export default function ExperienceSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const experience = experiences[index];

  return (
    <section id='experience' className="py-16 px-6 bg-gradient-to-br from-slate-900 to-black text-white">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Experience</h2>

      <Swiper spaceBetween={30} slidesPerView={1}>
        {experiences.map((exp, idx) => (
          <SwiperSlide key={idx}>
            <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center transition-all">
              <h3 className="text-xl font-semibold text-purple-600">{experience.title}</h3>
              <p className="text-sm text-gray-500">{experience.company} | {experience.duration}</p>
              <ul className="mt-4 space-y-2 text-left text-gray-700 dark:text-gray-300 list-disc list-inside">
                {experience.description.map((point, idx) => (
                  <li className="mt-4 text-gray-700 dark:text-gray-300 list-none" key={idx}>{point}</li>
                ))}
              </ul>
              <div className="flex justify-between mt-6">
                <button onClick={prevSlide} className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400">
                  ⬅️ Prev
                </button>
                <button onClick={nextSlide} className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400">
                  Next ➡️
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center transition-all">
        <h3 className="text-xl font-semibold text-purple-600">{experience.title}</h3>
        <p className="text-sm text-gray-500">{experience.company} | {experience.duration}</p>
        <ul className="mt-4 space-y-2 text-left text-gray-700 dark:text-gray-300 list-disc list-inside">
          {experience.description.map((point, idx) => (
            <li className="mt-4 text-gray-700 dark:text-gray-300 list-none" key={idx}>{point}</li>
          ))}
        </ul>
        <div className="flex justify-between mt-6">
          <button onClick={prevSlide} className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400">
            ⬅️ Prev
          </button>
          <button onClick={nextSlide} className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400">
            Next ➡️
          </button>
        </div>
      </div> */}
    </section>
  );
}