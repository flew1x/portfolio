import NavBar from "../ui/common/NavBar";
import Greeting from "../ui/main/Greeting";
import ProfilePicture from "@/assets/images/photo.svg";

const FirstPage = () => {
  return (
    <div className="w-full mt-11 sm:mt-0">
      <NavBar />
      <Greeting />
      <div className="relative mt-[1rem] sm:mt-[4rem] md:mt-[4rem] lg:mt-[4rem] xl:mt-[8rem]">
        <div className="hidden sm:hidden md:block lg:block absolute top-[-1rem] h-[20rem] ml-[-30rem] xl:ml-[-15rem] lg:ml-[-30rem] md:ml-[-35rem] w-[70rem] md:w-[64rem] rounded-[1.81rem] border-[0.1rem] border-white transition-transform duration-500 hover:border-[#51FF25]" />
        <div className="flex justify-center xl:justify-end md:justify-end">
          <img
            src={ProfilePicture.src}
            alt="profile"
            className="h-[33.6rem] w-[24.1rem] xl:-mt-[7rem] mt-[2rem] lg:-mt-[3rem] md:-mt-[2rem] sm:mt-[0rem] xl:h-[33.6rem] lg:h-[33.6rem] md:h-[35rem] sm:h-[40rem] xl:w-[24.1rem] lg:w-[24.1rem] md:w-[24rem] sm:w-[40rem] sm:mr-[2rem] lg:mr-[3rem] xl:mr-[0rem] rounded-[1.81rem] border-[0.1rem] border-white transition-transform duration-500 hover:border-[#51FF25]"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
