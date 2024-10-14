"use client";

import { LuShare } from "react-icons/lu";
import { CiApple } from "react-icons/ci";
import { useState } from "react";


import { ProfessorDetails, Search } from "@/components/ratings/compare";
import { useRouter } from "next/navigation";



interface Props {
    params: {
      id1: string;
      id2: string;
    };
}
  
export default function Page({ params: { id1, id2 } }: Props) {
  const router = useRouter()
  const [isFocused, setIsFocused] = useState(false);

  const onClose = (id?: string) => {

    if (id === id1) {
      // If id1 is closed, redirect to id2
      router.push(`/compare/professors/${id2}`);
    }
    
    else if(id === id2) {
      // If id2 is closed, redirect to id1
      router.push(`/compare/professors/${id1}`);
    }
    
    else {
      // If id2 is closed, redirect to id1
      router.push(`/compare/professors`);
    }
  };


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
          <Search id1={id1} id2={id2}/>
        
          
          <div className="flex flex-row justify-between w-full">
          <ProfessorDetails id={id1} onClose={onClose}/>
          <ProfessorDetails id={id2} onClose={onClose}/>
          
          </div>
        </div>
      </div>
    </div>
  );
}
