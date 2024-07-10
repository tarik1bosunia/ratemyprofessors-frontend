'use client';
import { Form } from "@/components/forms"
import { useResetPasswordConfirm} from "@/hooks";

import { useParams } from "next/navigation";

interface Props{
     uid: string;
     token: string;
 }

export default function PasswordResetConfirmForm({uid, token}: Props){
    
    const {
        password,
        isLoading,
        onChange,
        onSubmit,
    } = useResetPasswordConfirm({uid, token})

    const config = [
        {
            labelText: "Password",
            labelId: "password",
            type: "password",
            value: password,
            required: true,
        },
    ]
      
    return (
        
        <Form 
        config = {config} 
        isLoading = {isLoading}
        btnText = "Reset Password"
        onChange = {onChange}
        onSubmit = {onSubmit}
        />

    )
}