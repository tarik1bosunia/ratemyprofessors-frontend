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
        .then((response: any) => {
            console.log(response.data)
            // if (response?.data?.access && response?.data?.refresh) {
            //     // Dispatch setAuth with access and refresh tokens
            //     dispatch(setAuth({
            //         access: response.data.access,
            //         refresh: response.data.refresh,
            //     }));
            // }
            
        })
        .catch(() => {

        }).finally(() => {
            dispatch(finishedInitialLoad())
        })
    },[])

}