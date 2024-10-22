import useOutsideClick from '@/app/hooks/useOutsideClick';
import { SelectOption, SelectProps } from '@/app/types';
import { ControlErrorMessage, Label } from '@/app/components/Form';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { useController } from 'react-hook-form';
import { BsCheckLg } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder = '',
  label,
  required = false,
  disabled = false,
  control,
  name,
  errorMessage = 'required',
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const ulClass: string = `
  max-h-[11.75rem] overflow-y-auto scrollbar-thin scrollbar-thumb-[#8e030f] scrollbar-track-[#e5e5e5] custom-select-scroll
    `;
  useOutsideClick({
    ref: selectRef,
    handler: () => setIsOpen(false),
  });

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required },
  });

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: SelectOption) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div
      className={clsx(
        'relative w-full',
        className,
        disabled && 'pointer-events-none opacity-50'
      )}
      ref={selectRef}
    >
      <Label
        label={label}
        required={required}
      />

      <div
        className={clsx(
          'relative flex items-center justify-between w-full px-2 border rounded-md',
          'h-[2rem] rounded-[.4375rem] transition-shadow duration-200',
          isOpen &&
            'outline outline-[.0625rem] outline-offset-[.25rem] outline-blue-950',
          error
            ? 'border-red-700 bg-red-200'
            : 'border-neutral-700 bg-neutral-0',
          className
        )}
      >
        <button
          type="button"
          onClick={handleToggle}
          className={clsx(
            'flex items-center justify-between w-full bg-neutral-0',
            'focus:outline-none',
            'h-[1.875rem]',
            error && 'bg-red-200'
          )}
        >
          <span
            className={clsx(
              'text-neutral-800 text-[.8125rem]',
              !value && 'text-neutral-700'
            )}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <IoMdArrowDropdown
            className={clsx(
              'transition-transform duration-200',
              'text-[1.6875rem] text-neutral-700',
              isOpen ? 'rotate-180' : 'rotate-0'
            )}
          />
        </button>
      </div>

      {isOpen && (
        <ul
          className={clsx(
            'absolute z-10 w-full bg-neutral-0 border rounded-md shadow-lg overflow-auto',
            'mt-[.0625rem]',
            'rounded-[.5rem]',
            ulClass
          )}
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={clsx(
                'cursor-pointer px-2 py-2 hover:bg-red-100 h-[2.25rem] flex items-center',
                'text-neutral-800 text-[.8125rem] leading-5'
              )}
              role="option"
              aria-selected={value === option.value}
            >
              {value === option.value && (
                <BsCheckLg className="mr-[.5rem] text-red-800 text-[1.25rem]" />
              )}{' '}
              {option.label}
            </li>
          ))}
        </ul>
      )}

      <ControlErrorMessage
        hasError={!!error}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default Select;
