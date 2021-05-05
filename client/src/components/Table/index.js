import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table, TR, TH, TD } from "./TableStyles";
import TableRow from "./TableRow";
import Dropdown from "../Dropdown";
import { fetchAllUsers } from "./usersSlice";

export default function () {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  // activeRow is the row which currently has a Dropdown menu open
  // each TableRow has a fn that closes their Dropdown if they are not the activeRow
  // this allows there to only be one Dropdown menu open at a time!
  const [activeRow, setActiveRow] = useState();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

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
          {users &&
            users?.users[0]?.map((user) => (
              <TableRow
                index={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                status={user.state}
                setActiveRow={setActiveRow}
                activeRow={activeRow}
              />
            ))}
          {/* <TableRow
            index={3}
            firstName="Sam"
            lastName="Smith"
            email="sam@email.com"
            status="Pending"
            setActiveRow={setActiveRow}
            activeRow={activeRow}
          /> */}
        </tbody>
      </Table>
    </Container>
  );
}
