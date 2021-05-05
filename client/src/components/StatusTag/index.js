import { StatusTag, CaretDown } from "./StatusTagStyles";

export default function ({ status }) {
  return (
    <StatusTag status={status}>
      {status}
      <CaretDown>
        <i class="fas fa-caret-down"></i>
      </CaretDown>
    </StatusTag>
  );
}
