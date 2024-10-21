import Image from "next/image";
import me from "./assets/me.png";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <div className="relative">
          <Image
            className="rounded-full border-solid border-4 border-sky-500"
            src={me}
            width={150}
            alt="Picture of me on top of Mt Batur - Bali"
          />
          <p className="absolute right-1 bottom-1 text-4xl">👋</p>
        </div>
        <h1 className="text-3xl">
          <strong className="text-sky-500">Ross Thompson</strong> - Senior
          Software Engineer
        </h1>
      </main>
    </div>
  );
}
