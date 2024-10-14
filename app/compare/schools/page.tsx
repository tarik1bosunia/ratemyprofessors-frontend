"use client";

import { CompareSchoolBody, CompareSchoolHeader } from "@/components/ratings/compare/school";
export default function Page() {
  return (
    <div className="my-0 mx-auto w-full max-w-[1280px] min-h-[calc(100vh-240px)] overflow-hidden">
      <div className="bg-[#f7f7f7] flex flex-col justify-start mb-[144px] max-w-[860px] min-h-[379px] p-[24px]">
      <CompareSchoolHeader />
        
        <CompareSchoolBody />

      </div>
    </div>
  );
}
