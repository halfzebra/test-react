import React from 'react';

const errorMessages = new Map([
  ['price', 'Please enter the price as a positive number'],
  ['endDate', 'Please enter the end date in YYYY-MM-DD format'],
  ['_', 'Did something go wrong? Contact our support ad support@example.com'],
]);

export const FormError = (errors: { [x: string]: any }) => {
  return (
    <ul className="alert alert-warning" role="alert">
      {Object.entries(errors).map(([fieldName, err], i) => {
        if (errorMessages.has(fieldName)) {
          return (
            <li key={`${fieldName}-${i}`}>{errorMessages.get(fieldName)}</li>
          );
        }
        return (
          <li key={`${fieldName}-${i}`}>
            Did something go wrong? Contact our support ad support@example.com
          </li>
        );
      })}
    </ul>
  );
};
