import { useState, useEffect, useRef } from "react";
import { TR, TD } from "../TableStyles";
import StatusTag from "../../StatusTag";
import Dropdown from "../../Dropdown";

export default function ({
  firstName,
  lastName,
  email,
  status,
  index,
  activeRow,
  setActiveRow,
}) {
  const [open, setOpen] = useState(false);
  // todo: add ability to make Dropdown disappear when clicking outside of the StatusTag
  // const activeStatusTag = useRef();

  const handleDropdownOpen = () => {
    setActiveRow(index);
    setOpen(!open);
  };

  useEffect(() => {
    if (activeRow !== index) {
      setOpen(false);
    }
  }, [activeRow]);

  return (
    <>
      <TR>
        <TD>{firstName}</TD>
        <TD>{lastName}</TD>
        <TD>{email}</TD>
        <TD>
          <StatusTag
            onClick={() => handleDropdownOpen(!open)}
            status={status}
            // activeStatusTag={activeStatusTag}
          />
          <Dropdown open={open} />
        </TD>
      </TR>
    </>
  );
}
