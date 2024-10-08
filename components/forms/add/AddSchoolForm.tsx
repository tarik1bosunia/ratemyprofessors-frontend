'use client';
import { useAddSchool } from "@/hooks";
import AddForm from "./AddForm";
import { useTranslations } from "next-intl";

export default function AddSchoolForm() {
  const {
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
  } = useAddSchool();
  const t = useTranslations('AddSchoolPage.Form')

  const config = [
    {
      labelText: t('Input.SCHOOL_NAME_LABEL_TEXT'),
      labelId: "name_of_school",
      type: "text",
      value: name_of_school,
      required: true,
    },
    {
      labelText: t('Input.WEBISTE_LABEL_TEXT'),
      labelId: "school_website",
      type: "text",
      value: school_website,
      required: true,
    },
    {
      labelText: t('Input.LOCATION_LABEL_TEXT'),
      labelId: "location",
      type: 'text',
      value: location,
      required: true,
    },
    {
      labelText: t('Input.COUNTRY_LABEL_TEXT'),
      labelId: "country",
      type: 'select',
      value: country,
      required: true,
      options: countries.map((country) => ({
        value: country.id,
        label: country.name,
      })),
      onChange: handleCountryChange,
    },
    {
      labelText: t('Input.STATE_LABEL_TEXT'),
      labelId: "state",
      type: 'select',
      value: state ,
      required: true,
      options: states.map((state) => ({
        value: state.id,
        label: state.name,
      })),
      onChange: handleStateChange,
    },
    {
      labelText: t("Input.TERMS_PRIVACY_LABEL_TEXT"),
      labelId: "terms_privacy",
      type: "checkbox",
      value: terms_privacy,
      required: true,
      onChange: onChange,
    },
  ];


  return (
    <AddForm 
      config={config} 
      isLoading={isLoading}
      btnText= {t("SUBMIT_BUTTON_TEXT")}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
