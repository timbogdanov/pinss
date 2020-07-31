import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  height: 50vh;
  margin: 0 auto;
  margin-top: 5%;
  background-color: lavenderblush;
  opacity: 95%;
  -webkit-box-shadow: 18px 10px 29px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 18px 10px 29px 1px rgba(0,0,0,0.75);
  box-shadow: 18px 10px 29px 1px rgba(0,0,0,0.75);

  h2 {
    align-self: center;
    font-size: 2rem;
    font-family: 'Roboto Slab', serif;
    font-weight: bold;
    color: indianred;
    text-shadow: 2px 2px white;
    padding-right: 5%;
  }
`;

export default Container;
