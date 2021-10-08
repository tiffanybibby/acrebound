import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Login(props) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={(e)=> {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
      <h3>Login</h3>
      <label>
        email:
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
      <Link to='/register'>Register</Link>
      <button>Submit</button>
    </form>
  );
}
