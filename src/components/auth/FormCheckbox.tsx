'use client';

import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface FormCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  error?: FieldError;
}

export const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ label, error, ...props }, ref) => {
    const inputId = props.id || props.name;

    return (
      <div className="space-y-2">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            {...props}
          />
          <span className="text-sm text-gray-700">{label}</span>
        </label>
        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error.message}
          </p>
        )}
      </div>
    );
  }
);
FormCheckbox.displayName = 'FormCheckbox';
