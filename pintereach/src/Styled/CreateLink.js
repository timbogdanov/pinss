import styled from 'styled-components'; 
import { Link } from 'react-router-dom'; 

const CreateLink = styled(Link)`
  color: indianred;
  font-family: 'Roboto Slab', serif;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  border: 1px solid white;
  width: 10vw;
  line-height: 2rem;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: 2%;
  background-color: lavenderblush;
  -webkit-box-shadow: 18px 10px 29px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 18px 10px 29px 1px rgba(0,0,0,0.75);
  box-shadow: 18px 10px 29px 1px rgba(0,0,0,0.75);
   
`;

export default CreateLink; 