"use client";

import styles from "@/components/ratings/schoolrating.module.css";
import { useState } from "react";
import { LuThumbsUp, LuThumbsDown, LuFlag } from "react-icons/lu";


import { SchoolRatingsType } from "@/types";

type RatingType = {
  title: string;
  rating: number;
};

export default function SchoolRating(rating: SchoolRatingsType) {
  const [isHoveredThumbsUp, setIsHoveredThumbsUp] = useState(false);
  const [isHoveredThumbsDown, setIsHoveredThumbsDown] = useState(false);

  const ratings: RatingType[] = [
    {
      title: "Safety",
      rating: rating.safety,
    },
    {
      title: "Oppputunites",
      rating: rating.oppputunites,
    },
    {
      title: "Location",
      rating: rating.location,
    },
    {
      title: "Facilities",
      rating: rating.facilities,
    },
    {
      title: "Happiness",
      rating: rating.happiness,
    },
    {
      title: "Reputation",
      rating: rating.reputation,
    },
    {
      title: "Clubs",
      rating: rating.clubs,
    },
    {
      title: "Internet",
      rating: rating.internet,
    },
    {
      title: "Social",
      rating: rating.social,
    },
    {
      title: "Food",
      rating: rating.food,
    },
  ];

  const ratingDegree = [
    { label: "0 - default", color: "bg-gray-300" },
    { label: "1 - Awful", color: "bg-red-600" },
    { label: "2 - Ok", color: "bg-yellow-500" },
    { label: "3 - Good", color: "bg-yellow-400" },
    { label: "4 - Great", color: "bg-green-400" },
    { label: "5- Awsome", color: "bg-green-600" },
  ];

  const getBgColor = (rate: number, index: number) => {
    if (rate == undefined) return;
    if (index >= rate) return ratingDegree[0].color;
    return ratingDegree[rate].color;
  };

  return (
    <li className="">
      <div className="bg-gray-100 flex flex-col my-4 min-w-[343px] w-full">
        <div className="flex flex-row p-[20px_24px_32px]">
          <div className="flex flex-col text-sm p-[10px_26px_0px_0px] font-semibold">
            <div className="mb-2">Overall</div>
            <div className="bg-[#ff9c9c] leading-[40px] min-h-[72px] min-w-[44px] py-4 w-[72px] text-2xl font-extrabold text-center">
              {rating.id}
            </div>
          </div>
          <div className="flex flex-col ml-4 w-full">
            <div className="flex flex-row justify-end items-center">
              <div className="pb-0 font-bold">Jun 23rd, 2024</div>
            </div>
            <div className="text-sm font-normal mt-5 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              inventore quisquam maiores ab, in expedita aliquam illum illo iure
              ratione deserunt! Dolores, fugit iste! Eveniet maiores quos magnam
              autem libero.
            </div>

            <div>
              <div
                className="flex flex-col flex-wrap h-[190px] justify-between mt-4 pr-9 w-full"
                style={{ columnGap: "10%" }}
              >
                {ratings.map((rate, index1) => (
                  <div
                    key={index1}
                    className="inline-flex justify-between items-center h-[30px] mt-2 w-[45%]"
                  >
                    <div className="text-sm font-semibold leading-4 mr-[5px]">
                      {rate.title}
                    </div>
                    <div className="flex flex-row justify-center">
                      {ratingDegree.map((ratingD, index) => (
                        <div
                          
                          key={index}
                          className={`${getBgColor(
                            rate.rating,
                            index
                          )} h-[18px] w-8 opacity-50 touch-none transition-all duration-200 ease-in-out ${
                            index == 0 && "rounded-l-[20px]"
                          } ${
                            index == ratingDegree.length - 1 &&
                            "rounded-r-[20px]"
                          } 
                             ${
                            index != ratingDegree.length - 1 &&
                            "border-r-2 border-white border-solid"
                          }
                            
                          `}
                           
                           
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-9">
              <div className="flex items-center">
                <div className="thumbs_up flex flex-row mr-4 font-bold">
                  <div
                    className={`${styles.tooltipContainer} flex items-center cursor-default `}
                  >
                    <div className="mr-[5px] text-black"> helpful </div>
                    <LuThumbsUp
                      onMouseEnter={() => setIsHoveredThumbsUp(true)}
                      onMouseLeave={() => setIsHoveredThumbsUp(false)}
                      className={`${styles.hoverTextThumbsUp}  h-[22px] mr-[5px]`}
                    />
                    {isHoveredThumbsUp && (
                      <div className={styles.tooltipText}>Helpful</div>
                    )}
                  </div>
                </div>
                <div className="thumbs_down flex flex-row mr-4 font-bold">
                  <div className="flex items-center cursor-default">
                    <div
                      className={`${styles.tooltipContainer} text-white mr-[5px]`}
                    >
                      <LuThumbsDown
                        onMouseEnter={() => setIsHoveredThumbsDown(true)}
                        onMouseLeave={() => setIsHoveredThumbsDown(false)}
                        className={`${styles.hoverText} text-black transition-colors duration-200 hover:text-red-500`}
                      />
                      {isHoveredThumbsDown && (
                        <div className={styles.tooltipText}>Not Helpful</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="cursor-pointer no-underline"
                data-tooltip="true"
                data-tip="Report this rating"
                href="/flag/school-rating/335/500811"
              >
                <div className="flex items-center">
                  <LuFlag />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
