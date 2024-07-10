'use client';
import { Form } from "@/components/forms"
import { useLogin } from "@/hooks";

export default function LoginForm(){
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
            link: {
                linkText: "forgot password?",
                linkUrl: "/password-reset",
            },
            required: true,
        },
    ]
      
    return (
        
        <Form 
        config = {config} 
        isLoading = {isLoading}
        btnText = "Log In"
        onChange = {onChange}
        onSubmit = {onSubmit}
        />

    )
}