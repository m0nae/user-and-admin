import {
  Wrapper,
  SignupContainer,
  Input,
  Label,
  SignupBtn,
  TextLink,
} from "./SignupStyles";

export default function () {
  return (
    <Wrapper>
      <h1>Acme.</h1>
      <SignupContainer>
        <Label htmlFor="firstName">First Name</Label>
        <Input name="firstName" type="text" />
        <Label htmlFor="lastName">Last Name</Label>
        <Input name="lastName" type="text" />
        <Label htmlFor="email">Email Address</Label>
        <Input name="email" type="text" />
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" />
        <SignupBtn>Sign Up</SignupBtn>
        <TextLink to="/admin">Continue to admin page</TextLink>
      </SignupContainer>
    </Wrapper>
  );
}
