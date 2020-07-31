import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postBoard } from '../actions';

import AddForm from '../styled/AddForm';
import Button from '../styled/Button';

const initialState = {
  name: '',
  description: '',
};

const NewBoard = (props) => {
  const [inputValue, setInputValue] = useState(initialState);

  const onChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props.postBoard(inputValue);
    props.history.push('/dashboard');
  };

  return (
    <div>
      <AddForm onSubmit={onSubmit}>
        <h3>Add a Board</h3>
        <h4>Board Name</h4>
        <input
          type='text'
          placeholder='name'
          name='name'
          value={inputValue.name}
          onChange={onChange}
        />
        <h4>Description</h4>
        <input
          type='text'
          placeholder='description'
          name='description'
          className='lrgInput'
          value={inputValue.description}
          onChange={onChange}
        />

        <Button>Submit</Button>
      </AddForm>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    description: state.description,
  };
};

export default connect(mapStateToProps, { postBoard })(NewBoard);
