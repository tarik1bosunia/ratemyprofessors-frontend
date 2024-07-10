import cn from "classnames"
import { ReadStream } from "fs";

interface Props{
    provider: 'google' | 'facebook';
    children: React.ReactNode;
    [rest: string]: any;
}

export default function SocialButton({provider, children, ...rest}:Props){
    const className = cn(
        "flex justify-between items-center gap-2 mt-3 py-2 font-medium",
        {
            "bg-red-500 hover:bg-red-400": provider === 'google',
            "bg-blue-500 hover:bg-blue-400": provider === 'facebook',
        }
    )

    return (
        <button  className={className} onClick={rest.onClick}>

            <span className="flex justify-start items-center">{children}</span>
        
        </button>
    )
}