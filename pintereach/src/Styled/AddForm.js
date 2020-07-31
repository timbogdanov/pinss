import styled from 'styled-components';

const StyledAddForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: 0 auto;
  margin-top: 2%;
  padding: 1%;
  background-color: lavenderblush;
  -webkit-box-shadow: 18px 10px 29px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 18px 10px 29px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 18px 10px 29px 1px rgba(0, 0, 0, 0.75);

  h3 {
    font-size: 1.2rem;
    font-family: 'Roboto Slab', serif;
    padding: 1%;
    background-color: indianred;
    color: white;
    font-weight: bold;
    margin-bottom: 2%;
  }

  h4 {
    font-size: 1rem;
    font-family: 'Roboto Slab', serif;
    padding: 1%;
  }

  input {
    width: 80%;
    margin: 0 auto;
  }

  .lrgInput {
    height: 15vh;
  }
`;

export default StyledAddForm;
