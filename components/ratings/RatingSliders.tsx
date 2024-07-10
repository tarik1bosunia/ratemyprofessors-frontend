import {RatingSlider} from "@/components/ratings"

type Config = {
    labelId: string,
    labelText: string,
}

type Props = {
    config: Config[]
}

export default function RatingSliders({config}: Props){
    return (
        <div>
           {
             config.map((rating, index) => (
                <RatingSlider
                key={index}
                labelId={rating.labelId}
                labelText={rating.labelText}
                value=""
                />
            ))
           }
        </div>
    )
}