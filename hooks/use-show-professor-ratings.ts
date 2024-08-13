"use client"
import { useState } from "react";

type SchoolRatings =    {
    safety: number,   
    oppputunites: number,
    location: number,
    facility: number,
    happiness: number, 
    reputation: number,
    clubs: number,
    internet: number,
    social: number,
    food: number,
}

export default function useShowProfessorRatings(){
    const [averageRatings, setAverageRaings] = useState<SchoolRatings>({
        safety: 4,   
        oppputunites: 0,
        location: 0,
        facility: 0,
        happiness: 0, 
        reputation: 0,
        clubs: 0,
        internet: 0,
        social: 0,
        food: 0,
    })

    const {
        safety,   
        oppputunites,
        location,
        facility,
        happiness, 
        reputation,
        clubs,
        internet,
        social,
        food,
    } = averageRatings

    return {
        safety,   
        oppputunites,
        location,
        facility,
        happiness, 
        reputation,
        clubs,
        internet,
        social,
        food,
    }

}