import React from 'react';

interface PasswordFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label>{label}:</label><br />
      <input
        type="password"
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default PasswordField;
