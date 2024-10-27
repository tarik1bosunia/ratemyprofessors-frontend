import { School } from "@/types";

interface Props {
  school: School;
}

export default function SchoolRow({ school }: Props) {
  return (
    <>
      <div className="flex flex-col mr-10">
        <div className="text-xs font-semibold mb-1 uppercase">Quality</div>
        <div className="self-center bg-yellow-300 h-16 leading-9 mb-2 px-2.5 py-3.5 w-18 text-4xl font-extrabold">
          3.3
        </div>
        <div className="text-gray-700 leading-4 whitespace-nowrap">
          614 ratings
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="text-2xl my-5 mb-3.5 max-w-xl text-left w-full font-poppins font-extrabold">
          {school.name_of_school}
        </div>
        <div className="absolute text-right right-5 top-5">
          {school.location}
        </div>
      </div>
    </>
  );
}
