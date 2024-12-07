'use client'
import { School } from "@/types";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { useAddSchoolMutation } from "@/redux/fetures/authApiSlice";

import { useGetCountriesQuery, useGetStatesByCountryQuery } from "@/redux/services/public";
import useModal from "@/hooks/use-modal";
import { LOGIN_MODAL_NAME } from "@/constants";
import { useTranslations } from "next-intl";

export default function useAddSchool() {
  const {open: openLoginModal} =  useModal(LOGIN_MODAL_NAME)
  const t = useTranslations('AddSchoolPage.Messages')

  const initialFormData: School = {
    name_of_school: '',
    school_website: '',
    location: '',
    state: 0,
    country: 0,
    terms_privacy: false,
  };


  const [formData, setFormData] = useState<School>(initialFormData);

  const {
    name_of_school,
    school_website,
    location,
    state,
    country,
    terms_privacy
  } = formData;

  const { data: countries = [], isLoading: countriesLoading } = useGetCountriesQuery();
  const { data: states = [], isLoading: statesLoading } = useGetStatesByCountryQuery(Number(country));
  const [addSchool, { isLoading }] = useAddSchoolMutation();

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = Number(event.target.value);
    setFormData({ ...formData, country: selectedCountry, state: 0 });
  };

  const handleStateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedState = Number(event.target.value);
    setFormData({ ...formData, state: selectedState });
  };
  

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    if (event.target instanceof HTMLInputElement && type === 'checkbox') {
      setFormData({ ...formData, [name]: event.target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addSchool({
      name_of_school,
      school_website,
      location,
      state,
      country,
      terms_privacy
    })
      .unwrap()
      .then(() => {
        setFormData(initialFormData)
        toast.success(t("SCHOOL_ADDED_SUCCESS_MESSAGE"));
      })
      .catch((error) => {
        
        if (error.status === 401) { // Check if the error indicates unauthorized access
          toast.error(t("SCHOOL_ADDED_FAILED_MESSAGE_UNAUTHORISED"));
          openLoginModal(); // Open the login modal
        } else{
          toast.error(t("SCHOOL_ADDED_FAILED_MESSAGE_GENERIC"));
        }
        
      });
  };

  
  return {
    name_of_school,
    school_website,
    location,
    state,
    country,
    terms_privacy,
    isLoading,
    onChange,
    handleCountryChange,
    handleStateChange,
    onSubmit,
    countries,
    states,
    countriesLoading,
    statesLoading,
  };
}


