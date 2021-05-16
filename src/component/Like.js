import React from "react";

export default function Like({ clickCounter }) {
  return <button className = "like" onClick = {clickCounter}><i className="fas fa-heart"></i></button>;
}
