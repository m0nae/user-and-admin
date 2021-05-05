import { StatusTag, CaretDown } from "./StatusTagStyles";

export default function ({ onClick, status }) {
  return (
    <StatusTag onClick={onClick} status={status}>
      {status}
      <CaretDown>
        <i className="fas fa-caret-down"></i>
      </CaretDown>
    </StatusTag>
  );
}
