import Image from "next/image";

export const Skills = () => {
  const skills = [
    { name: "Typescript", icon: "/icons/TS.svg" },
    { name: "JavaScript", icon: "/icons/Javascript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Angular", icon: "/icons/angular.svg" },
    { name: "CSS", icon: "/icons/CSS3.svg" },
    { name: "HTML5", icon: "/icons/html5.svg" },
    { name: "SASS", icon: "/icons/sass.svg" },
    { name: "Tailwind", icon: "/icons/tailwind.svg" },
    { name: "Next.js", icon: "/icons/next.js.svg" },
    { name: "Node.js", icon: "/icons/node.js.svg" },
    { name: "Vite", icon: "/icons/vite.js.svg" },
    { name: "Git", icon: "/icons/git.svg" },
  ];

  return (
    <section id="skills" className="scroll-snap-section">
      <div className="flex flex-col items-center justify-center min-h-[800px] p-8 pb-20 gap-8 bg-lightBeige text-darkCharcoal">
        <h2 className="text-4xl text-sky-500">Skills</h2>
        <p className="text-lg max-w-2xl text-center">
          Here are some of the key technologies I work with:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-4">
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                className={`w-16 h-16`}
                width={64}
                height={64}
              />
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
