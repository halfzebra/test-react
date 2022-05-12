import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface SelectProps {
  register: UseFormRegister<any>;
  options: string[][];
  name: string;
  [x:string]: any;
}

export const Select = ({ register, options, name, ...rest }: SelectProps) => {
  return (
    <select {...register(name)} {...rest}>
      {options.map(([value, displayName]) => (
        <option key={value} value={value}>
          {displayName}
        </option>
      ))}
    </select>
  );
};
