import { RateSchool, RatingHeader } from "@/components/ratings";


export default function Page(){
    return (
        <>
            <div className="fixed w-full h-20 bg-black text-white z-10">Navbar</div>
            <RatingHeader
                schoolName="Southcentral Ken Community and Technical College"

                schoolLocation="SF, CA"
            />
            
            <RateSchool/>
        </>
    )
}