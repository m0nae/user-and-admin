import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #e1e3eb;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 80%;
  align-self: center;
  justify-self: center;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const TH = styled.th`
  text-transform: uppercase;
  font-size: 0.9rem;
  padding-left: 1rem;
  padding-top: 0.3rem;
  padding-bottom: 0.8rem;
  text-align: left;
`;

export const TR = styled.tr`
  border-bottom: 1px solid whitesmoke;
`;

export const TD = styled.td`
  padding: 1rem;
`;

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
