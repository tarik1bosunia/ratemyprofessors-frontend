'use client';
import { ModalForm } from "@/components/forms"
import { useLogin  } from "@/hooks";
import { useTranslations } from "next-intl";


export default function LoginModalForm(){
    const t = useTranslations("Modals.Login.Form")
    const {
        email,
        password,
        isLoading,
        onChange,
        onSubmit,
    } = useLogin()

    const config = [
        {
            labelText: t("Input.EMAIL_LABEL"),
            labelId: "email",
            type: "email",
            value: email,
            required: true,
        },
        {
            labelText: t("Input.PASSWORD_LABEL"),
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
            btnText = {t("SUBMIT_BUTTON_TEXT")}
            onChange = {onChange}
            onSubmit = {onSubmit}
        />

    )
}