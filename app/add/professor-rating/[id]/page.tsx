'use client'
import { RateProfessor, RatingHeader } from "@/components/ratings"
import { useProfessorRatingsData } from "@/hooks"

interface Props{
    params: {
        id: string;
    }
}

export default function Page({params: {id}}: Props){
    const {data, error, isLoading} = useProfessorRatingsData(id) 


    if(isLoading){
      return (
        <div>Loading</div>
      )
    }
    if(error){
      return (
        <div>error feaching professor data</div>
      )
    }
    // interface Professor {
    //     id: number;
    //     name_of_school: string;
    //     first_name: string;
    //     middle_name: string;
    //     last_name: string;
    //     department: number;
    //     directory_listing_of_professor: string;
    //   }
    const {name_of_school, first_name, last_name, department} = data.professor
    return (
        <>
            <RatingHeader
                firstName= {first_name}
                lastName={last_name}
                courseName={ String(department)}
                name_of_school={name_of_school}
            />
            
            <RateProfessor/>
        </>
    )

}