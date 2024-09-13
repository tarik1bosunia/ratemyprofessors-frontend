import { RateProfessor, RatingHeader } from "@/components/ratings"



export default function Page(){
    return (
        <>
            <RatingHeader
                firstName="first name"
                lastName="last name"
                courseName="History"
                school="George Washington University"
            />
            
            <RateProfessor/>
        </>
    )

}