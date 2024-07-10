'use client'

import { useEffect } from "react"
import { useActivationMutation } from "@/redux/fetures/authApiSlice"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"


interface Props{
    params: {
        uid: string;
        token: string;
    }
}


export default function Page({params}: Props){
    const router = useRouter()
    const [activation] = useActivationMutation()
    
    
    useEffect(() => {
        const {uid, token} = params;
        activation({uid, token})
        .unwrap()
        .then(() => {
            toast.success("Account Activated!");
        })
        .catch(() => {
            toast.error('Failed to activate Account')
        })
        .finally(() => {
            router.push("/auth/login")
        })
    }, [activation, params, router])

    return (
        <div className="flex flex-col justify-center flex-1  min-h-full px-6 py-2 lg:px-8 ">
            <div className="sm:px-auto sm:w-full sm:max-w-sm">
                <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Activating Your Account...</h1>
            </div>
        </div>
    )
}