import "@/assets/styles/globals.css";

import FirstPage from "@/components/main/First";
import Meta from "@/components/ui/Meta";

const MainPage = () => {
  return (
    <Meta title="Portfolio">
      <div className="w-full min-h-screen text-center bg-black sm:bg-black">
        <div className="max-w-[1240px] w-full min-h-full mx-auto p-2 flex justify-center items-center">
          <FirstPage />
        </div>
      </div>
    </Meta>
  );
};

export default MainPage;
