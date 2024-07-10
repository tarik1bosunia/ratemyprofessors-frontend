'use client'

import { redirect } from "next/navigation"
import { useAppSelector } from "@/redux/hooks"
import { Spinner } from "@/components/common"


interface Props{
 children: React.ReactNode
}

const RequireAuth = ({children}: Props) => {

   const {isAuthenticated , isLoading} = useAppSelector(state=> state.auth)

  if(isLoading){
    return (
        <div className="flex justify-center my-8">
            <Spinner lg />
        </div>
    )
  }

  if(!isAuthenticated){
     redirect('/auth/login')
     return
  }

  return (
    <>{children }</>
  )
}

export default RequireAuth