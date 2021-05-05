import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 75%;
  height: 50%;
  max-width: 370px;

  > input {
    margin-bottom: 0.7rem;
  }

  > input:nth-child(8) {
    margin-bottom: 1.3rem;
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
`;

export const Input = styled.input`
  box-shadow: 0 0px 1px 0 rgb(160 136 255 / 4%);
  background-color: #fff;
  margin-top: 0.3rem;
  border: 1px solid whitesmoke;
  outline: none;
  border-radius: 4px;
  width: 100%;
  height: 2.5rem;
  padding: 0 0.7rem;
  transition: all 0.2s ease-in-out;

  :focus {
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0.5px 3px 0px #4f4fed;
  }
`;

export const SignupBtn = styled.button`
  width: 100%;
  padding: 0.7rem 2rem;
  margin-bottom: 1rem;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: #4f4fed;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transition: all 0.2s ease-in-out;
    background-color: #4141bf;
  }
`;

export const TextLink = styled(Link)`
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
  color: #4f4fed;
  align-self: center;
`;
