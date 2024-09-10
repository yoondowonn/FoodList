import React from "react";
import { KeyValueProps, StyledKeyValue } from "./StyledKeyValue";

const KeyValue: React.FC<KeyValueProps> = ({
  keyLabel,
  value,
  className,
  textAlign,
}) => {
  return (
    <StyledKeyValue className={className} $textAlign={textAlign}>
      <span className="key">{keyLabel}</span>
      <span className="value">{value}</span>
    </StyledKeyValue>
  );
};

export default KeyValue;
