import { RateSchool, RatingHeader } from "@/components/ratings";


export default function Page(){
    return (
        <>

            <RatingHeader
                schoolName="Southcentral Ken Community and Technical College"

                schoolLocation="SF, CA"
            />
            
            <RateSchool/>
        </>
    )
}