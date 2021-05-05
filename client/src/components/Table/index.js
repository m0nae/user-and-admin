import { TableContainer, Table, TR, TH, TD } from "./TableStyles";

export default function () {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TR>
            <TH>First Name</TH>
            <TH>Last Name</TH>
            <TH>Email</TH>
            <TH>Status</TH>
          </TR>
        </thead>
        <tbody>
          <TR>
            <TD>Bob</TD>
            <TD>Smith</TD>
            <TD>bob@email.com</TD>
            <TD>Pending</TD>
          </TR>
          <TR>
            <TD>Bob</TD>
            <TD>Smith</TD>
            <TD>bob@email.com</TD>
            <TD>Active</TD>
          </TR>
          <TR>
            <TD>Bob</TD>
            <TD>Smith</TD>
            <TD>bob@email.com</TD>
            <TD>Pending</TD>
          </TR>
        </tbody>
      </Table>
    </TableContainer>
  );
}
