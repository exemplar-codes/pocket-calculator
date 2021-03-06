import React from "react";

import "./KeyPad.css";

import OnKey from "./Buttons/MiscKey/ClearKey/ClearKey";
import OffKey from "./Buttons/MiscKey/OffKey/OffKey";

import MinusKey from "./Buttons/OperatorKeys/OperatorKey";
import PlusKey from "./Buttons/OperatorKeys/PlusKey";
import DivideKey from "./Buttons/OperatorKeys/DivideKey";
import MultiplyKey from "./Buttons/OperatorKeys/MultiplyKey";

import NumberKey from "./Buttons/NumberKey/NumberKey";

import PointKey from "./Buttons/OperatorKeys/PointKey";
import EqualsKey from "./Buttons/OperatorKeys/EqualsKey";

const KeyPad = () => {
  return (
    <div className="keypad">
      <OffKey />
      <OnKey />
      <DivideKey />
      <MultiplyKey />
      <NumberKey number="7" />
      <NumberKey number="8" />
      <NumberKey number="9" />
      <MinusKey />
      <NumberKey number="4" />
      <NumberKey number="5" />
      <NumberKey number="6" />
      <PlusKey className="plus-grid" />
      <NumberKey number="1" />
      <NumberKey number="2" />
      <NumberKey number="3" />
      <NumberKey number="0" />
      <PointKey />
      <EqualsKey className="equals-grid" />
    </div>
  );
};

export default KeyPad;
