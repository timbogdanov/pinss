import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// styled components imports - each in defined individually in Styled
import Container from '../styled/Container';
import Form from '../styled/Form';
import Button from '../styled/Button';
import Icon from '../styled/Icon';
// img imports
import userIcon from '../images/user-icon.png';
import passIcon from '../images/password-icon.png';
// validation schema
import * as yup from 'yup';
import registerSchema from '../validation/registerSchema';

const initialValue = {
  username: '',
  password: '',
};

const initialRegisterErrors = {
  username: '',
  password: '',
};

const initialBtnDisable = true;

const Register = (props) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors);
  const [disabled, setDisabled] = useState(initialBtnDisable);

  const onChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    validateChange(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post('/register', inputValue)
      .then((res) => {
        props.history.push('/login');
      });
  };

  function validateChange(e) {
    e.persist();
    yup
      .reach(registerSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setRegisterErrors({
          ...registerErrors,
          [e.target.name]: '',
        });
      })
      .catch((err) => {
        setRegisterErrors({
          ...registerErrors,
          [e.target.name]: err.errors[0],
        });
      });
  }

  useEffect(() => {
    registerSchema.isValid(inputValue).then((valid) => {
      setDisabled(!valid);
    });
  }, [inputValue]);

  return (
    <Container>
      {localStorage.getItem('token') && props.history.push('/dashboard')}

      <h2>Register</h2>
      <Form onSubmit={onSubmit}>
        <label htmlFor='username'>
          <Icon src={userIcon} alt='login icon' />
          Username
        </label>
        <input
          className='usernameInpt'
          type='text'
          name='username'
          placeholder='john@doe.com'
          value={inputValue.username}
          onChange={onChange}
        />
        <label htmlFor='password'>
          <Icon src={passIcon} alt='login icon' />
          Password
        </label>
        <input
          className='passwordInpt'
          type='password'
          name='password'
          placeholder='********'
          value={inputValue.password}
          onChange={onChange}
        />

        <Button className='registerBtn' disabled={disabled}>Register</Button>

        {/* rendering validation errors here */}
        <div className='errors'>
          <div>{registerErrors.username}</div>
          <div>{registerErrors.password}</div>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
