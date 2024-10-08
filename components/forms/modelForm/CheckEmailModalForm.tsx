'use client';

import { useTranslations } from "next-intl";
import { ModalForm } from "@/components/forms"
import { useCheckEmail} from "@/hooks";


export default function CheckEmailModalForm(){
    const t = useTranslations("Modals.CheckEmail.Form")
    const {
        email,
        isLoading,
        onChange,
        onSubmit,
    } = useCheckEmail()


    const config = [
        {
            labelText: t("Input.EMAIL_LABEL"),
            labelId: "email",
            type: "email",
            value: email,
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