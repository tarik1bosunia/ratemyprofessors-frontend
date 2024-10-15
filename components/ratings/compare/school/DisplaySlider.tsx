import DisplaySliderBox from "./DisplaySliderBox";

interface Props{
    rating: number | string;
    isReverse?: boolean
}

function _getColor(rating: number):string{
    if(rating <= 1) return "rgb(21, 21, 21)"
    if(rating <= 2) return "rgb(255, 156, 156)"
    if(rating <= 3) return "rgb(255, 241, 112)"
    if(rating <= 5) return "rgb(127, 246, 195)"

    return "rgb(21, 21, 21)"
}

function _getColoredDiv(rating: number){
    return (
        <div className="rounded-[60%] mx-[8px] min-h-[12px] min-w-[12px]" style={{backgroundColor: `${_getColor(rating)}`}}></div>
    )
}

export default function DisplaySlider({rating, isReverse = false}: Props){
    if(typeof rating === "string"){
        return (
            <div>{rating}</div>
        )
    }
    if(isReverse == false) return (
        <div className="inline-flex items-center justify-between h-[30px] w-full">
            <div className="flex flex-row place-content-center justify-center w-[80%]">
                <DisplaySliderBox rating={rating} />
            </div>
            {
                _getColoredDiv(rating)
            }
            <div className="text-xl min-w-8 w-[10%] font-bold">{rating}</div>
        </div>
    )

    return (
        <div className="inline-flex items-center justify-between h-[30px] w-full">
            <div className="text-xl min-w-8 w-[10%] font-bold">{rating}</div>
            {
                _getColoredDiv(rating)
            }
            <div className="flex flex-row place-content-center justify-center w-[80%]">
                <DisplaySliderBox rating={rating} />
            </div>
            
        </div>
    )
}