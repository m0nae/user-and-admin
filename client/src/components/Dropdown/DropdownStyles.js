import styled from "styled-components";

// Dropdown menu for status options

export const Dropdown = styled.div`
  width: 150px;
  height: fit-content;
  background-color: #fff;
  border: 1px solid whitesmoke;
  border-radius: 6px;
  font-size: 0.9rem;
  position: absolute;
  margin-top: 0.3rem;
  ${(props) => (props.open === true ? "display: unset;" : "display: none;")}

  > :not(:last-child) {
    border-bottom: 1px solid whitesmoke;
  }
`;

export const DropdownOption = styled.div`
  padding: 0.5rem 0.8rem 0.5rem;
  height: fit-content;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  :hover,
  :focus {
    background-color: #f2f3f5;
    transition: all 0.1s ease-in-out;
  }
`;
