import { cn } from "~/_utils/utils";

type Properties = {
  placeholder: string;
  defaultValue?: string;
  errors?: string[];
  inputClassName?: string;
  key?: string;
  label?: string;
  name?: string;
  rows?: number;
};

const Input: React.FC<Properties> = ({
  placeholder,
  defaultValue,
  errors,
  inputClassName,
  key,
  label,
  name,
  rows,
}) => {
  return (
    <div className="flex flex-col gap-[2px] w-full">
      {label && <label className="font-bold text-[16px]">{label}</label>}
      {rows ? (
        <textarea
          className={cn(
            "flex border-divider disabled:opacity-50 px-[12px] py-[8px] border rounded-[6px] w-full text-[16px] placeholder:text-divider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary resize-none",
            inputClassName
          )}
          placeholder={placeholder}
          key={key}
          name={name}
          defaultValue={defaultValue}
          rows={rows}
        />
      ) : (
        <input
          className={cn(
            "flex border-divider disabled:opacity-50 px-[12px] py-[8px] border rounded-[6px] w-full text-[16px] placeholder:text-divider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            inputClassName
          )}
          placeholder={placeholder}
          key={key}
          name={name}
          defaultValue={defaultValue}
        />
      )}
      <span
        className={cn(
          "text-[12px] text-error min-h-[calc(1em*1.5)] ml-[5px]",
          !errors && "opacity-0"
        )}
      >
        {errors ? (errors[0] as string) : ""}
      </span>
    </div>
  );
};

export { Input };
