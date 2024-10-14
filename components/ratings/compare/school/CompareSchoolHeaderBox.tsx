import SchoolGradeSquareContainer from "./SchoolGradeSquareContainer";

export default function CompareSchoolHeaderBox() {
  return (
    <div className="flex flex-col items-center bg-[#f7f7f7] mx-0 mb-3 mr-[3px] max-w-[444px] min-h-[205px] p-2.5 text-center w-full">
      <SchoolGradeSquareContainer />
      <div className="text-xs mt-1 font-bold">OVERALL</div>
      <div className="text-xs mt-1">187 Ratings</div>
      <a href="/school/2" className="no-underline items-center hover:underline">
        <div className="text-xl mt-6 font-black">Pennsylvania State University - Abington</div>
      </a>
      <button className="bg-[rgb(228,228,228)] border inherit rounded-[33px] cursor-pointer text-[9px] mx-auto my-[16px] p-[8px]">
        Change School
      </button>
      <input type="text" className="placeholder:[rgb(158,158,158)] bg-[rgb(255,255,255)]  text-center h-[36px] rounded-full border border-[rgb(228,228,228)] leading-[36px] mt-[24px] flex text-[20px] max-w-[545px] outline-none w-full"/>
    </div>
  );
}
