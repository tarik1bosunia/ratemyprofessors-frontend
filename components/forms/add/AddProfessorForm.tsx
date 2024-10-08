'use client';
import { useAddProfessor } from "@/hooks";
import AddForm from "./AddForm";
import { ChangeEvent } from "react";
import { useTranslations } from "next-intl";

interface Config {
  labelText: string;
  labelId: string;
  type: string; // Ensure type is one of these options
  value: string | boolean ; // Adjusted to allow boolean for checkbox
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
  options?: { value: number; label: string }[]; // Options for select input
  onChange?: (event: ChangeEvent<any>) => void; // Adjusted to accept any event type
}

export default function AddProfessorForm() {
  const t = useTranslations('AddProfessorPage.Form')
  const {
    name_of_school,
    first_name,
    middle_name,
    last_name,
    department,
    directory_listing_of_professor,
    terms_privacy,
    isLoading,
    onChange,
    handleDepartmentChange,
    onSubmit,
    departments,
    departmentsLoading,
  } = useAddProfessor();

  const config: Config[] = [
    {
      labelText: t("Input.SCHOOL_NAME_LABEL_TEXT"),
      labelId: "name_of_school",
      type: "text",
      value: name_of_school,
      required: true,
    },
    {
      labelText: t('Input.FIRST_NAME_LABEL_TEXT'),
      labelId: "first_name",
      type: "text",
      value: first_name,
      required: true,
    },
    {
        labelText: t('Input.MIDDLE_NAME_LABEL_TEXT'),
        labelId: "middle_name",
        type: "text",
        value: middle_name,
        required: false,
      },
      {
        labelText: t('Input.LAST_NAME_LABEL_TEXT'),
        labelId: "last_name",
        type: "text",
        value: last_name,
        required: true,
      },
    {
      labelText: t('Input.DEPARTMENT_LABEL_TEXT'),
      labelId: "department",
      type: 'select',
      value: String(department),
      required: true,
      options: departments.map((department) => ({
        value:  department.id,
        label: department.name,
      })),
      onChange: handleDepartmentChange,
    },
    {
        labelText: t('Input.DIRECTORY_LISTING_LABEL_TEXT'),
        labelId: "directory_listing_of_professor",
        type: "text",
        value: directory_listing_of_professor,
        required: true,
      },
    {
      labelText: t('Input.TERMS_PRIVACY_LABEL_TEXT'),
      labelId: "terms_privacy",
      type: "checkbox",
      value:terms_privacy,
      required: true,
      onChange: onChange,
    },
  ];


  return (
    <AddForm 
      config={config} 
      isLoading={isLoading}
      btnText={t("SUBMIT_BUTTON_TEXT")}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
