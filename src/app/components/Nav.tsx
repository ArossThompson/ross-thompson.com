export const Nav = () => {
  return (
    <nav className="fixed md:top-5 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-md z-50 md:w-fit md:rounded-full w-full rounded-none">
      <ul className="flex justify-center space-x-8 p-4 px-16">
        <li>
          <a
            href="#home"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
          >
            Experience
          </a>
        </li>
      </ul>
    </nav>
  );
};
