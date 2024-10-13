"use client";
import { RatingForm} from "@/components/ratings";
import { useRateProfessor } from "@/hooks";
import { ProfessorsTag } from "@/types";
import { useParams } from "next/navigation";
import { ChangeEvent } from "react";


type Config = {
  labelId: string;
  labelText: string;
  value: string | boolean | null | string[] | ProfessorsTag[];
  requiered?: boolean;
  type : 'slider' | 'comment' | 'select' | 'multiple_select' | 'radio' | 'radio1item'
  onChange?: ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void) | ((value: string[] ) => void)
  options?: { value: string | number; label: string }[]; 
  childrenText?: string;
  subInput?: Config
}



export default function RateProfessor() {
 const  {id} = useParams<{id:string}>()

  const {
    course_code,
    is_online_course,
    rating,
    difficulty,
    is_take_professor_again,
    was_class_taken_for_credit,
    was_use_textbook,
    was_attendance_mandatory,
    grade,
    tags,
    comment,
    onSubmit,
    onChange,
    submitable,
    isLoading,
    grades,
    course_codes,
    professors_tags,
    handleProfesorsTagChange,
    handleSingleRadioInputChange,
  } = useRateProfessor(id);


  const config: Config[] = [
    {
      labelId: "course_code",
      labelText: "Select Course Code",
      type: "select",
      value: course_code,
      options: course_codes,
      childrenText: "select course code",
      subInput: {
        labelId: "is_online_course",
        labelText: " This is an online course ",
        type: "radio1item",
        value: is_online_course,
        onChange: handleSingleRadioInputChange as (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void ,
      },

    },

    {
      labelId: "rating",
      labelText: "Rate your professor",
      type: "slider",
      value: rating,
    },
    {
      labelId: "difficulty",
      labelText: "How difficult was this professor?",
      type: "slider",
      value: difficulty,
    },
    {
      labelId: "is_take_professor_again",
      labelText: "Would you take this professor again?",
      type: "radio",
      value: is_take_professor_again,
   
    },
    {
      labelId: "was_class_taken_for_credit",
      labelText: "Was this class taken for credit?",
      type: "radio",
      value: was_class_taken_for_credit,
    },
    {
      labelId: "was_use_textbook",
      labelText: "Did this professor use textbooks?",
      type: "radio",
      value: was_use_textbook,

    },
    {
      labelId: "was_attendance_mandatory",
      labelText: "Was attendance mandatory?",
      type: "radio",
      value: was_attendance_mandatory,
    },

    {
      labelId: "grade",
      labelText: "Select grade received",
      type: "select",
      value: grade,
      options: grades,
      childrenText: "select grade",
    },
    {
      labelId: "tags",
      labelText: "Select up to 3 tags",
      type: "multiple_select",
      value: tags,
      onChange: handleProfesorsTagChange,
      options: professors_tags.map((tag) => ({
        value: String(tag.id),
        label: tag.tag,
      })),
    },
    {
      labelId: "comment",
      labelText: "Write a Review",
      type: "comment",
      value: comment,
    },
  ];

  return (
    <RatingForm

      config={config}
      isLoading = {isLoading}
      btnText="Submit Rating"
      onChange={onChange}
      onSubmit={onSubmit}
      ratingSubject='school'
      submitable={submitable}
    />
  );
}
