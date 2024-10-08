'use client';
import { useAddSchool } from "@/hooks";
import AddForm from "./AddForm";

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

  const config = [
    {
      labelText: "Name of School",
      labelId: "name_of_school",
      type: "text",
      value: name_of_school,
      required: true,
    },
    {
      labelText: "School Website",
      labelId: "school_website",
      type: "text",
      value: school_website,
      required: true,
    },
    {
      labelText: "Location",
      labelId: "location",
      type: 'text',
      value: location,
      required: true,
    },
    {
      labelText: "Country",
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
      labelText: "State",
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
      labelText: "I agree to the Terms of Use and Privacy Policy",
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
      btnText="Add School"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
