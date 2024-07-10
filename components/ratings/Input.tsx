import { ChangeEvent } from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  labelId: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Input({ children, labelId, type, onChange, value}: Props) {
  return (
    <div className="mt-2">
      <div className="flex justify-between items-center">
        {type === "range" && (
          <div className="flex items-center">
            <input
              id={labelId}
              name={labelId}
              type={type}
              onChange={onChange}
              checked={value === "true"}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor={labelId} className="ml-2 font-black">
              {children}
            </label>
          </div>
        )}
        {type !== "checkbox" && (
          <label htmlFor={labelId} className="font-black">
            {children}
          </label>
        )}
        {link && (
          <div className="text-sm">
            <Link className="font-semibold text-indigo-600 hover:text-indigo-500" href={link.linkUrl}>
              {link.linkText}
            </Link>
          </div>
        )}
      </div>
      {type !== "checkbox" && (
        <input
          id={labelId}
          name={labelId}
          type={type}
          onChange={onChange}
          value={value}
          required={required}
          className="block w-full h-[40px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      )}
    </div>
  );
}
