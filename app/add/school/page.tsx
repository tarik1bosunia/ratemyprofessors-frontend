import AddSchoolForm from "@/components/forms/add/AddSchoolForm";

export default function Page() {
  return (
    <div className="flex flex-col bg-white text-black">
      <div className="my-0 mx-auto w-full max-w-[1280px] text-left">
        <div className="text-[42px] leading-[60px] font-poppins font-black">
          Add a School
        </div>
        <div className="text-sm text-gray-600 italic font-light">
          Please use the search bar above to make sure that the school does not
          already exist.
        </div>
        <AddSchoolForm />
      </div>
      
    </div>
  );
}
