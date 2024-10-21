import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      id="home"
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-md z-50 w-2/6 rounded-full">
        <ul className="flex justify-center space-x-8 p-4">
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
              href="#about"
              className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
            >
              About
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

      <main className="flex flex-col gap-6 row-start-2 items-center sm:items-center">
        <div className="relative">
          <Image
            className="rounded-full border-solid border-4 border-sky-500"
            src="/me.png"
            width={150}
            height={150}
            alt="Picture of me on top of Mt Batur - Bali"
          />
          <p className="absolute right-1 bottom-1 text-4xl">👋</p>
        </div>
        <div className="flex flex-col text-center gap-4 max-w-2xl">
          <h1 className="text-3xl">
            <strong className="text-sky-500">Ross Thompson</strong> - Senior
            Software Engineer
          </h1>
          <p className="text-xl">
            Hello, I'm Ross. I'm a{" "}
            <strong className="text-sky-500">senior software engineer</strong>{" "}
            at UrbanChain in Manchester. I'm currently working with React.js,
            Typescript, Node.js, and GraphQL.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="flex items-center justify-center gap-2 rounded-full border border-solid border-transparent transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/updatedcv.pdf"
            download
          >
            <span className="text-xs sm:text-base">Download my CV</span>{" "}
          </a>
          <Link
            className="flex items-center justify-center gap-2 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/experience"
          >
            <span>LinkedIn</span>
          </Link>
        </div>

        <div id="about">
          <h2 className="text-2xl">About</h2>
          <p>
            I'm a senior software engineer with 5 years of experience. I have
            worked with a variety of technologies including React.js, Node.js,
            and GraphQL.
          </p>
          <h2 className="text-2xl">About</h2>
          <p>
            I'm a senior software engineer with 5 years of experience. I have
            worked with a variety of technologies including React.js, Node.js,
            and GraphQL.
          </p>
          <h2 className="text-2xl">About</h2>
          <p>
            I'm a senior software engineer with 5 years of experience. I have
            worked with a variety of technologies including React.js, Node.js,
            and GraphQL.
          </p>
        </div>

        <div id="experience">
          <h2 className="text-2xl">About</h2>
          <p>
            I'm a senior software engineer with 5 years of experience. I have
            worked with a variety of technologies including React.js, Node.js,
            and GraphQL.
          </p>
          <h2 className="text-2xl">About</h2>
          <p>
            I'm a senior software engineer with 5 years of experience. I have
            worked with a variety of technologies including React.js, Node.js,
            and GraphQL.
          </p>
          <h2 className="text-2xl">About</h2>
          <p>
            I'm a senior software engineer with 5 years of experience. I have
            worked with a variety of technologies including React.js, Node.js,
            and GraphQL.
          </p>
        </div>
      </main>
    </div>
  );
}
