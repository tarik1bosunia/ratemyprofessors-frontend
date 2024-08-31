import { FaArrowDown } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

export default function TeacherInfo() {
  return (
    <div className="flex-[1_0_40%] p-[22px_0px] text-left">
      <div>
        <div className="flex justify-between">
          <div className="flex">
            <div className="text-7xl mr-3 font-black">3.6</div>
            <div className="text-[rgb(152,152,152)] text-[18px] font-bold relative top-[15px]">
              / 5
            </div>
          </div>
          <a
            className="JumpToRatings block md:hidden text-xs  font-bold h-full no-underline"
            href="/professor/1#ratingsList"
          >
            <span>Jump To Ratings</span>
            <FaArrowDown />
          </a>
        </div>
        <div className="mb-6 mt-3 font-bold">
          <div>
            Overall Quality Based on&nbsp;
            <a href="#ratingsList" className="underline">
              1966&nbsp;ratings
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="text-[40px] hyphens-auto break-words pb-[10px] font-black">
          <span>Andrew &nbsp;</span>
          <span>Brush &nbsp;</span>
          <button className="ml-2 bg-none border-0 cursor-default h-fit outline-none p-0 w-fit">
            <FaRegBookmark className="h-8 w-8 text-customGray" />
          </button>
        </div>
        <div className="w-[330px] max-w-full pb-10">
          <span>
            Professor in the
            <a
              className="font-bold"
              href="/search/professors/4413?q=*&amp;did=38"
            >
              {" "}
              &nbsp;
              <b>Mathematics department</b>
            </a>{" "}
            &nbsp; at &nbsp;
          </span>

          <a href="/school/4413" className="font-bold">
            Estrella Mountain Community College
          </a>
        </div>
      </div>

      <div className="flex mb-6">
        <div className="flex flex-col items-center p-[0px_12px_16px_0px]">
          <div className="text-black mb-1 text-3xl font-black">74%</div>
          <div className="font-medium">Would take again</div>
        </div>

        <div className="flex flex-col items-center border-l border-l-[rgb(21,21,21)] p-[0px_0px_16px_12px]">
          <div className="text-black mb-1 text-3xl font-black">3.6</div>
          <div className="font-medium">Level of Difficulty</div>
        </div>
      </div>

      <div className="flex flex-row justify-start">
        <a
          href="/add/professor-rating/188"
          className="mb-6 w-fit bg-[#0055fd] border border-[#0021ff] rounded-full text-white flex font-bold justify-center px-[46px] py-[11px] transition-transform duration-200 hover:bg-[#0021ff]"
        >
          <button className="flex items-center bg-none border-0 cursor-pointer outline-none p-0 text-white">
            <span className="my-0 mx-1">Rate</span>
            <FaArrowRight />
          </button>
        </a>
        <a
          href="/compare/professors/889563"
          className="mb-[24px] ml-[12px] no-underline w-fit bg-[#ffffff] border border-[#0021ff] rounded-full text-[#0021ff] flex font-bold justify-center leading-[1.54] px-[46px] py-[11px] transition-transform duration-200 hover:bg-[#0021ff] hover:transform-none hover:cursor-pointer hover:text-white"
        >
          Compare
        </a>
      </div>

      <div className="flex">
        <div className="cursor-pointer inline-block font-bold mb-6 pr-3 underline">
          I&apos;m Professor Burch
        </div>
      </div>

      <div className="text-left">
        <div className="pb-4 text-base font-bold">
          Professor Burch&apos;s Top Tags
        </div>
        <div className="flex flex-wrap">
          <span className="bg-[#f1f1f1] rounded-[14.5px] font-condensed mr-[16px] mb-[8px] p-[8px_16px] text-center uppercase font-bold">Lots of homework</span>
          <span className="bg-[#f1f1f1] rounded-[14.5px] font-condensed mr-[16px] mb-[8px] p-[8px_16px] text-center uppercase font-bold">Clear grading criteria</span>
          <span className="bg-[#f1f1f1] rounded-[14.5px] font-condensed mr-[16px] mb-[8px] p-[8px_16px] text-center uppercase font-bold">Tough grader</span>
          <span className="bg-[#f1f1f1] rounded-[14.5px] font-condensed mr-[16px] mb-[8px] p-[8px_16px] text-center uppercase font-bold">Skip class? You won&apos;t pass.</span>
          <span className="bg-[#f1f1f1] rounded-[14.5px] font-condensed mr-[16px] mb-[8px] p-[8px_16px] text-center uppercase font-bold">Gives good feedback</span>
        </div>
      </div>
    </div>
  );
}
