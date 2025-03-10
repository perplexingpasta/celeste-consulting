const MagicButtonv2 = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-full w-full overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" /> */}
      <span
        className={`mx-auto inline-flex h-full max-w-[75%] cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purpledark p-4 text-sm uppercase tracking-widest text-white transition duration-300 ease-in-out hover:scale-110 active:scale-90 md:max-w-full md:px-12 md:text-lg ${otherClasses}`}
      >
        {/* {position === "left" && icon} */}
        {title}
        {/* {position === "right" && icon} */}
      </span>
    </button>
  );
};

export default MagicButtonv2;
