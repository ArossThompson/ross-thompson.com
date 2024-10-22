import Link from "next/link";

export const CustomLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      className="flex items-center justify-center gap-2 rounded-full border border-solid border-transparent transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 min-w-[170px]"
      href={href}
    >
      <span>{text}</span>
    </Link>
  );
};
