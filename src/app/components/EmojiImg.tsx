import Image from "next/image";

export const EmojiImg = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative">
      <Image
        className="rounded-full border-solid border-4 border-sky-500"
        src={src}
        width={150}
        height={150}
        alt={alt}
      />
      <p className="absolute right-1 bottom-1 text-4xl">👋</p>
    </div>
  );
};
