import { useState } from "react";
import {
  Wrapper,
  SignupContainer,
  Input,
  Label,
  SignupBtn,
  TextLink,
} from "./SignupStyles";

import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../../components/Table/usersSlice";

export default function () {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
  };

  return (
    <Wrapper>
      <h1>Acme.</h1>
      <SignupContainer>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          name="firstName"
          type="text"
          onChange={(e) =>
            setUserData({ ...userData, firstName: e.target.value })
          }
          value={userData.firstName}
        />
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          name="lastName"
          type="text"
          onChange={(e) =>
            setUserData({ ...userData, lastName: e.target.value })
          }
          value={userData.lastName}
        />
        <Label htmlFor="email">Email Address</Label>
        <Input
          name="email"
          type="text"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          value={userData.email}
        />
        <SignupBtn onClick={(e) => handleSubmit(e)}>Sign Up</SignupBtn>
        <TextLink to="/admin">Continue to admin page</TextLink>
      </SignupContainer>
    </Wrapper>
  );
}
