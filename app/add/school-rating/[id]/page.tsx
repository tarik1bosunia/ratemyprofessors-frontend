'use client'
import { RateSchool, RatingHeader } from "@/components/ratings";
import { useGetSchoolQuery } from "@/redux/services/public";

interface Props{
    params: {
        id: string;
    }
}

export default function Page({params}: Props){
    const {id} = params;

    const { data: schooldetails, isLoading: schoolIsLoading } = useGetSchoolQuery(id);

    if (schoolIsLoading) {
      return (<div>Loading...</div>); // Display a loading indicator or placeholder
    }
  
    if (!schooldetails) {
      return (<div>this school is not available.</div>); // Handle case where details are not available
    }
    const {name_of_school, location} = schooldetails;

    return (
        <>

            <RatingHeader
                name_of_school={name_of_school}
                location={location}
            />
            
            <RateSchool/>
        </>
    )
}