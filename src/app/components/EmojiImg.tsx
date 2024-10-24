import Image from "next/image";

export const EmojiImg = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative">
      <Image
        className="rounded-full border-solid border-4 border-sky-500 bg-gradient-to-br from-[#82cfff] to-[#001f3f] sm:w-[250px] sm:h-[250px] w-[150px] h-[150px]"
        src={src}
        width={250}
        height={250}
        alt={alt}
      />
      <p className="absolute right-4 bottom-1 text-[50px]">👋</p>
    </div>
  );
};
