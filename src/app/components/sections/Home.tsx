import { Nav } from "../Nav";
import { CustomLink } from "../CustomLink";
import { EmojiImg } from "../EmojiImg";

export const Home = () => {
  return (
    <section id="home" className="scroll-snap-section">
      <Nav />
      <main className="flex flex-col items-center justify-center min-h-[850px] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#1A1A2E] text-[#EAEAEA]">
        <EmojiImg src="/me.png" alt="Picture of me on top of Mt Batur - Bali" />
        <div className="flex flex-col text-center gap-4 max-w-2xl">
          <h1 className="text-3xl">
            <strong className="text-sky-500">Ross Thompson</strong> - Senior
            Software Engineer
          </h1>
          <p className="text-xl">
            Hello, I&apos;m Ross. I&apos;m a{" "}
            <strong className="text-sky-500">senior software engineer</strong>{" "}
            at UrbanChain in Manchester. I&apos;m currently working with
            React.js, Typescript, Node.js, and GraphQL.
          </p>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="flex items-center justify-center gap-2 rounded-full border border-solid border-transparent transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/updatedcv.pdf"
            download
          >
            <span className="text-xs sm:text-base">Download my CV</span>
          </a>
          <CustomLink
            text="LinkedIn"
            href="https://www.linkedin.com/in/rossathompson/"
          />
        </div>
      </main>
    </section>
  );
};
