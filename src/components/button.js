import React from "react";
const logoutStyles = {
  position: "absolute",
  bottom: "0.5rem",
  right: "0.5rem",
  border: "5px ridge beige",
  background: "lightgrey",
  cursor: "pointer",
  fontWeight: "bold",
  padding: "0.25rem"
};

export default function Button(props) {
  return (
    <button style={logoutStyles} type="button" {...props}>
      {props.children}
    </button>
  );
}
