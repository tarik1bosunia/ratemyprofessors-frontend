
import {Spinner} from "@/components/common";

interface Config{
    label: string;
    value: string | undefined;
}
interface Props{
    config: Config[];
}

export default function List({config}: Props){

    return <>
        <ul  className="divide-y divide-gray-800" role="list">
            
            {
                config.map(({label, value}, index) => (
                    <li key={index} className="flex justify-between gap-x-6 py-5">
                        <div>
                            <p className="text-sm font-semibold leading-6 to-gray-900">
                                {label}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold leading-6 to-gray-900">
                                    {value || <Spinner sm/>}
                            </p>
                        </div>
                    </li>
                ))
            }
        </ul>
    </>
}