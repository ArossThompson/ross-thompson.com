import Link from "next/link";

export default function Experience() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <ul className="flex flex-row gap-24">
          <li>
            <h2 className="text-xl">Senior software engineer</h2>
            <hr />
            <p>Company: IRIS Software Group</p>
            <p>Location: Manchester, UK</p>
            <p>Duration: November 2023 - June 2024</p>
            <h3>Responsibilites:</h3>
            <ul>
              <li>Lead a team of 5 developers</li>
              <li>Developed a new product</li>
              <li>Managed the project</li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl">Software engineer</h2>
            <p>Company: IRIS Software Group</p>
            <p>Location: Manchester, UK</p>
            <p>Duration: May 2021 - November 2023</p>
            <h3>Responsibilites:</h3>
            <ul>
              <li>Lead a team of 5 developers</li>
              <li>Developed a new product</li>
              <li>Managed the project</li>
            </ul>
          </li>

          <li>
            <h2 className="text-xl">Software Engineer</h2>
            <p>Company: Co-operative Bank</p>
            <p>Location: Manchester, UK</p>
            <p>Duration: MArch 2019 - May 2021</p>
          </li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/"
          >
            Go Back
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/about-me"
          >
            About me
          </Link>
        </div>
      </main>
    </div>
  );
}
