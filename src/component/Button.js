import React from "react";

export default function Button({ clickHandler, btntext }) {
  return <button onClick={clickHandler}>{btntext}</button>;
}
