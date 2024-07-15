"use client";
import { RatingForm } from "@/components/ratings";
import { useRateSchool } from "@/hooks";
import { useParams } from "next/navigation";


type Config = {
  labelId: string;
  labelText: string;
  value: string;
  requiered?: boolean;
  type : 'slider' | 'comment'
}



export default function RateSchool() {
 const  {id} = useParams<{id:string}>()

  const {
    reputation,
    facilites,
    internet,
    food,
    clubs,
    social,
    happiness,
    safety,
    comment,
    onSubmit,
    onChange,
    submitable,
    isLoading,
  } = useRateSchool(id);



  const config: Config[] = [
    {
      labelId: "reputation",
      labelText: "reputation",
      type: "slider",
      value: reputation,
    },
    {
      labelId: "facilites",
      labelText: "Facilities and common areas",
      type: "slider",
      value: facilites,
    },
    {
      labelId: "internet",
      labelText: "Internet",
      type: "slider",
      value: internet,
    },
    {
      labelId: "food",
      labelText: "Food",
      type: "slider",
      value: food,
    },
    {
      labelId: "clubs",
      labelText: "Clubs",
      type: "slider",
      value: clubs,
    },
    {
      labelId: "social",
      labelText: "Social",
      type: "slider",
      value: social,
    },
    {
      labelId: "happiness",
      labelText: "Happiness",
      type: "slider",
      value: happiness,
    },
    {
      labelId: "safety",
      labelText: "Safety",
      type: "slider",
      value: safety,
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
