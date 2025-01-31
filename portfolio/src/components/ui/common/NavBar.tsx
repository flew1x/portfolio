import { FC } from "react";
import NavButton from "./NavButton";

const NavBar: FC = () => {
  return (
    <div className="w-full h-[3rem] flex justify-end">
      <div className="flex items-center space-x-4 md:w-[35rem] w-full px-[1rem] rounded-[1.43rem] border-[0.1rem] border-white justify-between">
        <NavButton text="ABOUT ME" />
        <NavButton text="RESUME" />
        <NavButton text="SKILLS" />
        <NavButton text="CONTACTS" />
      </div>
    </div>
  );
};

export default NavBar;
