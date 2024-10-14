import CategoryRow from "./CategoryRow"
import CompareSchoolHeaderBox from "./CompareSchoolHeaderBox"

export default function CompareSchoolBody(){
    return (
        <div className="flex flex-col mx-2 mb-8 max-w-[888px]">
          <div className="flex flex-row w-full items-center">
            <CompareSchoolHeaderBox /> 
            <CompareSchoolHeaderBox />
          </div>

           <CategoryRow /> 
           <CategoryRow /> 
           <CategoryRow /> 
           <CategoryRow /> 
           <CategoryRow /> 
           <CategoryRow /> 
        </div>
    )
}