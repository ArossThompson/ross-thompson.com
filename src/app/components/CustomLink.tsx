import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const CustomLink = ({
  text,
  href,
  icon,
  link,
}: {
  text: string;
  href: string;
  icon: IconProp;
  link: boolean;
}) => {
  const linkClasses =
    "flex h-[50px] p-0 bg-[#009578] hover:bg-[#008168] active:bg-[#006e58] rounded-[5px] overflow-hidden border-none outline-none text-white text-lg font-semibold transition-colors duration-300 ease-in-out ";

  return (
    <button>
      {link ? (
        <Link className={linkClasses} href={href}>
          <span className="flex items-center h-full px-8">{text}</span>
          <span className="flex items-center h-full px-4 bg-[#006e58]">
            <FontAwesomeIcon icon={icon} />
          </span>
        </Link>
      ) : (
        <a className={linkClasses} href={href} download>
          <span className="flex items-center h-full px-8">{text}</span>
          <span className="flex items-center h-full px-4 bg-[#006e58]">
            <FontAwesomeIcon icon={icon} />
          </span>
        </a>
      )}
    </button>
  );
};

// TODO: make the download attribute optional
