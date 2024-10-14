import DisplaySliderBox from "./DisplaySliderBox";

export default function DisplaySlider(){
    return (
        <div className="inline-flex items-center justify-between h-[30px] w-full">
            <div className="flex flex-row place-content-center justify-center w-[80%]">
                <DisplaySliderBox />
            </div>
            <div className="bg-[rgb(127,246,195)] rounded-[60%] mx-[8px] min-h-[12px] min-w-[12px]"></div>
            <div className="text-xl min-w-8 w-[10%] font-bold">3.4</div>
        </div>
    )
}