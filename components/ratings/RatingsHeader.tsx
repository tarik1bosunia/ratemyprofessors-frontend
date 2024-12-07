'use client'
import { useGetSchoolQuery } from "@/redux/services/public";

type SchoolHeader = {
  name_of_school: string;
  location: string;
};

type ProfessorHeader = {
  name_of_school: string;  
  firstName?: string; // Made optional
  lastName?: string;  // Made optional
  courseName?: string; // Made optional
};

type Props = SchoolHeader | ProfessorHeader;

// Type guard to check if props is of type SchoolHeader
function isSchoolHeader(props: Props): props is SchoolHeader {
  return (props as SchoolHeader).location !== undefined; // Check for location instead
}

export default function RatingsHeader(props: Props) {
  // Destructure the name_of_school from props directly
  const { name_of_school } = props;

  // Initialize variables for optional fields
  let location: string | undefined;
  let firstName: string | undefined;
  let lastName: string | undefined;
  let courseName: string | undefined;

  // Use type guard to determine if props is SchoolHeader or ProfessorHeader
  if (isSchoolHeader(props)) {
    location = props.location;
  } else {
    firstName = props.firstName;
    lastName = props.lastName;
    courseName = props.courseName;
  }

  return (
    <>
      <header className="bg-white shadow-[0_4px_4px_rgba(126,126,126,0.25)] h-auto p-6 sticky top-16 w-full z-[60000]">
        <div className="flex justify-between transition-all duration-300 ease-linear my-0 mx-auto xxl:max-w-[1280px] xxl:w-full">
          <div className="flex flex-col">
            {location && (
              <span className="text-[#7e7e7e] flex text-base font-medium justify-start leading-5 mb-2 max-w-full">
                {location}
              </span>
            )}
            <div className="flex items-center flex-row text-4xl leading-9 pb-0.5 text-left font-poppins font-black">
              <div className="text-4xl leading-[38px] overflow-wrap break-word text-left break-words font-poppins font-black">
                Rate:
              </div>
              <span> {name_of_school}</span>
              {firstName && <span className="whitespace-nowrap">&nbsp;{firstName}</span>} 
              {lastName && <span className="whitespace-nowrap">&nbsp;{lastName}</span>}
            </div>

            {courseName && (
              <div className="text-base font-bold max-w-full text-left leading-5">
                <div className="flex flex-row">
                  <span>{courseName}</span>
                  <span>&nbsp;.&nbsp;</span>
                  <div>
                    <a className="text-customGray" href="/school/353">
                      {name_of_school}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="my-20"></div>
    </>
  );
}
