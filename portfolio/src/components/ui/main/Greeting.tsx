import { TypeAnimation } from "react-type-animation";

const Greeting = () => {
  return (
    <div className="flex flex-col mt-24 font-montserrat cursor-default text-white items-start max-w-full px-4 md:w-[64rem] font-medium text-left text-5xl leading-tight">
      <span className="hover:text-[#51FF25]">
        <TypeAnimation
          sequence={["HI, MY NAME IS VLADISLAV.", 1000]}
          speed={30}
          cursor={false}
          style={{
            fontSize: "clamp(40px, 5vw, 65px)",
            fontWeight: "500",
            transition: "color 0.5s ease-in-out",
            color: "white",
          }}
          wrapper="p"
        />
      </span>

      <div className="w-full text-left">
        <p>
          <span className="hover:text-[#51FF25]">
            <TypeAnimation
              cursor={false}
              sequence={[2000, "I AM A "]}
              speed={30}
              style={{
                fontSize: "clamp(40px, 5vw, 65px)",
                fontWeight: "700",
                transition: "color 0.5s ease-in-out",
                color: "white",
              }}
              wrapper="span"
            />
            <span className="text-[#51FF25] font-bold hover:text-white">
              <TypeAnimation
                cursor={false}
                sequence={[
                  2200,
                  "MIDDLE+ GOLANG DEVELOPER",
                  () => {
                    const ball = document.getElementById("ball");
                    if (ball) {
                      ball.classList.add(
                        "transition-transform",
                        "duration-500",
                        "bg-[#51FF25]"
                      );
                      setTimeout(() => {
                        ball.classList.add("scale-150", "bg-white");
                        setTimeout(() => {
                          ball.classList.remove("scale-150", "bg-[#51FF25]");
                        }, 500);
                      }, 50);
                    }
                  },
                ]}
                speed={30}
                style={{
                  fontSize: "clamp(40px, 5vw, 65px)",
                  fontWeight: "700",
                  transition: "color 0.5s ease-in-out",
                }}
                wrapper="span"
              />
            </span>
          </span>
        </p>
        <div
          id="ball"
          className="
          w-[4rem] 
          h-[4rem] 
          t-6 
          hover:bg-[#51FF25] 
          hover:scale-150 
          transition-all 
          duration-500 
          rounded-full 
          xl:absolute 
          mx-0
          my-2
          transform
          xl:-translate-x-1/2 
          z-10  
          xl:left-[43.5rem]
          xl:top-[20rem]"
        />
      </div>
    </div>
  );
};

export default Greeting;
