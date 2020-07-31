import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-left: 5%;
  border-left: 1px solid grey;
  

  label {
    font-size: 1.2rem;
    margin: 1%;
    font-family: 'Roboto Slab', serif;
    font-weight: bold;
  }

  input {
    height: 3vh;
    background-color: coral;
    opacity: 70%;
    font-weight: bold;
    font-size: 1.4rem;
    margin-bottom: 2%;
  }
`;

export default Form;
