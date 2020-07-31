import React, { useState, useEffect } from 'react';
import { postArticle } from '../actions';
import { connect } from 'react-redux';
import formSchema from '../validation/formSchema';
import AddForm from '../styled/AddForm';
import Button from '../styled/Button';

const initalValues = {
  url: '',
  title: '',
  author: '',
  host: '',
};


const NewArticle = (props) => {
  const [disabled, setDisabled] = useState(true);

  const [inputValue, setInputValue] = useState(initalValues);

  const onChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props.postArticle(inputValue, props.match.params.id);
    props.history.push(`/board/${props.match.params.id}`);
  };

  useEffect(() => {
    formSchema.isValid(inputValue).then((valid) => {
      setDisabled(!valid);
    });
  }, [inputValue]);

  return (
    <div>
      <AddForm className='articleForm' onSubmit={onSubmit}>
        <h3 onSubmit={onSubmit}>Add an Article</h3>

        <label htmlFor='url'>
          <h4>URL</h4>
        </label>
        <input
          type='text'
          name='url'
          placeholder='newarticle.com/info'
          value={inputValue.url}
          onChange={onChange}
        />
        <label htmlFor='title'>
          <h4>Title</h4>
        </label>
        <input
          type='text'
          name='title'
          placeholder='article title'
          value={inputValue.title}
          onChange={onChange}
        />
        <label htmlFor='author'>
          <h4>Author</h4>
        </label>
        <input
          type='text'
          name='author'
          placeholder='author name'
          value={inputValue.author}
          onChange={onChange}
        />
        <label htmlFor='host'>
          <h4>Host</h4>
        </label>
        <input
          type='text'
          name='host'
          placeholder='host'
          value={inputValue.host}
          onChange={onChange}
        />

        <Button disabled={disabled}>Submit</Button>
      </AddForm>
    </div>
  );
};

export default connect(null, { postArticle })(NewArticle);
