import styled from "styled-components";

export const StatusTag = styled.div`
  display: flex;
  color: #fff;
  font-size: 0.9rem;
  padding: 0.2rem 1.2rem;
  width: fit-content;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;

  ${(props) => props.status === "Active" && "background-color: #27aa49;"}
  ${(props) => props.status === "Pending" && "background-color: #ffa701;"}
`;

export const CaretDown = styled.div`
  margin-left: 0.5rem;
`;
