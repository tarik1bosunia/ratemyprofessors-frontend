"use client";

import { LuShare } from "react-icons/lu";
import { CiApple } from "react-icons/ci";
import { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import DynamicSVG from "./../DynamicSVG";

interface Props {
    params: {
      id: string;
    };
}
  
export default function Page({ params: { id } }: Props) {
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
            <div className="flex flex-col items-center relative mr-4 w-full font-medium">
                <div className="flex flex-col items-center justify-center bg-white rounded-lg h-full mt-3 p-4 w-full font-medium text-center">
                    <RxCross2 className="cursor-pointer absolute right-0 top-1 text-xl"/>
                    <div className="h-full relative">
                        <div className="font-bold text-xl">Alan Holyoak</div>
                        <div className="inline-block mt-4">
                            <div className="bg-[#7ff6c3] leading-[40px] min-h-[72px] min-w-[44px] p-4 w-[72px] text-[32px] font-extrabold">
                                5
                            </div>
                        </div>
                        <div className="text-gray-500 text-sm my-2 font-medium">Overall Quality</div>
                        <a className="text-black font-bold underline" href="/search/professors/1754?q=*&amp;did=6">
                            <strong>Biology</strong>
                        </a>
                        at
                        <a className="underline" href="/school/1754"><div className="text-sm font-bold">Brigham Young University - Idaho</div></a>
                    </div>
                    
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-lg mt-3  font-medium h-full pt-4 w-full">
                    <div className="text-base">
                        2335 Ratings
                    </div>
                    <div className="h-[325px] mb-6 w-[364px]">
                    <canvas role="img" height="406" width="455" className="block box-border h-[325px] w-[364px]">canvas</canvas>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full mt-3 p-4 bg-white rounded-md font-medium">
                    <div className="text-base">Level of Difficulty</div>
                    <div className="mt-4 min-w-[128px] text-center text-2xl  font-bold">2.3</div>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full mt-3 p-4 bg-white rounded-md font-medium">
                    <div className="text-base">Would Take Again</div>
                    <div className="mt-4 min-w-[128px] text-center text-2xl  font-bold">84.5%</div>
                </div>

                <div className="flex flex-col items-center justify-center w-full h-full mt-3 p-4 bg-white rounded-md font-medium">
                    <div className="text-base">Taken for Credit</div>
                    <div className="flex flex-row items-center justify-center mt-4 h-[124px] w-[224px]">
                        <DynamicSVG />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center w-full h-full mt-3 p-4 bg-white rounded-md font-medium">
                    <div className="text-base">Attendence mendatory</div>
                    <div className="flex flex-row items-center justify-center mt-4 h-[124px] w-[224px]">
                        <DynamicSVG />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center relative mr-4 w-full font-medium">
                <div className="flex flex-col items-center justify-center bg-white rounded-lg h-full mt-3 p-4 w-full font-medium text-center">
                    <RxCross2 className="cursor-pointer absolute right-0 top-1 text-xl"/>
                    <div className="h-full relative">
                        <div className="font-bold text-xl">Alan Holyoak</div>
                        <div className="inline-block mt-4">
                            <div className="bg-[#7ff6c3] leading-[40px] min-h-[72px] min-w-[44px] p-4 w-[72px] text-[32px] font-extrabold">
                                5
                            </div>
                        </div>
                        <div className="text-gray-500 text-sm my-2 font-medium">Overall Quality</div>
                        <a className="text-black font-bold underline" href="/search/professors/1754?q=*&amp;did=6">
                            <strong>Biology</strong>
                        </a>
                        at
                        <a className="underline" href="/school/1754"><div className="text-sm font-bold">Brigham Young University - Idaho</div></a>
                    </div>
                    
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-lg mt-3  font-medium h-full pt-4 w-full">
                    <div className="text-base">
                        2335 Ratings
                    </div>
                    <div className="h-[325px] mb-6 w-[364px]">
                    <canvas role="img" height="406" width="455" className="block box-border h-[325px] w-[364px]">canvas</canvas>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full mt-3 p-4 bg-white rounded-md font-medium">
                    <div className="text-base">Level of Difficulty</div>
                    <div className="mt-4 min-w-[128px] text-center text-2xl  font-bold">2.3</div>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full mt-3 p-4 bg-white rounded-md font-medium">
                    <div className="text-base">Would Take Again</div>
                    <div className="mt-4 min-w-[128px] text-center text-2xl  font-bold">84.5%</div>
                </div>

                <div className="flex flex-col items-center justify-center w-full h-full mt-3 p-4 bg-white rounded-md font-medium">
                    <div className="text-base">Taken for Credit</div>
                    <div className="flex flex-row items-center justify-center mt-4 h-[124px] w-[224px]">
                        <DynamicSVG />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center w-full h-full mt-3 p-4 bg-white rounded-md font-medium">
                    <div className="text-base">Attendence mendatory</div>
                    <div className="flex flex-row items-center justify-center mt-4 h-[124px] w-[224px]">
                        <DynamicSVG />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
