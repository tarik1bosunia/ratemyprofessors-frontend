import { useGetSchoolQuery } from "@/redux/services/public";
import { useRouter } from "next/navigation";

interface Props {
  id: string,
  overallQuality: number | string
  showChangeSchoolButton?: boolean
  handdleChangeSchoolButtonClick?: () => void
}



export default function CompareSchoolHeaderBox({overallQuality, id, showChangeSchoolButton = false, handdleChangeSchoolButtonClick}: Props) {
 
  const router = useRouter()
  const { data: schooldetails, isLoading: schoolIsLoading } = useGetSchoolQuery(id);

  if (schoolIsLoading) {
    return (<div>Loading...</div>); // Display a loading indicator or placeholder
  }

  if (!schooldetails) {
    return (<div>this school is not available.</div>); // Handle case where details are not available
  }
  const {name_of_school, location} = schooldetails;

  return (
    <div className="flex flex-col items-center bg-[#f7f7f7] mx-0 mb-3 mr-[3px] max-w-[444px] min-h-[205px] p-2.5 text-center w-full">
      
      <div className="bg-[#fff170] leading-[40px] min-h-[72px] min-w-[44px] p-4 w-[72px] text-[32px] font-poppins font-extrabold">
      {Number(overallQuality).toFixed(1)}
        
        
      </div>
      
      <div className="text-xs mt-1 font-bold">OVERALL</div>
      <div className="text-xs mt-1">187 Ratings</div>
      <a href="/school/2" className="no-underline items-center hover:underline">
        <div className="text-xl mt-6 font-black">{name_of_school}</div>
      </a>
      {
        showChangeSchoolButton &&
        (<button onClick={handdleChangeSchoolButtonClick} className="bg-[rgb(228,228,228)] border inherit rounded-[33px] cursor-pointer text-[9px] mx-auto my-[16px] p-[8px]">
          Change School
        </button>)
      }
    </div>
  );
}
