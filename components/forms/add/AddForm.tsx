import { FormEvent, ChangeEvent } from "react";
import Input  from "@/components/forms/add/Input";
import { Spinner } from "@/components/common";

interface Config {
  labelText: string;
  labelId: string;
  type: string; // Ensure type is one of these options
  value: string | number | boolean; // Adjusted to allow boolean for checkbox
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
  options?: { value: number; label: string }[]; // Options for select input
  onChange?: (event: ChangeEvent<any>) => void; // Adjusted to accept any event type
}

interface Props {
  config: Config[];
  isLoading: boolean;
  btnText: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function AddForm({ onSubmit, onChange, config, isLoading, btnText }: Props) {
  return (
    <form onSubmit={onSubmit} className="xl:max-w-[926px] mt-9 mb-4">
      <div className="form_errors mb-4 text-center relative">
        <div className="relative"></div>
      </div>
      
      {config.map((input, index) => (
        <div key={index} className="mb-4">
          
            <Input
              labelId={input.labelId}
              type={input.type}
              onChange={onChange}
              value={input.value as string}
              required={input.required}
              options={input.options}
            >
              {input.labelText}
            </Input>
        </div>
      ))}

      <div>
        <button
          type="submit"
          className="border border-[#0021ff] rounded-full text-white flex font-stretch-normal font-bold justify-center tracking-normal leading-[1.54] outline-none px-[46px] py-[11px] transition-transform duration-200 ease-in-out bg-[#0021ff] min-w-[220px] w-fit"
          disabled={isLoading}
        >
          {isLoading ? <Spinner sm /> : `${btnText}`}
        </button>
      </div>
    </form>
  );
}


// {input.type === 'select' ? (
//   <select
//     id={input.labelId}
//     name={input.labelId}
//     value={input.value as string | number}
//     onChange={input.onChange || onChange}
//     required={input.required}
//     className="block w-full mt-1"
//   >
//     <option value="">Select {input.labelText}</option>
//     {input.options?.map((option) => (
//       <option key={option.value} value={option.value}>
//         {option.label}
//       </option>
//     ))}
//   </select>
// ) : input.type === 'checkbox' ? (
//   <label className="inline-flex items-center">
//     <input
//       type="checkbox"
//       id={input.labelId}
//       name={input.labelId}
//       checked={input.value as boolean}
//       onChange={input.onChange || onChange}
//       required={input.required}
//       className="form-checkbox h-5 w-5 text-blue-600"
//     />
//     <span className="ml-2">{input.labelText}</span>
//   </label>
// ) : (
//   <Input
//     labelId={input.labelId}
//     type={input.type}
//     onChange={onChange}
//     value={input.value as string}
//     link={input.link}
//     required={input.required}
//   >
//     {input.labelText}
//   </Input>
// )}
