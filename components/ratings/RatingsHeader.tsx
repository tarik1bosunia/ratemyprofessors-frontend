type SchoolHeader = {
  schoolName: string;
  schoolLocation?: string;
};

type ProfessorHeader = {
  school: string,  
  firstName: string;
  lastName: string;
  courseName: string;

};

type Props = SchoolHeader | ProfessorHeader;

export default function RatingsHeader(props: Props) {
  const { schoolLocation, schoolName } = props as SchoolHeader;
  const { firstName, lastName, courseName , school } = props as ProfessorHeader;

  return (
    <>
      <header className="bg-white shadow-[0_4px_4px_rgba(126,126,126,0.25)] h-auto p-6 sticky top-16 w-full z-[60000]">
        <div className="flex justify-between transition-all duration-300 ease-linear my-0 mx-auto xxl:max-w-[1280px] xxl:w-full">
          <div className="flex flex-col">
            <span className="text-[#7e7e7e] flex text-base font-medium justify-start leading-5 mb-2 max-w-full">
              {schoolLocation}
            </span>
            <div className="flex items-center flex-row text-4xl leading-9 pb-0.5 text-left font-poppins font-black">
              <div className="text-4xl leading-[38px] overflow-wrap break-word text-left break-words font-poppins font-black">
                Rate:
              </div>
              <span> {schoolName}</span>
              <span>{firstName}</span>
              <span className="whitespace-nowrap">&nbsp;{lastName}</span>
            </div>

            { courseName &&
            <div className="text-base font-bold max-w-full text-left leadin-5">
              <div className="flex flex-row">
                <span>{courseName }
                </span>
                <span>&nbsp;.&nbsp;</span>
                <div>
                  <a className="text-customGray" href="/school/353">
                    {
                        school
                    }
                  </a>
                </div>
              </div>
            </div>
            }

          </div>
        </div>
      </header>
      <div className="my-20"></div>
    </>
  );
}
