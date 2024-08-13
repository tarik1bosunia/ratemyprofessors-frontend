"use client"

import { useGetSchoolRatingsQuery } from "@/redux/services/apiSlice";
import { SchoolRatingsType } from "@/types";
import { useState } from "react";


export default function useShowSchoolRatings(){
    const [averageRatings, setAverageRaings] = useState<SchoolRatingsType>({
        id: 0,
        safety: 4,   
        oppputunites: 1,
        location: 1,
        facility: 1,
        happiness: 1, 
        reputation: 1,
        clubs: 1,
        internet: 4,
        social: 5,
        food: 2,
        comment: 'this is comment',
        created_at: 'datetime',
        user: 0
    })



    const { data: schoolRatings = [], isLoading: schoolRatingsIsLoading } = useGetSchoolRatingsQuery(1);

    return {
        ...averageRatings,
        schoolRatings,
    }
}