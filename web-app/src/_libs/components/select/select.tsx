"use client";
import { type FieldMetadata, useInputControl } from "@conform-to/react";
import {
  Content as RadixSelectContent,
  Icon as RadixSelectIcon,
  Portal as RadixSelectPortal,
  Root as RadixSelectRoot,
  ScrollDownButton as RadixSelectScrollDownButton,
  ScrollUpButton as RadixSelectScrollUpButton,
  Viewport as RadixSelectScrollViewport,
  Trigger as RadixSelectTrigger,
  Value as RadixSelectValue,
} from "@radix-ui/react-select";
import { useCallback, useRef } from "react";
import { cn } from "~/_utils/utils";
import { Icon } from "../components";
import { SelectItem } from "./libs/components/components";

type Properties = {
  children: React.ReactNode;
  metadata: FieldMetadata<string>;
  className?: string;
  description?: string;
  isDisabled?: boolean;
  label?: string;
  placeholder?: string;
};

const Select: React.FC<Properties> & { Item: typeof SelectItem } = ({
  children,
  metadata,
  className,
  description,
  isDisabled,
  label,
  placeholder,
}) => {
  const controls = useInputControl(metadata);

  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleFocus = useCallback(() => {
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [triggerRef]);

  const handleOpenChange = useCallback((isOpen: boolean) => {
    if (!isOpen) {
      controls.blur();
    }
  }, []);

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={metadata.id} className="font-bold text-[16px]">
          {label}
        </label>
      )}
      <input
        name={metadata.name}
        className="sr-only"
        tabIndex={-1}
        onFocus={handleFocus}
      />
      <RadixSelectRoot
        disabled={isDisabled}
        value={controls.value}
        onValueChange={controls.change}
        onOpenChange={handleOpenChange}
      >
        <RadixSelectTrigger
          id={metadata.id}
          className={cn(
            "flex justify-between items-center border-divider disabled:opacity-50 px-[12px] py-[8px] [&>span]:line-clamp-1 border rounded-[6px] text-[16px] [&>span]:text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus:ring-2 focus:ring-primary [&>span]:min-h-[calc(1em*1.5)]",
            className
          )}
          ref={triggerRef}
        >
          <RadixSelectValue placeholder={placeholder} />
          <RadixSelectIcon asChild className="text-divider shrink-0">
            <Icon name="chevronDown" />
          </RadixSelectIcon>
        </RadixSelectTrigger>
        <RadixSelectPortal>
          <RadixSelectContent
            className="relative border-divider/50 bg-tertiary shadow-md p-[4px] border rounded-[6px] max-h-[var(--radix-popper-available-height)] data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1 overflow-hidden min-w-[var(--radix-select-trigger-width)]"
            position="popper"
          >
            <RadixSelectScrollUpButton className="flex justify-center items-center">
              <Icon name="chevronUp" />
            </RadixSelectScrollUpButton>
            <RadixSelectScrollViewport>{children}</RadixSelectScrollViewport>
            <RadixSelectScrollDownButton className="flex justify-center items-center">
              <Icon name="chevronDown" />
            </RadixSelectScrollDownButton>
          </RadixSelectContent>
        </RadixSelectPortal>
      </RadixSelectRoot>
      <p className="mt-[2px] ml-[5px] text-[12px] text-divider">
        {description}
      </p>
      <span
        className={cn(
          "text-[12px] text-error min-h-[calc(1em*1.5)] ml-[5px] mt-[-2px] leading-tight",
          !metadata.errors && "opacity-0"
        )}
      >
        {metadata.errors ? (metadata.errors[0] as string) : ""}
      </span>
    </div>
  );
};

Select.Item = SelectItem;

export { Select };
