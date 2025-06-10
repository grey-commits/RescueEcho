import React from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'error';
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const className = type === 'success' ? 'text-green-500' : 'text-red-500';
  return <p className={`mt-2 ${className} font-bold`}>{message}</p>;
};

export default Alert;