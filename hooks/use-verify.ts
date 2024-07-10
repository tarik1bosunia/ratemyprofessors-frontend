'use client'
import { useEffect } from "react";

import { useAppDispatch } from "@/redux/hooks";
import { setAuth, finishedInitialLoad } from "@/redux/fetures/authSlice";
import { useVerifyMutation } from "@/redux/fetures/authApiSlice";

export default function useVerify(){
    const dispatch = useAppDispatch()
    const [verify] = useVerifyMutation()

    useEffect(() => {
        verify(undefined)
        .then(() => {
            dispatch(setAuth())
            
        })
        .catch(() => {

        }).finally(() => {
            dispatch(finishedInitialLoad())
        })
    },[])

}