import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

import { useAppDispatch } from "@/redux/hooks";
import { setAuth } from "@/redux/fetures/authSlice";
import { toast } from "react-toastify";



export default function useSocialAuth(authenticate: any, provider: string){
    const router = useRouter()
    const dispatch = useAppDispatch()
    const searchParams = useSearchParams()


    const effectRan = useRef(false)


    useEffect(() => {
        const state = searchParams.get('state')
        const code = searchParams.get('code')
        if(state && code && !effectRan.current){
            authenticate({provider, state, code})
            .unwrap()
            .then(() => {
                dispatch(setAuth())
                toast.success('Logged In Successfull')
                router.push('/dashboard')
            })
            .catch(() => {
                toast.error('Logged In Failed')
                router.push('/auth/login')
            })
        }
        return () => {
            effectRan.current = true;
        }
    }, [authenticate, provider])

}