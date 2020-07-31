import styled from 'styled-components';

const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #cf866c;
  background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
  background-color: #d0451b;
  border-radius: 3px;
  border: 1px solid #942911;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 1.3rem;
  margin-top: 2%;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #854629;

  &:hover {
    color: black; 
  }

  &:disabled, 
  button[disabled] {
    background: linear-gradient(to bottom, #D3D3D3 5%, #A9A9A9 100%);
  }
`;

export default Button;

