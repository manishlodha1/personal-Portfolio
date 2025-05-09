

const Project = () => {

    const projects = [
        {
          title: "Library Website",
          type: "Event Booking",
          description: [
            "Integrated Stripe payment gateway to handle secure online payments with pricing based on selected membership duration.",
            "Implemented responsive and user-friendly forms with field validation for user inputs like name, email, phone number, etc.",
            "Used MongoDB to store user details and membership data securely."
          ],
          tags: ['#reactjs', '#expressjs', '#javascript', '#MongoDB', '#nodejs'],
          image: '/projects/harigurus.png',
        },
        {
          title: "ElectricApplianceSite",
          type: "EdTech Startup",
          description: [
            "Implemented product filtering by categories and built dynamic features such as Add to Cart and Buy Now for an enhanced user experience.",
            "Designed and implemented a responsive UI for seamless navigation and transactions across devices."
          ],
          tags: ['#nodejs', '#expressjs', '#mongodb', '#reactjs', '#html'],
          image: '/projects/eazygrad.png',
        },
        // Add more projects here...
      ];

  return (
    <section id="latestWork" className="py-16 px-6 bg-gradient-to-br from-slate-900 to-black text-white">
    <h2 className="text-3xl font-bold mb-10 text-center text-white">Latest Works</h2>

    <div className="relative max-w-6xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-600"></div>

        {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
            <div key={index} className="mb-16 relative w-full flex">
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-4 w-4 h-4 bg-blue-600 rounded-full z-10 shadow-md"></div>

            <div className={`w-full md:w-1/2 px-4 ${isEven ? 'md:pr-10 justify-end text-left' : 'md:pl-10 justify-start relative left-1/2 text-left'} flex`}>
                <div className="bg-gray-800 rounded-lg p-6 shadow-md w-full">
                <h3 className="text-xl font-bold text-purple-400">{project.title}</h3>
                {/* <p className="italic text-sm text-gray-400 mb-2">{project.type}</p> */}
                <ul className="mt-4 space-y-2 text-left text-gray-700 dark:text-gray-300 list-disc list-inside">
                  {project.description.map((point, idx) => (
                    <li className="text-gray-300 mb-3 list-none" key={idx}>{point}</li>
                  ))}
                </ul>
                {/* <p className="text-gray-300 mb-3">{project.description}</p> */}
                <div className="flex flex-wrap gap-2 justify-end md:justify-start">
                    {project.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
                        {tag}
                    </span>
                    ))}
                </div>
                </div>
            </div>
            </div>
        );
        })}
    </div>
    </section>
  )
}

export default Project