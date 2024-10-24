import { Nav } from "../Nav";
import { CustomLink } from "../CustomLink";
import { EmojiImg } from "../EmojiImg";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <section id="home" className="scroll-snap-section">
      <Nav />
      <main className="flex flex-col items-center justify-center min-h-[850px] p-8 pb-20 sm:gap-16 gap-8 sm:p-20 bg-[#001f3f] text-[#f3f4f6]">
        <EmojiImg src="/me.png" alt="Picture of me on top of Mt Batur - Bali" />
        <div className="flex flex-col text-center gap-4 max-w-2xl items-center">
          <h1 className="text-3xl font-bold">
            <strong className="text-sky-500">Ross Thompson</strong> - Senior
            Software Engineer
          </h1>
          <p className="text-lg font-light pt-6 max-w-xl">
            Hello, I&apos;m Ross. I&apos;m a{" "}
            <strong className="text-sky-500 font-bold">
              senior software engineer
            </strong>{" "}
            at UrbanChain in Manchester. I&apos;m currently working with
            React.js, Typescript, Node.js, and GraphQL.
          </p>
        </div>
        <div className="flex sm:gap-16 gap-4 items-center flex-col sm:flex-row">
          <CustomLink
            text="Download my CV"
            href="/updatedcv.pdf"
            icon={faDownload}
            link={false}
          />

          <CustomLink
            text="LinkedIn"
            href="https://www.linkedin.com/in/rossathompson/"
            icon={faLinkedin}
            link={true}
          />
        </div>
      </main>
    </section>
  );
};
