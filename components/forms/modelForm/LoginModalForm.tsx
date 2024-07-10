'use client';
import { ModalForm } from "@/components/forms"
import { useLogin  } from "@/hooks";


export default function LoginModalForm(){
   
    const {
        email,
        password,
        isLoading,
        onChange,
        onSubmit,
    } = useLogin()

    const config = [
        {
            labelText: "Email",
            labelId: "email",
            type: "email",
            value: email,
            required: true,
        },
        {
            labelText: "Password",
            labelId: "password",
            type: "password",
            value: password,
            required: true,
        },
    ]
      
    return (
        
        <ModalForm 
            config = {config} 
            isLoading = {isLoading}
            btnText = "Login"
            onChange = {onChange}
            onSubmit = {onSubmit}
        />

    )
}