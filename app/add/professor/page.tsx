import AddProfessorForm from "@/components/forms/add/AddProfessorForm";

export default function Page() {
  return (
    <div className="flex flex-col bg-white dark:bg-black text-black dark:text-white">
      <div className="my-0 mx-auto w-full max-w-[1280px] text-left">
        <div className="text-[42px] leading-[60px] font-poppins font-black dark:text-white">
        Add a Professor
        </div>
        <div className="text-sm text-gray-600 italic font-light dark:text-white">
        Please use the search bar above to make sure that the professor does not already exist at this school.
        </div>
        <AddProfessorForm />
      </div>
      
    </div>
  );
}
