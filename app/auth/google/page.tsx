'use client'

import { useSocialAuth } from "@/hooks"
import { useSocialAuthenticateMutation } from "@/redux/fetures/authApiSlice"

import { Spinner } from "@/components/common"


export default function Page(){
    const [googleAuthenticate] = useSocialAuthenticateMutation()
    useSocialAuth(googleAuthenticate, 'google-oauth2');
    return (
        <main>
            <Spinner lg/>
        </main>
    )
}