"use client";
import { useShowSchoolRatings } from "@/hooks";
import CategoryRow from "./CategoryRow";
import CompareSchoolHeaderBox from "./CompareSchoolHeaderBox";
import CompareSchoolHeaderSearchBox from "./CompareSchoolSearchBox";
import { useRouter } from "next/navigation";
import { NO_DATA_AVAILABLE } from "@/constants";

interface Props {
  id1?: string;
  id2?: string;
}

type Config = {
  label: string;
  value1: number | string;
  value2: number | string;
};

export default function CompareSchoolBody({ id1, id2 }: Props) {
  const router = useRouter()
  // Fetch data for both schools unconditionally
  const {
    averageRatings: averageRatings1,
    schoolRatings: schoolRatings1,
    overallQuality: overallQuality1,
  } = useShowSchoolRatings(Number(id1) || 0); // Default to 0 if id1 is missing

  

  const {
    averageRatings: averageRatings2,
    schoolRatings: schoolRatings2,
    overallQuality: overallQuality2,
  } = useShowSchoolRatings(Number(id2) || 0); // Default to 0 if id2 is missing

  const {
    safety: safety1 = NO_DATA_AVAILABLE,
    oppputunites: opppurtunites1 = NO_DATA_AVAILABLE,
    location: location1 = NO_DATA_AVAILABLE,
    facilities: facilities1 = NO_DATA_AVAILABLE,
    happiness: happiness1 = NO_DATA_AVAILABLE,
    reputation: reputation1 = NO_DATA_AVAILABLE,
    clubs: clubs1 = NO_DATA_AVAILABLE,
    internet: internet1 = NO_DATA_AVAILABLE,
    social: social1 = NO_DATA_AVAILABLE,
    food: food1 = NO_DATA_AVAILABLE,
  } = averageRatings1 || {};

  const {
    safety: safety2 = NO_DATA_AVAILABLE,
    oppputunites: opppurtunites2 = NO_DATA_AVAILABLE,
    location: location2 = NO_DATA_AVAILABLE,
    facilities: facilities2 = NO_DATA_AVAILABLE,
    happiness: happiness2 = NO_DATA_AVAILABLE,
    reputation: reputation2 = NO_DATA_AVAILABLE,
    clubs: clubs2 = NO_DATA_AVAILABLE,
    internet: internet2 = NO_DATA_AVAILABLE,
    social: social2 = NO_DATA_AVAILABLE,
    food: food2 = NO_DATA_AVAILABLE,
  } = averageRatings2 || {};

  const config: Config[] = [
    {
      label: "Internet",
      value1: internet1,
      value2: internet2,
    },
    {
      label: "Opportunities",
      value1: opppurtunites1,
      value2: opppurtunites2,
    },
    {
      label: "Location",
      value1: location1,
      value2: location2,
    },
    {
      label: "Facilites",
      value1: facilities1,
      value2: facilities2,
    },
    {
      label: "Happiness",
      value1: happiness1,
      value2: happiness2,
    },
    {
      label: "Reputation",
      value1: reputation1,
      value2: reputation2,
    },
    {
      label: "Clubs",
      value1: clubs1,
      value2: clubs2,
    },
    {
      label: "Social",
      value1: social1,
      value2: social2,
    },
    {
      label: "Food",
      value1: food1,
      value2: food2,
    },
    {
      label: "Safety",
      value1: safety1,
      value2: safety2,
    },
  ];

  // console.log(averageRatings1)

  const handdleChangeSchoolButtonClick = ()=> {
    router.push(`/compare/schools/${id1}`)
  }
  return (
    <div className="flex flex-col mx-2 mb-8 max-w-[888px]">
      <div className="flex flex-row w-full items-center">
        {/* First School Header */}
        {
          id1 ? <CompareSchoolHeaderBox id={id1} overallQuality={overallQuality1}/>
            : <CompareSchoolHeaderSearchBox id1={id1} id2={id2}/>
        }
        
        {/* Second School Header (if id2 exists) */}
        {
          id2  ? <CompareSchoolHeaderBox id={id2} overallQuality={overallQuality1} showChangeSchoolButton={true} handdleChangeSchoolButtonClick={handdleChangeSchoolButtonClick}/>
              : <CompareSchoolHeaderSearchBox id1={id1} id2={id2}/>
        }
      </div>

      {/* Render the category rows for comparison */}
      {config.map((item, index) => (
        <CategoryRow
          key={index}
          label={item.label}
          value1={item.value1}
          value2={item.value2}
        />
      ))}
    </div>
  );
}
