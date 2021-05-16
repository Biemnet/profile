import React from "react";

export default function Like({ clickHandler }) {
  return <button className= "like" onClick={clickHandler}><i className="fas fa-heart"></i></button>;
}
