'use client'

import {useSearchProfessorsQuery, useSearchSchoolsQuery } from "@/redux/services/apiSlice"
import { useSearchParams  } from "next/navigation"
import { useEffect } from "react"

import {Country, School, State, Professor} from '@/types'
import Link from "next/link"
import { ProfessorSearch, SchoolSearch } from "@/components/search"

interface Props{
    params: {
        searchtype: string;
    }
}
  

export default function Page({params}: Props){
    const searchParams = useSearchParams ()
    const query = searchParams.get('q')
    const {searchtype} = params;

    console.log("searchtype: ", searchtype)

    if(searchtype === 'schools'){
      return (
        <SchoolSearch query={query || ""} />
      )
    }
    else if(searchtype === 'professors'){
        return (<ProfessorSearch query={query || ""} />)
    }

}