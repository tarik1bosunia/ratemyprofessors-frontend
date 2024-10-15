interface Props {
    rating: number
}

interface ColoredDivProps{
    rating: number;
    index: number
}

function _getColor(rating: number, index: number):string{
    if(index <= rating){
        return "rgb(0,33,255)"
    }

    return "rgb(211, 211, 211)"
}


function _getColoredDiv({rating, index}: ColoredDivProps){
    return (
        <div className={`
            ${index === 1 ? "rounded-[20px_0_0_20px]" : ""}
            ${index === 5 ? "rounded-[0_20px_20px_0]" : ""}
            h-[18px] touch-none w-full max-w-[90%] min-w-[15px]  border-r-2 border-white1`
        }
        
        style={{backgroundColor: _getColor(rating, index)}}></div>
    )
}

export default function DisplaySliderBox({rating}: Props){
    const boxes = [];

    // Create a for loop to generate slider boxes
    for (let index = 1; index <= 5; index++) {
        boxes.push(<_getColoredDiv key={index} rating={rating} index={index} />);
    }

    return (
        boxes
    )
}