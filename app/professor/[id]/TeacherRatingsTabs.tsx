interface Props  {
    total_ratings_count: number;
    courses: string[],
}


export default function TeacherRatingsTabs({total_ratings_count = 0, courses=[]}: Props){
    return (
        <div className="xl:max-w-[calc(926px)]">
            <ul className="border-b-2 border-[#f1f1f1] flex mt-[28px] mx-[22px] list-none">
                <li className="border-b-2 border-[#151515] text-[#151515] cursor-pointer font-bold leading-[1.8] min-w-[150px] pb-[8px]">{total_ratings_count} Student Ratings</li>
            </ul>
            <div className="my-0 mx-6">
                <select name="" id="">
                    <option value="">all courses</option>
                    {
                        courses.map((course, index) => (
                            <option key={index} value="">{course}</option>
                        ))
                    }
                    
                </select>
            </div>
        </div>
    )
}
