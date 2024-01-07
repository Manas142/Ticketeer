import React from "react";
import { useRef, useState } from "react";
import CustomButton from "../components/Commons/Button";

export default function Custom() {
  const div = useRef(null);

  return (
    <div ref={div}>
      <input type="text" />
      <CustomButton div={div} />
    </div>
  );
}
