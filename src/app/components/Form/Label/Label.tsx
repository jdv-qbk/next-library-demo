import { LabelProps } from '@/app/types';
import React from 'react';

const Label: React.FC<LabelProps> = ({
  label,
  required = false,
  requiredDisabledFields = false,
}) => {
  return (
    <>
      {label && (
        <label className="block mb-[.25rem] text-[.8125rem] font-[400] text-neutral-700">
          {(requiredDisabledFields || required) && (
            <span className="text-red-700">*</span>
          )}{' '}
          {label}
        </label>
      )}
    </>
  );
};

export default Label;
