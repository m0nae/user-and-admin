import { Dropdown, DropdownOption } from "./DropdownStyles";

export default function ({ open }) {
  return (
    <Dropdown open={open}>
      <DropdownOption>Active</DropdownOption>
      <DropdownOption>Pending</DropdownOption>
    </Dropdown>
  );
}
