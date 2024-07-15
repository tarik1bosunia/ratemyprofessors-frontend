import { RateProfessor, RatingHeader } from "@/components/ratings"



export default function Page(){
    return (
        <>
            <div className="fixed w-full h-20 bg-black text-white z-10">Navbar</div>
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