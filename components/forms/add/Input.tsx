import { ChangeEvent } from "react";

interface Props {
  children: React.ReactNode;
  labelId: string;
  type: string; // Specify type to distinguish between text, checkbox, and select inputs
  onChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number | boolean; // Adjust value type to handle text, number, and boolean values
  checked?: boolean; // Add checked prop for checkboxes
  required?: boolean;
  options?: { value: number; label: string }[] ; // Options for select dropdown
}

export default function Input({
  children,
  labelId,
  type,
  onChange,
  value,
  checked = false, // Default checked state for checkboxes
  required = false,
  options,
}: Props) {
  return (
    <div className="max-w-[441px] relative text-left">
      <div className="_input_wrapper flex flex-col items-start justify-end relative mt-5 h-auto">
        
       {
          type !== "checkbox" &&

          <label
            htmlFor={labelId}
            className="_input_label dark:text-white text-base text-left whitespace-nowrap mb-2"
          >
            {children}
          </label>
        }

        <div className="flex w-full">
          {type === "select" ? (
            <select
              id={labelId}
              name={labelId}
              value={value as string | number}
              onChange={onChange}
              required={required}
              className="block w-full mt-1"
            >
              <option value="">Select {children}</option>
              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : type === "checkbox" ? (

        
                    <div className="flex items-center">
                    <input
                      id={labelId}
                      name={labelId}
                      type={type}
                      onChange={onChange}
                      checked={value as boolean}
                      required={required}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor={labelId} className="ml-2 font-black dark:text-white">
                      {children}
                    </label>
                  </div>
          ) : (
            <input
              id={labelId}
              name={labelId}
              type={type}
              onChange={onChange} 
              value={value as string}
              required={required}
              className="border border-gray-300 rounded-[3px] text-inherit font-helvetica text-base h-10 outline-none px-3 py-[12px_8px] w-full"
            />
          )}
        </div>
      </div>
      <div className="_errors relative"></div>
    </div>
  );
}
