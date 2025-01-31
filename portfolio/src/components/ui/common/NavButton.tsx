const NavButton = ({ text }: { text: string }) => {
  return (
    <div className="cursor-pointer hover:text-black w-full h-full flex items-center justify-center text-white transition-all duration-500 hover:bg-[#51FF25] hover:rounded-full hover:shadow-lg hover:shadow-[#51FF25]">
      <p className="font-semibold text-[16px]">{text}</p>
    </div>
  );
};

export default NavButton;
