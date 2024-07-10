'use client';
import { Form } from "@/components/forms"
import { useRegister } from "@/hooks";

export default function RegisterForm(){
    const {
        email,
        password,
        isLoading,
        onChange,
        onSubmit,
    } = useRegister()

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
        
        <Form 
        config = {config} 
        isLoading = {isLoading}
        btnText = "Sign Up"
        onChange = {onChange}
        onSubmit = {onSubmit}
        />

    )
}