import { useRef, useState } from "react";
import CustomButton from "../components/Commons/Button";



export default function Custom() {

    const inputField= useRef(null);

  return (
    <div>
        <input type="text" ref={inputField} />
        <CustomButton inputField={inputField} />
    </div>

  );
}
