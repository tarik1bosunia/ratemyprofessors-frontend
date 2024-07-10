'use client';
import { ModalForm } from "@/components/forms"
import { useAddDetails, useUpdateUserProfile  } from "@/hooks";


export default function AddDetailsModalForm(){
   
    const {
        first_name,
        last_name,
        school,
        field_of_study,
        isLoading,
        expected_year_of_graduation,
        onChange,
        onSubmit,
    } = useUpdateUserProfile()

    const config = [
        {
            labelText: "First Name",
            labelId: "first_name",
            type: "text",
            value: first_name,
            required: false,
        },
        {
            labelText: "Last Name",
            labelId: "last_name",
            type: "text",
            value: last_name,
            required: false,
        },
        {
            labelText: "School",
            labelId: "school",
            type: "text",
            value: school,
            required: false,
        },
        {
            labelText: "Field Of Study",
            labelId: "field_of_study",
            type: "text",
            value: field_of_study,
            required: false,
        },
        {
            labelText: "Expected Year of graduation",
            labelId: "expected_year_of_graduation",
            type: "text",
            value: expected_year_of_graduation,
            required: false,
        },

    ]
      
    return (
        
        <ModalForm 
            config = {config} 
            isLoading = {isLoading}
            btnText = "Complete Sign Up"
            onChange = {onChange}
            onSubmit = {onSubmit}
        />

    )
}