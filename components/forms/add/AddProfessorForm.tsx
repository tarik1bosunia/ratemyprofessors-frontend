'use client';
import { useAddProfessor } from "@/hooks";
import AddForm from "./AddForm";
import { ChangeEvent } from "react";

interface Config {
  labelText: string;
  labelId: string;
  type: string; // Ensure type is one of these options
  value: string ; // Adjusted to allow boolean for checkbox
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
  options?: { value: number; label: string }[]; // Options for select input
  onChange?: (event: ChangeEvent<any>) => void; // Adjusted to accept any event type
}

export default function AddProfessorForm() {
  const {
    name_of_school,
    first_name,
    middle_name,
    last_name,
    department,
    directory_listing_of_professor,
    termsPrivacy,
    isLoading,
    onChange,
    handleDepartmentChange,
    onSubmit,
    departments,
    departmentsLoading,
  } = useAddProfessor();

  const config: Config[] = [
    {
      labelText: "Name of School",
      labelId: "name_of_school",
      type: "text",
      value: name_of_school,
      required: true,
    },
    {
      labelText: "First Name",
      labelId: "first_name",
      type: "text",
      value: first_name,
      required: true,
    },
    {
        labelText: "Middle Name",
        labelId: "middle_name",
        type: "text",
        value: middle_name,
        required: true,
      },
      {
        labelText: "Last Name",
        labelId: "last_name",
        type: "text",
        value: last_name,
        required: true,
      },
    {
      labelText: "Department",
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
        labelText: "Directory Listing of Professor",
        labelId: "directory_listing_of_professor",
        type: "text",
        value: directory_listing_of_professor,
        required: true,
      },
    {
      labelText: "I agree to the Terms of Use and Privacy Policy",
      labelId: "termsPrivacy",
      type: "checkbox",
      value: String(termsPrivacy),
      required: true,
      onChange: onChange,
    },
  ];


  return (
    <AddForm 
      config={config} 
      isLoading={isLoading}
      btnText="Add Professor"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
