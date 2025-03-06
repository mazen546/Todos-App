import styled from "styled-components";

const StyledInput = styled.input``;
const Input = ({ type, placeholder }) => {
  return <StyledInput type={type} placeholder={placeholder} />;
};

export default Input;
