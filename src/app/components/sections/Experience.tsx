export const Experience = () => {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "UrbanChain",
      duration: "October 2024 - Present",
      tasks: [
        "Developing a user portal that connects energy genarators with consumers.",
        "Developed a blockchain-based solution to track energy consumption and production.",
        "Led the development of a UI kit for consistency and efficiency in design.",
        "Collaborated with back-end developers to integrate AWS cloud services using Node.js and .NET with REST and GraphQL.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Iris Software Group",
      duration: "November 2023 - June 2024",
      tasks: [
        "Developed and shipped a client management tool now used by thousands of users.",
        "Developed and shipped a third-party integration to enhance IRIS’s accountancy suite.",
        "Supported hiring and onboarding of new developers through code review and mentoring.",
        "Collaborated with back-end developers to integrate AWS cloud services using Node.js and .NET with REST and GraphQL.",
      ],
    },
    {
      role: "Front-end Software Engineer",
      company: "Iris Software Group",
      duration: "May 2021 - November 2023",
      tasks: [
        "Specialized in developing SPAs using React and Angular with a micro front-end model.",
        "Contributed to accountant productivity projects through a suite of essential features.",
        "Led the development of a UI kit for consistency and efficiency in design.",
        "Advocated for AI tools like GitHub Copilot and ChatGPT to enhance team productivity.",
      ],
    },
    {
      role: "Front-end Software Engineer",
      company: "The Co-operative Bank",
      duration: "March 2019 - May 2021",
      tasks: [
        "Focused on developing React applications for customer daily banking needs.",
        "Played a pivotal role in the front-end development of an emergency financial relief application.",
        "Gained expertise in state management using Redux to efficiently handle banking data.",
      ],
    },
  ];

  return (
    <section id="experience" className="scroll-snap-section">
      <div className="flex flex-col items-center justify-center p-24 pb-20 gap-16 bg-[#1A1A2E] text-[#EAEAEA]">
        <h2 className="text-4xl">Experience</h2>

        <div className="flex flex-col relative w-full gap-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
            >
              <div>
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <h4 className="text-xl font-semibold">{exp.company}</h4>
                <p className="italic text-gray-500 mb-4">{exp.duration}</p>

                <ul className="list-disc list-outside  text-lg space-y-2 list-none">
                  {exp.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
