'use client'

import { useSocialAuth } from "@/hooks"
import { useSocialAuthenticateMutation } from "@/redux/fetures/authApiSlice"

import { Spinner } from "@/components/common"


export default function Page(){
    const [facebookAuthenticate] = useSocialAuthenticateMutation()
    useSocialAuth(facebookAuthenticate, 'facebook');
    return (
        <main>
            <Spinner lg/>
        </main>
    )
}