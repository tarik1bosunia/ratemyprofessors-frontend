import { useProfessorRatingsData } from "@/hooks";
import { RxCross2 } from "react-icons/rx";
import RatingChart from "../RatingChart";
import { PieChart } from "@/components/charts/PieChart";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  onClose: {
    (): void; // overload for no argument
    (id: string): void; // overload for one argument
  };
}


export default function ProfessorDetails({ id, onClose }: Props) {
  const router = useRouter()
  const { data, error, isLoading } = useProfessorRatingsData(id);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>error feaching professor data</div>;
  }
  const {
    ratings,
    professor,
    take_again_percentage,
    avg_difficulty,
    rating_counts,
    total_ratings_count,
    
    top_tags,
  } = data;


  const countForCredit = ratings.reduce(
    (acc, item) => {
      if (item.was_class_taken_for_credit) {
        acc.takenForCredit += 1;
      } else {
        acc.notTakenForCredit += 1;
      }
      return acc;
    },
    { takenForCredit: 0, notTakenForCredit: 0 }
  );
  const countAttndenceMandatory = ratings.reduce(
    (acc, item) => {
      if (item.was_attendance_mandatory) {
        acc.mendatory += 1;
      } else {
        acc.notMendatory += 1;
      }
      return acc;
    },
    { mendatory: 0, notMendatory: 0 }
  );

  console.log(data)

  const chartDataTakeAgain = [
    { name: "yes", value: countForCredit.takenForCredit, fill: "var(--color-yes)" },
    { name: "no", value: countForCredit.notTakenForCredit, fill: "var(--color-no)" },
    { name: "na", value: 0, fill: "var(--color-na)" },
  ]
  
  const chartConfigTakeAgain = {
    value: {
      label: "value",
    },
    yes: {
      label: "Yes",
      color: "hsl(var(--chart-1))",
    },
    no: {
      label: "No",
      color: "hsl(var(--chart-2))",
    },
    na: {
      label: "N\A",
      color: "hsl(var(--chart-3))",
    },
  } 


  const chartDataAddendenceMendatory = [
    { name: "yes", value: countAttndenceMandatory.mendatory, fill: "var(--color-yes)" },
    { name: "no", value: countAttndenceMandatory.notMendatory, fill: "var(--color-no)" },
    { name: "na", value: 0, fill: "var(--color-na)" },
  ]
  
  const chartConfigAddendenceMendatory = {
    value: {
      label: "value",
    },
    yes: {
      label: "Yes",
      color: "hsl(var(--chart-1))",
    },
    no: {
      label: "No",
      color: "hsl(var(--chart-2))",
    },
    na: {
      label: "N\A",
      color: "hsl(var(--chart-3))",
    },
  } 

  const handleClose = () => {
    // Check the number of arguments expected
    if (onClose.length === 0) {
      onClose(); // Call without arguments
    } else {
      onClose(id); // Call with id
    }
  };
  

  return (
    <div className="flex flex-col items-center relative mr-4 w-full font-medium">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg h-full mt-3 p-4 w-full font-medium text-center">
        <button onClick={handleClose}>
          <RxCross2 className="cursor-pointer absolute right-0 top-1 text-xl" />
        </button>
        
        <div className="h-full relative">
          <div className="font-bold text-xl">{professor.first_name } {professor.last_name}</div>
          <div className="inline-block mt-4">
            <div className="bg-[#7ff6c3] leading-[40px] min-h-[72px] min-w-[44px] p-4 w-[72px] text-[32px] font-extrabold">
              5
            </div>
          </div>
          <div className="text-gray-500 text-sm my-2 font-medium">
            Overall Quality
          </div>
          <a
            className="text-black font-bold underline"
            href="/search/professors/1754?q=*&amp;did=6"
          >
            <strong>{professor.department}</strong>
          </a>
          at
          <a className="underline" href="/school/1754">
            <div className="text-sm font-bold">
              {professor.name_of_school}
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white rounded-lg mt-3  font-medium h-full pt-4 w-full">
        <div className="text-base">{total_ratings_count} Ratings</div>
        <RatingChart ratings={ratings}/>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full mt-3 p-4 bg-white rounded-md font-medium">
        <div className="text-base">Level of Difficulty</div>
        <div className="mt-4 min-w-[128px] text-center text-2xl  font-bold">
          {avg_difficulty}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full mt-3 p-4 bg-white rounded-md font-medium">
        <div className="text-base">Would Take Again</div>
        <div className="mt-4 min-w-[128px] text-center text-2xl  font-bold">
          {take_again_percentage}%
        </div>
      </div>
      <div className="mt-3"></div>
      <PieChart chartData={chartDataTakeAgain} chartConfig={chartConfigTakeAgain} title="Taken For Credit"/>
      <PieChart chartData={chartDataAddendenceMendatory} chartConfig={chartConfigAddendenceMendatory} title="Attendence mendatory"/>
      
    </div>
  );
}
