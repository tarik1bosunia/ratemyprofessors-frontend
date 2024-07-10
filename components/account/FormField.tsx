interface FormFieldProps {
  label: string;
  value: string;
  disabled: boolean;
}

export default function FormField({ label, value, disabled }: FormFieldProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-semibold">{label}</label>
      <input
        type="text"
        value={value}
        disabled={disabled}
        className={`p-2 border rounded-md ${
          disabled ? "bg-gray-100" : "bg-white"
        }`}
      />
    </div>
  );
}
