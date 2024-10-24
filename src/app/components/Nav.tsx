export const Nav = () => {
  return (
    <nav className="fixed md:top-5 left-1/2 transform -translate-x-1/2 bg-white backdrop-blur-md shadow-lg z-50 md:w-fit md:rounded-full w-full rounded-none">
      <ul className="flex justify-center  space-x-16 p-4 px-16">
        <li>
          <a
            href="#home"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
          >
            SKILLS
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
          >
            EXPERIENCE
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};
