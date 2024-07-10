import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import { useResetPasswordConfirmMutation } from "@/redux/fetures/authApiSlice";

interface Props{

    uid: string;
    token: string;
}

export default function useResetPasswordConfirm({uid, token}: Props){
    const router = useRouter()

    const [resetpasswordconfirm, {isLoading}] = useResetPasswordConfirmMutation()

    const [password , setPassword] = useState('');

    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        resetpasswordconfirm({password, uid, token})
        .unwrap()
        .then(() => {
           toast.success("Password reset successfull!")
           router.push('/auth/login')
        })
        .catch(() => {
            toast.error("Failed to reset password")
        })

    }

    return {
        password,
        isLoading,
        onChange,
        onSubmit,
    }
}