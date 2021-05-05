import {
  Container,
  Table,
  TR,
  TH,
  TD,
  ActiveStatusTag,
  PendingStatusTag,
  Dropdown,
  DropdownOption,
  CaretDown,
} from "./TableStyles";
import StatusTag from "../StatusTag";

export default function () {
  return (
    <Container>
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
            <TD>
              <StatusTag status="Pending" />
            </TD>
          </TR>
          <TR>
            <TD>Bob</TD>
            <TD>Smith</TD>
            <TD>bob@email.com</TD>
            <TD>
              <StatusTag status="Active" />
            </TD>
          </TR>
          <TR>
            <TD>Bob</TD>
            <TD>Smith</TD>
            <TD>bob@email.com</TD>
            <TD>
              <StatusTag status="Pending" />
              <Dropdown>
                <DropdownOption>Active</DropdownOption>
                <DropdownOption>Pending</DropdownOption>
              </Dropdown>
            </TD>
          </TR>
        </tbody>
      </Table>
    </Container>
  );
}
