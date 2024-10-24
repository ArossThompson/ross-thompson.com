export const Button = ({
  text,
  type,
}: {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
}) => {
  const btnClasses =
    "flex justify-center h-[50px] p-0 bg-[#009578] hover:bg-[#008168] active:bg-[#006e58] rounded-[5px] overflow-hidden border-none outline-none text-white text-lg font-semibold transition-colors duration-300 ease-in-out ";
  return (
    <button type={type} className={btnClasses}>
      <span className="flex items-center h-full px-8">{text}</span>
    </button>
  );
};
