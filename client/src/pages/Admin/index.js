import { useState, useEffect } from "react";
import { Wrapper, TableContainer, Heading } from "./AdminStyles";
import Table from "../../components/Table";

export default function () {
  const [firstName, setFirstName] = useState("");

  return (
    <Wrapper>
      <Heading>Admin Page</Heading>
      <TableContainer>
        <Table />
      </TableContainer>
    </Wrapper>
  );
}
