"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import { useResetPasswordMutation } from "@/redux/fetures/authApiSlice";


export default function useRegister(){
    const router = useRouter()
    const [resetpassword, {isLoading}] = useResetPasswordMutation()

    const [email , setEmail] = useState('');

    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        resetpassword({email})
        .unwrap()
        .then(() => {
           toast.success("Requeset sent, Please check your email for reset link!")
        })
        .catch(() => {
            toast.error("Failed to send requeset!")
        })

    }

    return {
        email,
        isLoading,
        onChange,
        onSubmit,
    }
}