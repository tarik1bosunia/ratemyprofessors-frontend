'use client';
import { useAddProfessor } from "@/hooks";
import AddForm from "./AddForm";

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

  const config = [
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
      value: department,
      required: true,
      options: departments.map((department) => ({
        value: department.id,
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
      value: termsPrivacy,
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
