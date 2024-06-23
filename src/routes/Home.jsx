import React from "react";
import dog2 from "../assets/images/dog2.png";
import cat1 from "../assets/images/cat1.jpg";

export default function Home() {
  return (
    <div className="min-h-screen px-40 pt-40 bg-white">
      <div className="text-5xl font-medium">{"(^⁠_⁠^)"}</div>
      <div className="flex flex-row relative gap-10">
        <div className="w-fit h-fit bg-black rounded-xl mt-20">
          <img
            src={cat1}
            className="w-[80rem] h-[30rem] rounded-xl  object-cover -translate-x-1 -translate-y-1"
          />
        </div>
        {/* <div
          className="w-fit h-fit bg-black rounded-xl mt-40"
          style={{
            clipPath:
              " polygon(0 0, 70% 0, 70% 33%, 100% 33%, 100% 100%, 40% 100%, 40% 46%, 0 46%)",
          }}
        >
          <img
            src={cat1}
            className="w-[40rem] h-[20rem] rounded-xl object-cover -translate-x-1 -translate-y-1"
            style={{
              clipPath:
                " polygon(0 0, 70% 0, 70% 33%, 100% 33%, 100% 100%, 40% 100%, 40% 46%, 0 46%)",
              borderRadius: "20px 20px 20px 20px;",
            }}
          />
        </div> */}
        <div>
          <div className="w-[60vw] ml-auto flex flex-col text-right gap-5">
            <div className="flex items-start ml-auto gap-5">
              <span className="text-3xl font-semibold font-brice-semibold ">
                Your
              </span>
              <span className="text-8xl font-semibold font-brice-semibold">
                Pets
              </span>
            </div>
            <span className="text-8xl font-semibold font-brice-semibold mr-20">
              Bestfriend Awaits
            </span>
          </div>
          <div className="flex flex-row gap-20 items-center mt-20">
            <div className="w-fit h-fit bg-black rounded-xl">
              <img
                src={dog2}
                className="w-[40rem] h-[10rem] rounded-xl bg-[#ffafed] object-contain -translate-x-1 -translate-y-1"
              />
            </div>
            <div className=" ml-auto text-lg font-medium">
              Welcome to PawPals, where your pet's happiness and social life
              take center stage! At PawPals, we believe that every pet deserves
              a best friend and plenty of playtime. Our platform connects pet
              owners and their furry friends with local play dates, ensuring
              that your pets enjoy safe, fun, and engaging experiences.
            </div>
            <div className="w-fit h-fit bg-black rounded-full">
              <button className="border-2 border-black bg-white px-8 py-2 h-fit rounded-full -translate-x-[2px] -translate-y-[2px]">
                Match
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
