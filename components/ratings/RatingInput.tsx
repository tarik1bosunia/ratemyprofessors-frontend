"use client";
import { ChangeEvent, useState } from "react";
import RatingSlider from "./RatingSlider";
import RatingComment from "./RatingComment";
import RatingRadioInput from "./RatingRadioInput";
import { RadioSingleInput, SelectInput, TagsInput } from "@/components/ratings/inputs";
import { ProfessorsTag } from "@/types";

interface RatingInputProps {
  childrenText?: string;
  labelId: string;
  labelText: string;
  type:
    | "slider"
    | "comment"
    | "select"
    | "multiple_select"
    | "radio"
    | "radio1item";
  onChange:((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void) | ((value: string[] ) => void);
  value: string | boolean | null | string[] |  ProfessorsTag[];
  required?: boolean;
  ratingSubject: "school" | "professor";
  options?: { value: string | number; label: string }[] ;
  subInput: React.ReactNode 
}

export default function RatingInput({
  childrenText,
  labelId,
  labelText,
  type,
  value,
  required,
  ratingSubject,
  onChange,
  options,
  subInput
}: RatingInputProps) {
  switch (type) {
    case "slider":
      if (typeof value === "string")
        return (
          <RatingSlider
            labelId={labelId}
            labelText={labelText}
            value={value}
            onChange={onChange as (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void}
          />
        );
    case "comment":
      if (typeof value === "string")
        return (
          <RatingComment
            ratingSubject={ratingSubject}
            labelId={labelId}
            labelText={labelText}
            value={value}
            onChange={onChange as (event: ChangeEvent<HTMLTextAreaElement>) => void}
          />
        );
    case "radio":
      value = value as boolean | null;
      return (
        <RatingRadioInput
          labelId={labelId}
          labelText={labelText}
          value={value}
          onChange={onChange as (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void}
        />
      );

    case "select":

      return (
        <SelectInput
          labelId={labelId}
          labelText={labelText}
          value={value as string}
          onChange={onChange as (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void}
          options={options as []}
          subInput= {subInput}
        >
          {
            childrenText
          }
        </SelectInput>
      );
    case 'radio1item':
      return (
        <RadioSingleInput
          labelId={labelId}
          labelText={labelText}
          value={value as boolean}
          onChange={onChange as (event: ChangeEvent<HTMLInputElement>) => void}
        />
      );
    case 'multiple_select':
      return (
        <TagsInput 
        labelId={labelId}
        labelText={labelText}
        value={value as string[]}
        onChange={onChange as ((value: string[] ) => void)}
        options={options as { value: string; label: string }[]}

        />
      )  

  }
  return <input type="text" />;
}
