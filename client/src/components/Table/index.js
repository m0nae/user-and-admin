import { useState } from "react";
import { Container, Table, TR, TH, TD } from "./TableStyles";
import TableRow from "./TableRow";
import Dropdown from "../Dropdown";

export default function () {
  // activeRow is the row which currently has a Dropdown menu open
  // each TableRow has a fn that closes their Dropdown if they are not the activeRow
  // this allows there to only be one Dropdown menu open at a time!
  const [activeRow, setActiveRow] = useState();

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
          <TableRow
            index={1}
            firstName="Bob"
            lastName="Jones"
            email="bob@email.com"
            status="Pending"
            setActiveRow={setActiveRow}
            activeRow={activeRow}
          />
          <TableRow
            index={2}
            firstName="John"
            lastName="Doe"
            email="john@email.com"
            status="Active"
            setActiveRow={setActiveRow}
            activeRow={activeRow}
          />
          <TableRow
            index={3}
            firstName="Sam"
            lastName="Smith"
            email="sam@email.com"
            status="Pending"
            setActiveRow={setActiveRow}
            activeRow={activeRow}
          />
        </tbody>
      </Table>
    </Container>
  );
}
