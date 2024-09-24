"use client";

import { LuShare } from "react-icons/lu";
import { CiApple } from "react-icons/ci";
import { useState } from "react";
export default function Page() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="my-0 mx-auto w-full max-w-[1280px] min-h-[calc(100vh-240px)] overflow-hidden">
      <div className="bg-[#f7f7f7] flex flex-col justify-start mb-[144px] max-w-[860px] min-h-[379px] p-[24px]">
        <div className="flex flex-row items-center justify-between">
          <div className="flex text-2xl font-bold">Compare Professors</div>
          <div className="flex flex-row justify-around">
            <button className="flex items-center bg-none outline-none border border-inherit rounded-[33px] cursor-pointer text-base mr-4 py-2 px-4 bg-[#e4e4e4] text-[#9e9e9e]">
              <LuShare />
              <span className="my-0 mx-1 font-bold">Share</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full">
          <form action="" className="mb-4 text-left w-full">
            <div>
              <div className="relative w-full">
                <div className="absolute top-4 left-7 w-fit z-10">
                  <CiApple className="text-2xl" />
                </div>
                <div
                  className={`relative w-full max-w-none rounded-[32px] ${
                    isFocused ? "shadow-[0_2px_2px_rgba(126,126,126,0.25)]" : ""
                  }`}
                >
                  <input
                    type="text"
                    className="border-0 text-[rgb(49,49,49)] text-[20px] h-[56px] outline-none p-[16px_60px] w-full rounded-[43px] max-w-none"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col items-center justify-center bg-white border border-dashed border-gray-400 h-[206px] mr-4 mt-3 w-full  font-medium">
              <div className="text-gray-500 text-[20px] max-w-[236px] text-center">Look up a professor to add to comparison</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white border border-dashed border-gray-400 h-[206px] mr-0 mt-3 w-full  font-medium">
              <div className="text-gray-500 text-[20px] max-w-[236px] text-center">Look up a professor to add to comparison</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
