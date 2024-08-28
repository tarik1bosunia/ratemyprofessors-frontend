import { ChangeEvent } from "react";

interface ProfileFormProps {
  label: string;
  disabled: boolean;
  value: string;
  id: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function ProfileFormInput({
  label,
  disabled,
  value,
  id,
  onChange
}: ProfileFormProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        disabled={disabled}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 bg-gray-100"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
