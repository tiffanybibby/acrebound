import React from "react";
import { useState } from 'react';

export default function Register(props) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleRegister(formData);
      }}
    >
      <h3>Register</h3>
      <label>
        First name:
        <input
          type='text'
          name='first_name'
          value={formData.first_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last name:
        <input
          type='text'
          name='last_name'
          value={formData.last_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password Confirmation:
        <input
          type='password'
          name='password_confirmation'
          value={formData.password_confirmation}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
