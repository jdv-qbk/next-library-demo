import { Control, FieldValues } from 'react-hook-form';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  options: SelectOption[];
  placeholder?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  control: Control<FieldValues>;
  name: string;
  errorMessage?: string;
  className?: string;
}
