import React, { type ChangeEvent } from "react";

interface UsernameInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const UsernameInput: React.FC<UsernameInputProps> = ({
  value,
  onChange,
  placeholder = "Enter username",
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      autoComplete="username"
      name="username"
      className="username-input"
    />
  );
};

export default UsernameInput;