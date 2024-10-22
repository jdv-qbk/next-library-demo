import { ControlErrorMessageProps } from '@/app/types';
import React from 'react';
import { IoIosWarning } from 'react-icons/io';

const ControlErrorMessage: React.FC<ControlErrorMessageProps> = ({
  hasError,
  errorMessage,
}) => {
  return (
    <>
      {hasError && (
        <p className="flex mt-1 text-[.75rem] text-red-700">
          {' '}
          <>
            <IoIosWarning className="mr-[.25rem] text-[.9375rem] text-red-700" />
          </>{' '}
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default ControlErrorMessage;
