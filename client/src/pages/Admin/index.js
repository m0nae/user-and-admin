import { Wrapper, TableContainer, Heading } from "./AdminStyles";
import Table from "../../components/Table";

export default function () {
  return (
    <Wrapper>
      <Heading>Admin Page</Heading>
      <TableContainer>
        <Table />
      </TableContainer>
    </Wrapper>
  );
}
