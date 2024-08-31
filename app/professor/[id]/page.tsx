import TeacherInfo from "./TeacherInfo";
import TeacherRatings from "./TeacherRatings";

export default function Page() {
  return (
    <div className="my-0 mx-auto w-full lg:max-w-[1280px] min-h-[calc(-240px+100vh)] overflow-hidden">
        <div className="lg:min-w-[calc(926px)] flex flex-row justify-between mb-1.5 pl-6">

          <TeacherInfo />
          <TeacherRatings />
        </div>
    </div>
  );
}
