import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { toast } from "react-toastify";
import { useAddDetailsMutation } from "@/redux/fetures/authApiSlice"; // Adjust the import path if needed
import { useRetrieveUserQuery } from "@/redux/services/authenticated";

export default function useUpdateUserProfile() {
    const [addDetails, {isLoading}] = useAddDetailsMutation();

    

    const { data: user, error: erororLoadingUserProfile, isLoading: userProfileIsLoading } = useRetrieveUserQuery(undefined);


    const [formData, setFormData] = useState({
        first_name: user?.first_name || '',
        last_name: user?.last_name || '',
        school: user?.school || '',
        field_of_study: user?.field_of_study || '',
        expected_year_of_graduation:  '2030',
    });

    const { first_name, last_name, school, field_of_study, expected_year_of_graduation } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addDetails({ first_name, last_name, school, field_of_study, expected_year_of_graduation })
            .unwrap()
            .then(() => {
                toast.success("Profile updated successfully!");
            })
            .catch(() => {
                toast.error("Update Failed");
            });
    };

    // // Debugging with useEffect
    // useEffect(() => {
    //     console.log("Form data changed:", formData);
    // }, [formData]);

    // Update formData when user data is loaded
      useEffect(() => {
        if (user) {
            setFormData({
                first_name: user.first_name || '',
                last_name: user.last_name || '',
                school: user.school || '',
                field_of_study: user.field_of_study || '',
                expected_year_of_graduation: user.expected_year_of_graduation || '2030',
            });
        }
    }, [user]);

    return {
        first_name,
        last_name,
        school,
        field_of_study,
        isLoading,
        expected_year_of_graduation,
        onChange,
        onSubmit,
        userProfileIsLoading,
        erororLoadingUserProfile
    };
}
