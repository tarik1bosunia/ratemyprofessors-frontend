import { Professor } from "@/types";


interface Props {
  professor: Professor;
}

export default function SchoolRow({ professor }: Props) {
  return (
    <div

      className="mb-6 flex items-center bg-gray-200 px-6 py-3 relative no-underline w-full"
    >
      <div className="flex flex-col mr-10">
        <div className="text-xs font-semibold mb-1 uppercase">quality</div>
        <div className="self-center bg-yellow-300 h-16 leading-9 mb-2 px-2.5 py-3.5 w-18 text-4xl font-extrabold">
          3.3
        </div>
        <div className="text-gray-700 leading-4 whitespace-nowrap">
          614 ratings
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="text-2xl my-5 mb-3.5 max-w-xl text-left w-full font-poppins font-extrabold">
          {professor.first_name} {professor.last_name}
        </div>
        <div className="absolute text-right right-5 top-5">
          {" "}
          {professor.name_of_school}{" "}
        </div>
      </div>
    </div>
  );
}
