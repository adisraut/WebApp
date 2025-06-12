import { useState } from 'react';
import PasswordField from '../Common/PasswordInput';

export function LoginForm() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
    } else {
      alert('Passwords match!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PasswordField
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />

      <PasswordField
        label="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <br />

      <button type="submit">Register</button>
    </form>
  );
}

export default LoginForm;